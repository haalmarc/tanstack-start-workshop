import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

async function fetchCafes(): Promise<Cafe[]> {
  const api = new URL("/api/cafes", getBaseUrl());
  const res = await fetch(api);
  if (!res.ok) {
    throw new Error("Failed to fetch cafes");
  }
  return res.json();
}

const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => fetchCafes(),
});

export const Route = createFileRoute("/tasks-query/task1")({
  component: RouteComponent,
});

/*
  👉 Hent data med TanStack Query
  - I denne filen hentes det data allerede med TanStack Query.
  -- Legg til en loader som kaller på ensureQueryData
  - Hint: queryClient fins i Route context

  💭
  - Hva er forskjellen på cachen i TanStack Query og TanStack Router?
  - Hva er fordelen med å hente data i loader når du allerede bruker TanStack Query?

  📖 
  - https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#to-router-cache-or-not-to-router-cache
  - https://tanstack.com/router/latest/docs/framework/react/guide/external-data-loading#a-more-realistic-example-using-tanstack-querys
*/

function RouteComponent() {
  const { data } = useSuspenseQuery(postsQueryOptions);

  return (
    <div>
      <Title>Løsning 1: TanStack Query med Router 🌴</Title>
      <ul>
        {data.map((cafe) => (
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
