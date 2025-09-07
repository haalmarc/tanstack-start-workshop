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

<details>

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

<details>
