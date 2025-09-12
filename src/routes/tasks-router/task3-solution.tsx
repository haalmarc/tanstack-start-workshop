import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import { CafeListItem } from "../../components/CafeListItem";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

export const Route = createFileRoute("/tasks-router/task3-solution")({
  loader: async (request) => {
    // 💡 Bruker context fra request
    const api = new URL("/api/cafes", request.context.apiBase);
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
});

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Løsning 3: Route Context ♻️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
