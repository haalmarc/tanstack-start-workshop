# TanStack Start Workshop

Denne workshopen lærer deg det viktigste du trenger å vite om TanStack Start.

## Starte appen

Start med å installere og kjøre opp app.

```
pnpm install
pnpm dev
```

### Problemer med å kjøre appen? 

- Mangler pnpm? 

```bash
npm install -g pnpm
```

- Feil node-versjon? (se `.nvmrc`). 

```bash
nvm use
```

- Finner ikke localhost:3000?

Dobbeltsjekk at du ikke har andre apper kjørende allerede.




## Oppgaver

Datafetching skjer mot api/cafes. Dataene resettes ved stopping av server og kjøre opp igjen.

Du finner alle oppgavene under tasks-\*. TanStack Start er 95% TanStack Router. Oppgavene er delt opp i først TanStack Router, TanStack Router med Query og så TanStack Start.

Du trenger kun å endre i task*-filene, med mindre noe er spesifisert annerledes.
Løsning finner du i task*-solution.tsx

Symbolene er 👉 oppgave du koder, 💭 refleksjonsoppgave uten fasit og 📖 læringsmateriell.
💡 i fasit betyr hvor koden er endret.

## Ekstra Oppgaver

Ferdig med alle oppgavene i tasks? Gratulerer! 🎉

Da kan du begi deg ut på å utforske litt mer fritt. Her er noen forslag til videre dypdykk:

### Flere strukturerte oppgaver

Ønsker flere strukturerte oppgaver? Da kan du bryne deg på Jokes-workshopen her.

📖 https://tanstack.com/start/latest/docs/framework/react/reading-writing-file

### Middleware i TanStack Start

Hva er egentlig middleware, og hvordan fungerer det i TanStack Start? Hvordan ville du håndtere å sjekke autentisering på en bruker? 

Ta en titt på docs, gjerne lag noen filer for å teste. 

📖 https://tanstack.com/start/latest/docs/framework/react/middleware

### Skjemaer i TanStack Start

Fra oppgavene har du allerede testet å legge til en kafé. Hvordan ville du lagd et produksjonsklart skjema, med rett validering, feilhåndtering og lastefunksjoner? 

### Velge SSR eller SSG

Med Next.js kan du lett velge mellom dynamiske og statiske sider. Hvordan gjør du tilsvarende i TanStack Start - og når bør du velge hva? 

📖
- https://tanstack.com/start/latest/docs/framework/react/selective-ssr
- https://tanstack.com/start/latest/docs/framework/react/static-prerendering