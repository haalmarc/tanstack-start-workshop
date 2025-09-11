import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import { CafeListItem } from "../../components/CafeListItem";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

export const Route = createFileRoute("/tasks/task3-solution")({
  loader: async (request) => {
    // 💡 Bruker context fra request
    const api = new URL("/api/cafes", request.context.apiBase);
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
});

function RouteComponent() {
  /* 
    👉 Bruk global context, så du slipper å definere getBaseUrl per fetch
    - I __root.tsx har vi lagt til "apiBase" som gir deg base-url til API-et
    - Bruk RouteContext til å hente ut denne verdien (istedenfor å bruke getBaseUrl)

    💭 
    - Hvilke andre bruk kommer du på for Route Context?

    📖 https://tanstack.com/router/v1/docs/framework/react/guide/router-context#using-the-router-context
  */
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Løsning 3: Route Context ♻️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe}></CafeListItem>
        ))}
      </ul>
    </div>
  );
}
