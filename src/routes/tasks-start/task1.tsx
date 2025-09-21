import { createFileRoute } from "@tanstack/react-router";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";
import { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

export const Route = createFileRoute("/tasks-start/task1")({
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
  👉 Bytt ut loaderData med server function
  - Lag en server function til å hente ut kafeer

  💭
  - loaderData er "isomorfisk". Hvorfor kan det være et problem for datahenting?
  - Hvorfor bruke server function over API-route?

  📖 https://tanstack.com/start/latest/docs/framework/react/server-functions
*/

function RouteComponent() {
  const cafes = Route.useLoaderData();
  return (
    <div>
      <Title>Oppgave 1: Server Function ✨</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
