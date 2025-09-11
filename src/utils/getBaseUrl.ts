export const getBaseUrl = () =>
  import.meta.env.SSR
    ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000" // server
    : window.location.origin; // klient
