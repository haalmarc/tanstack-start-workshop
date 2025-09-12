import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";

export const Route = createFileRoute("/tasks-router/task6")({
  loader: async () => {
    // 2 sekunder delay for å simulere lasting
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
  👉 Legg til laste-tilstand 
  - Hint: etter du har lagt til lastetilstand, kan du teste lasting ved å bruke en inkognito-fane, 
    og navigere til denne ruten fra en annen rute.

  💭 
  - Hva innebærer defaultPreload: "intent", og hvordan påvirker det lastetilstand?
  - Hvorfor trenger du å bruke en inkognito-fane? Hvordan fungerer cachen i TanStack Start?

  📖 https://frontendmasters.com/blog/tanstack-router-data-loading-1/#loader-in-a-page
*/

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 6: Lasting ⚙️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItemWithLink key={cafe.id} cafe={cafe}>
            <Link
              to="/tasks-router/task5-solution/$id"
              params={{ id: cafe.id }}
            >
              Besøk kafeen
            </Link>
          </CafeListItemWithLink>
        ))}
      </ul>
    </div>
  );
}
