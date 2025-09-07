// src/routes/cafes/$id.tsx
import { createFileRoute } from "@tanstack/react-router";
import type { Cafe } from "~/server/db";

export const Route = createFileRoute("/cafes/$id")({
  loader: async ({ params, context }) => {
    const api = new URL(`/api/cafes/${params.id}`, context.apiBase);
    const res = await fetch(api);

    return (await res.json()) as Cafe;
  },
  component: CafePage,
  pendingComponent: () => <p>Laster ...</p>,
});

function CafePage() {
  const cafe = Route.useLoaderData();
  return (
    <article>
      <h1 className="text-xl font-semibold">{cafe.name}</h1>
      <p>{cafe.city}</p>
      <p>Rating: {cafe.rating}</p>
    </article>
  );
}
