import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";

export const Route = createFileRoute("/tasks-router/task1")({
  component: RouteComponent,
});

/* 
  👉 Naviger til oppgave2
  - Legg til en link her, så du kan navigere til neste oppgave

  💭 - Legg merke til typing på navigasjonen. Hvordan vet IDE-en om en rute ikke fins?

  📖 https://tanstack.com/router/latest/docs/framework/react/guide/navigation#link-component
*/

function RouteComponent() {
  return (
    <div>
      <Title>Oppgave 1: Navigering 🤘</Title>
      <p>Naviger til oppgave2 😉.</p>
    </div>
  );
}
