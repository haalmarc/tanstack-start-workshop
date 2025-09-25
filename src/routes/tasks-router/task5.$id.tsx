import { createFileRoute } from "@tanstack/react-router";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";

export const Route = createFileRoute("/tasks-router/task5/$id")({
  component: RouteComponent,
});

/* 
  👉 Hent dynamisk data
  - Bytt ut å vise hardkodet kafe med å hente kafe-data basert på id
  -- Du kan bruke API-endepunktet /api/cafes/:id
  - Bruk loader til å hente data. Du kan hente ut params i loaderen

  💭 
  - Hvilke andre måter kunne du ha hentet ut data basert på params?

  📖 https://tanstack.com/router/v1/docs/framework/react/guide/path-params#path-params-in-loaders
*/

const mockCafe = {
  id: "1",
  name: "Kafe Eksempel",
  city: "Eksempelbyen",
  rating: 4,
};

function RouteComponent() {
  return (
    <div>
      <Title>Oppgave 5: Dynamisk data 🤖</Title>
      <CafeListItem cafe={mockCafe} />
    </div>
  );
}
