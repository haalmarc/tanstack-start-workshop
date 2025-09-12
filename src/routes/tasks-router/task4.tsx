import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";

export const Route = createFileRoute("/tasks-router/task4")({
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
  👉 Naviger til dynamisk rute
  - Vi har allerede opprettet routen til task4-dynamic.$id.tsx

  💭 
  - Hvordan kan vi validere dynamiske id-er for å sikre at de er gyldige og trygge å bruke?

  📖 https://tanstack.com/router/v1/docs/framework/react/guide/path-params#navigating-with-path-params
*/

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 4: Dynamisk rute 🤖</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItemWithLink key={cafe.id} cafe={cafe}>
            {/* @ts-ignore */}
            <Link>Besøk kafeen</Link>
          </CafeListItemWithLink>
        ))}
      </ul>
    </div>
  );
}
