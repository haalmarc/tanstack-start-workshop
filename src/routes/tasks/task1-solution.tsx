import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "~/components/Title";

export const Route = createFileRoute("/tasks/task1-solution")({
  component: RouteComponent,
});

/*

💭
- Hva er forskjellen på a-tag og Link?
- Bruker du noen gang a-tag i TanStack Start / Next.js?
*/

function RouteComponent() {
  return (
    <div>
      <Title>Løsning Oppgave1 🤘</Title>
      {
        // 💡 Tar i bruk Link
      }
      <Link to="/tasks/task2">Oppgave2</Link>!
    </div>
  );
}
