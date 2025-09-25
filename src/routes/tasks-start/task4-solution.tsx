import { createFileRoute, useRouter } from "@tanstack/react-router";
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

const AddCafeSchema = z.object({
  name: z.string().min(1, "Navn er påkrevd"),
  location: z.string().min(1, "Lokasjon er påkrevd"),
  rating: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), "Rating må være et tall"),
});

const addCafe = createServerFn({
  method: "POST",
})
  .validator(AddCafeSchema)
  .handler(async ({ data }) => {
    const api = new URL("/api/cafes", getBaseUrl());
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        location: data.location,
        rating: parseFloat(data.rating),
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to add cafe");
    }
    return res.json() as Promise<Cafe>;
  });

export const Route = createFileRoute("/tasks-start/task4-solution")({
  loader: () => getCafes(),
  component: RouteComponent,
});

/*
  💭
  - Er det mulig å invalidere i serverfunksjoner?
  - Hvordan kan du legge til optimistisk oppdatering i skjemaet?
*/

function RouteComponent() {
  const router = useRouter();
  const cafes = Route.useLoaderData();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const rating = formData.get("rating") as string;

    await addCafe({ data: { name: name, location, rating } });
    // 💡 Invaliderer loaderen for denne ruten
    await router.invalidate();
  }

  return (
    <div>
      <Title>Løsning 4: Slipp refreshen 🌴</Title>
      <AddCafeForm onSubmit={onSubmit} />

      <ul>
        {cafes.map((cafe) => (
          <CafeListItem key={cafe.id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
}
