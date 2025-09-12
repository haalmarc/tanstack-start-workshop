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

export const Route = createFileRoute("/tasks-query/task1-solution")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(postsQueryOptions),
  component: RouteComponent,
});

/*
  💭
  - Hvorfor bruker TkDodo kun loader for å prefetche data?
  - Hvorfor ikke bare bruke useQuery alene?
  - Hva er forskjellen på å bruke useQuery og useSuspenseQuery?

  📖 https://github.com/TanStack/router/discussions/1563

*/

function RouteComponent() {
  const { data } = useSuspenseQuery(postsQueryOptions);

  return (
    <div>
      <Title>Løsning 1: TanStack Query med Router 🌴</Title>
      <ul>
        {data?.map((cafe) => (
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
