import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import { CafeListItem } from "../../components/CafeListItem";

export const Route = createFileRoute("/tasks/task2-solution")({
  loader: async () => {
    const api = new URL("/api/cafes", getBase());
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
});

import type { Cafe } from "~/server/db";

const getBase = () =>
  import.meta.env.SSR
    ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000" // server
    : window.location.origin; // klient

function RouteComponent() {
  /* 
    👉 Vis kafeer
    - Bruk en loader til å hente kafeer fra http://localhost:3000/api/cafes
    - Vis kafeene i en liste

    💭 Er det noe forskjellig fra å bruke loaderData med TanStack Router versus TanStack Start?

    📖 https://tanstack.com/start/latest/docs/framework/react/learn-the-basics#routes
  */
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Oppgave 2: Hent kafeer ☕️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe}></CafeListItem>
        ))}
      </ul>
    </div>
  );
}
