import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";
import { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

// 💡 Server function - kjører kun på server
const getCafes = createServerFn({
  method: "GET",
}).handler(async () => {
  const api = new URL("/api/cafes", getBaseUrl());
  const res = await fetch(api);
  if (!res.ok) {
    throw new Error("Failed to fetch cafes");
  }
  return res.json() as Promise<Cafe[]>;
});

export const Route = createFileRoute("/tasks-start/task1-solution")({
  loader: () => getCafes(),
  component: RouteComponent,
});

/*
  💭
  - Hvorfor fremmer TanStack Start server functions 
    til datahenting, mens Next.js fremmer server functions 
    bare til mutering?
*/

function RouteComponent() {
  const cafes = Route.useLoaderData();
  return (
    <div>
      <Title>Løsning 1: Server Function ✨</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
