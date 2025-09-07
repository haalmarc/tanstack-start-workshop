import { createFileRoute, Link } from "@tanstack/react-router";
import type { Cafe } from "~/server/db";

const getBase = () =>
  import.meta.env.SSR
    ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000" // server
    : window.location.origin; // klient

export const Route = createFileRoute("/cafes/")({
  loader: async (req) => {
    const api = new URL("/api/cafes", req.context.apiBase);
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
    <ul>
      {cafes.map((c) => (
        <li key={c.id}>
          <Link to="/cafes/$id" params={{ id: c.id }}>
            {c.name} - {c.city}
          </Link>
        </li>
      ))}
    </ul>
  );
}
