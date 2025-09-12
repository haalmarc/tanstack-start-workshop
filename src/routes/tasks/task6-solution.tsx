import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { Title } from "~/components/Title";
import type { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { CafeListItemWithLink } from "~/components/CafeListItemWithLink";

export const Route = createFileRoute("/tasks/task6-solution")({
  loader: async () => {
    // 2 sekunder delay for å simulere lasting
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const api = new URL("/api/cafes", getBaseUrl());
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
  // 💡 Legger til pendingComponent for å vise en laste-indikator
  pendingComponent: () => <p>Laster 123...</p>,
});

/* 
  💭 
  - Hvordan legge til en generell laste-indikator, uten å gjøre det per komponent?

  📖 https://tanstack.com/router/v1/docs/framework/react/api/router/RouterOptionsType#defaultpendingcomponent-property
*/

function RouteComponent() {
  const cafes = Route.useLoaderData();

  return (
    <div>
      <Title>Løsning 6: Lasting ⚙️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItemWithLink key={cafe.id} cafe={cafe}>
            <Link to="/tasks/task5-solution/$id" params={{ id: cafe.id }}>
              Besøk kafeen
            </Link>
          </CafeListItemWithLink>
        ))}
      </ul>
    </div>
  );
}
