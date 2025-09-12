import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import { CafeListItem } from "../../components/CafeListItem";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

export const Route = createFileRoute("/tasks/task2-solution")({
  // 💡 Legger til loader for å hente data
  loader: async () => {
    const api = new URL("/api/cafes", getBaseUrl());
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
});

/* 
  💭 
  - Ta en titt på getBaseUrl. Hvorfor trengs det å ta hensyn til SSR?
*/

function RouteComponent() {
  // 💡 Tar i bruk loaderData
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 2: Hent kafeer ☕️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
