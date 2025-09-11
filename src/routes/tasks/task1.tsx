import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";

export const Route = createFileRoute("/tasks/task1")({
  component: RouteComponent,
});

function RouteComponent() {
  /* 
    👉 Naviger til oppgave2
    - Legg til en link her, så du kan navigere til neste oppgave

    💭 - Legg merke til typing på navigasjonen. Hvordan vet IDE-en om en rute ikke fins?

    📖 https://tanstack.com/start/latest/docs/framework/react/learn-the-basics#navigation
  */

  return (
    <div>
      <Title>Oppgave Oppgave1 🤘</Title>
      <p>Naviger til oppgave2 😉.</p>
    </div>
  );
}
