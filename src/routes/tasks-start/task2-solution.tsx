import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";
import { getBaseUrl } from "~/utils/getBaseUrl";
import { z } from "zod";

const CafeSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  rating: z.number(),
});

const getCafes = createServerFn({ method: "GET" }).handler(async () => {
  const api = new URL("/api/wrong-type-cafes", getBaseUrl());
  const res = await fetch(api);
  if (!res.ok) {
    throw new Error("Failed to fetch cafes");
  }
  const rawData = await res.json();

  // 💡 Valider API response før vi returnerer
  const validatedData = CafeSchema.array().parse(rawData);

  return validatedData;
});

export const Route = createFileRoute("/tasks-start/task2-solution")({
  loader: async () => await getCafes(),
  component: RouteComponent,
});

/*
  💭
  - Hvilke mangler har denne foreslåtte løsningen?
  - Hvordan ville du håndtert feil i datahenting i en ekte app?
  
*/
function RouteComponent() {
  const cafes = Route.useLoaderData();
  return (
    <div>
      <Title>Løsning 2: Validere serverfunksjoners respons ⛑️</Title>
      <ul>
        {cafes.map((cafe) => (
          // @ts-ignore Ignorer ts-feil siden vi forventer en feil her for oppgavens skyld
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
