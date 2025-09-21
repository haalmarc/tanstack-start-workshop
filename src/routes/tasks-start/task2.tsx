import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";
import { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

const getCafes = createServerFn({
  method: "GET",
}).handler(async () => {
  const api = new URL("/api/wrong-type-cafes", getBaseUrl());
  const res = await fetch(api);
  if (!res.ok) {
    throw new Error("Failed to fetch cafes");
  }
  return res.json() as Promise<Cafe[]>;
});

export const Route = createFileRoute("/tasks-start/task2")({
  loader: () => getCafes(),
  component: RouteComponent,
});

/*
  👉 Valider serverfunksjoners datarespons
  - Woops! Et felt mangler fra dataene.
  -- Legg til validering i serverfunksjonen med Zod for å sikre at dataene er korrekte.

  💭
  - Når bør du kaste feil ved validering?
  - Når du kaster feil, hvor styrer du hvor den fanges?

  📖 https://zod.dev/basics?id=parsing-data
*/
function RouteComponent() {
  const cafes = Route.useLoaderData();
  return (
    <div>
      <Title>Oppgave 2: Validere serverfunksjoners respons ⛑️</Title>
      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
