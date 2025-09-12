import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";

export const Route = createFileRoute("/tasks-router/task4-solution")({
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

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 4: Dynamisk rute 🤖</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItemWithLink key={cafe.id} cafe={cafe}>
            {
              // 💡 Legger til dynamisk variabel i "to" og sender med params
            }
            <Link to="/tasks-router/task4-dynamic/$id" params={{ id: cafe.id }}>
              Besøk kafeen
            </Link>
          </CafeListItemWithLink>
        ))}
      </ul>
    </div>
  );
}
