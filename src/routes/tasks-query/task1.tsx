import { createFileRoute, Link } from "@tanstack/react-router";

import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";

export const Route = createFileRoute("/tasks-query/task1")({
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
  👉 Hent data med TanStack Query
  - Bruk ensureQueryData i loaderen
  - Bruk useSuspenseQuery i komponenten
  - Hint: queryClient fins i Route context

  💭
  - Hvorfor holder det ikke med loaderen?

  📖 https://tanstack.com/router/latest/docs/framework/react/guide/external-data-loading#a-more-realistic-example-using-tanstack-querys

*/

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 1: TanStack Query med Router 🌴</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItemWithLink key={cafe.id} cafe={cafe}>
            <Link to="/tasks-router/task4-dynamic/$id" params={{ id: cafe.id }}>
              Besøk kafeen
            </Link>
          </CafeListItemWithLink>
        ))}
      </ul>
    </div>
  );
}
