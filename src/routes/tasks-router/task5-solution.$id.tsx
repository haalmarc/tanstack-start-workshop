import { createFileRoute } from "@tanstack/react-router";
import { CafeListItem } from "~/components/CafeListItem";
import { Cafe } from "~/server/db";

export const Route = createFileRoute("/tasks-router/task5-solution/$id")({
  loader: async ({ params, context }) => {
    // 💡 Henter params ved loader, og bruker dem i datahentingen
    const api = new URL(`/api/cafes/${params.id}`, context.apiBase);
    const res = await fetch(api);

    return (await res.json()) as Cafe;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const cafe = Route.useLoaderData();

  return <CafeListItem cafe={cafe} />;
}
