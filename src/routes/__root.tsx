/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import type { QueryClient } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Workshop TanStack Start",
        description: `Workshop for å lære TanStack Start. `,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  beforeLoad: () => {
    // 💡 Benyttes i oppgave3
    const apiBase = import.meta.env.SSR
      ? process.env.VITE_PUBLIC_ORIGIN ?? "http://localhost:3000"
      : window.location.origin;
    return { apiBase };
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function NavItem({ children }: { children: React.ReactNode }) {
  return <li className="flex flex-col gap-1 mr-4">{children}</li>;
}

function RootComponent() {
  return (
    <RootDocument>
      <nav className="p-2">
        <h2>Router</h2>
        <ul className="flex gap-2 text-lg">
          <NavItem>
            <Link
              to="/tasks-router/task1"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave1
            </Link>
            <Link
              to="/tasks-router/task1-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning1
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/tasks-router/task2"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave2
            </Link>
            <Link
              to="/tasks-router/task2-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning2
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/tasks-router/task3"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave3
            </Link>
            <Link
              to="/tasks-router/task3-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning3
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/tasks-router/task4"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave4
            </Link>
            <Link
              to="/tasks-router/task4-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning4
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/tasks-router/task5/$id"
              params={{ id: "5ddeee5b-2222-4069-86f4-0eebfa6b4d33" }}
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave5
            </Link>
            <Link
              to="/tasks-router/task5-solution/$id"
              params={{ id: "5ddeee5b-2222-4069-86f4-0eebfa6b4d33" }}
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning5
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/tasks-router/task6"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave6
            </Link>
            <Link
              to="/tasks-router/task6-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning6
            </Link>
          </NavItem>
        </ul>
        <hr className="mt-4 mb-4" />
        <h2>Query</h2>
        <ul className="flex gap-2 text-lg">
          <NavItem>
            <Link
              to="/tasks-query/task1"
              activeProps={{
                className: "font-bold",
              }}
            >
              Oppgave1
            </Link>
            <Link
              to="/tasks-query/task1-solution"
              activeProps={{
                className: "font-bold",
              }}
            >
              Løsning1
            </Link>
          </NavItem>
        </ul>
      </nav>
      <div className="p-2">
        <Outlet />
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="p-2 flex gap-2 text-lg">
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
        </div>
        <hr />
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
