import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { AddCafeForm } from "~/components/AddCafeForm";
import { CafeListItem } from "~/components/CafeListItem";
import { Title } from "~/components/Title";
import { Cafe } from "~/server/db";
import { getBaseUrl } from "~/utils/getBaseUrl";

const getCafes = createServerFn({
  method: "GET",
}).handler(async () => {
  const api = new URL("/api/cafes", getBaseUrl());
  const res = await fetch(api);
  if (!res.ok) {
    throw new Error("Failed to fetch cafes");
  }
  return res.json() as Promise<Cafe[]>;
});

const addCafe = createServerFn({
  method: "POST",
}).handler(async ({ data }) => {
  const api = new URL("/api/cafes", getBaseUrl());
  const res = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Forventer feil uten validator. Løsningen fikser det.
      // @ts-ignore
      name: data.name,
      // @ts-ignore
      location: data.location,
      // @ts-ignore
      rating: parseFloat(data.rating),
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to add cafe");
  }
  return res.json() as Promise<Cafe>;
});

export const Route = createFileRoute("/tasks-start/task3")({
  loader: () => getCafes(),
  component: RouteComponent,
});

/*
  👉 Legg til en kafe
  - Koble opp skjemaet med serverfunksjonen
  - Legg til validator av input til serverfunksjonen med Zod

  💭
  - Når bør du validere input i forhold til å validere respons?
  - Hvordan vise valideringsfeil til brukeren?

  📖 https://tanstack.com/start/latest/docs/framework/react/server-functions#using-a-validation-library
*/
function RouteComponent() {
  const cafes = Route.useLoaderData();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const rating = formData.get("rating") as string;
  }

  return (
    <div>
      <Title>Oppgave 3: Legg til en kafe ⛑️</Title>
      <AddCafeForm onSubmit={onSubmit} />

      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
