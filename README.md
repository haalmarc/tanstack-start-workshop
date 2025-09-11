# TanStack Start Workshop

pnpm install
pnpm dev

##

Server is seeded with api/cafes. Resets on stopping server.

## Oppgaver

### Oppgave 0: Hvorfor TanStack Start?

- Hva er forskjellen på TanStack Start og TanStack Router?

Se https://tanstack.com/start/latest/docs/framework/react/overview

- Når bør du bruke TanStack Start over kun TanStack Router?

- Når bør du ikke bruke TanStack Start?

### Oppgave 1: Navigering

- Legg til en felles navbar for alle sider og naviger til /cafes
  -- Hvilke måter kan du legge til felles layout på?

<details> 
<summary>Løsning</summary>

```ts
// __root.tsx
function RootComponent() {
  return (
    <RootDocument>
      <nav>
        <ul>
          <li>
            <Link to="/cafes">Cafe</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </RootDocument>
  );
}
```

</details>

- Legg til en lenke til en ikke-eksisterende rute og en NotFound-komponent, så det er en fallback-visning ved ikke-eksisterende ruter

<details>
<summary>Løsning</summary>

```ts
// index.ts
<Link
  // @ts-expect-error
  to="/this-route-does-not-exist"
>
  This Route Does Not Exist
</Link>
```

```ts
// __root.tsx
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  // ...
  notFoundComponent: () => <NotFound />,
  // ...
});
```

</details>

- Legg til styling i navbaren, så aktiv lenke er i bold.

<details>
<summary>Løsning</summary>

```ts
// __root.tsx
<Link
  to="/cafes"
  activeProps={{
    className: "font-bold",
  }}
>
  Cafes
</Link>
```

</details>

### Oppgave 2: Datahenting med loader

- Hent alle kafeer med en route-loader /api/cafes og list dem ut.

<details>
<summary>Løsning</summary>

```ts
// cafes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import type { Cafe } from "~/server/db";

const getBase = () =>
  import.meta.env.SSR
    ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000" // server
    : window.location.origin; // klient

export const Route = createFileRoute("/cafes/")({
  loader: async () => {
    const api = new URL("/api/cafes", getBase());
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("Failed to fetch cafes");
    }
    return (await res.json()) as Cafe[];
  },
  component: RouteComponent,
});

function RouteComponent() {
  const cafes = Route.useLoaderData();
  return (
    <ul>
      {cafes.map((c) => (
        <li key={c.id}>
          {c.name} - {c.city}
        </li>
      ))}
    </ul>
  );
}
```

</details>

- Legg til url-basen i route, så du slipper å legge det til i hver fetch

<details>
<summary>Løsning</summary>

```ts
// routes/__root.tsx
export const Route = createRootRoute({
  beforeLoad: () => {
    const apiBase = import.meta.env.SSR
      ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000"
      : window.location.origin;
    return { apiBase };
  },
  // ...
});
```

```ts
export const Route = createFileRoute("/cafes/")({
  loader: async (request) => {
    const api = new URL("/api/cafes", request.context.apiBase);
    const res = await fetch(api);
    // ...
  },
});
```

</details>

- Opprett en dynamisk rute som henter data fra den relevante cafe-id-en. Du kan hente data på /api/cafes/$id. Legg også til navigering fra /cafes.

<details>
<summary>Hint</summary>

```ts
// src/routes/cafes/$id.tsx
export const Route = createFileRoute("/cafes/$id")({
  loader: async ({ params, context }) => {
    // ... hente data
  }),
  component: CafePage,
  pendingComponent: () => <p>Laster ...</p>, // Uten lasting vil ting feil
});
```

</details>

<details>
<summary>Løsning</summary>

```ts
// src/routes/cafes/$id.tsx
import { createFileRoute } from "@tanstack/react-router";
import type { Cafe } from "~/server/db";

export const Route = createFileRoute("/cafes/$id")({
  loader: async ({ params, context }) => {
    const api = new URL(`/api/cafes/${params.id}`, context.apiBase);
    const res = await fetch(api);

    return (await res.json()) as Cafe;
  },
  component: CafePage,
  pendingComponent: () => <p>Laster ...</p>,
});

function CafePage() {
  const cafe = Route.useLoaderData();
  return (
    <article>
      <h1 className="text-xl font-semibold">{cafe.name}</h1>
      <p>{cafe.city}</p>
      <p>Rating: {cafe.rating}</p>
    </article>
  );
}
```

</details>

- Hvordan ser løsningen ut om du bytter pendingComponent med suspense?

<details>
<summary>Løsning</summary>

```ts
// src/routes/cafes/$id.tsx
export const Route = createFileRoute("/cafes/$id")({
  // ... dropper pendingComponent
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback="sus">
      <CafePage />
    </Suspense>
  );
}
```

</details>
