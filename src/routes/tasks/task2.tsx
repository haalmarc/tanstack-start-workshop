import { createFileRoute } from "@tanstack/react-router";
import { Title } from "~/components/Title";
import { CafeListItem } from "../../components/CafeListItem";

export const Route = createFileRoute("/tasks/task2")({
  component: RouteComponent,
});

function RouteComponent() {
  /* 
    👉 Vis kafeer
    - Bruk en loader til å hente kafeer fra http://localhost:3000/api/cafes
    - Vis kafeene i en liste

    💭 Er det noe forskjellig fra å bruke loaderData med TanStack Router versus TanStack Start?

    📖 https://tanstack.com/start/latest/docs/framework/react/learn-the-basics#routes
  */

  const mockCafes = [
    {
      id: "5ddeee5b-2222-4069-86f4-0eebfa6b4d33",
      name: "Dobbel Espresso",
      city: "Oslo",
      rating: 4.5,
    },
    {
      id: "1ddeee5b-ffff-4069-86f4-0eebfa6b4d39",
      name: "Espresso House",
      city: "Bergen",
      rating: 4.9,
    },
    {
      id: "1ddeee5b-eeee-4069-86f1-0eebfa6b4d39",
      name: "Fiesta Lab",
      city: "Ålesund",
      rating: 4.1,
    },
  ];
  return (
    <div>
      <Title>Oppgave 2: Hent kafeer ☕️</Title>
      <ul>
        {mockCafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe}></CafeListItem>
        ))}
      </ul>
    </div>
  );
}
