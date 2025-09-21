import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Velkommen!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Start med router oppgaver, så query, så start. Husk også å lese
          readme.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Kom i gang
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/tasks-router/task1"
              className="bg-white p-4 rounded shadow block hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-800 mb-2">
                1. Router oppgaver
              </h3>
              <p className="text-sm text-gray-600">
                Start med det grunnleggende: Hvordan bruke TanStack Router?
              </p>
            </Link>
            <Link
              to="/tasks-query/task1"
              className="bg-white p-4 rounded shadow block hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-800 mb-2">
                2. Query oppgaver
              </h3>
              <p className="text-sm text-gray-600">
                Fortsett med hvordan du kan bruke TanStack Query med Router
              </p>
            </Link>
            <Link
              to="/tasks-start/task1"
              className="bg-white p-4 rounded shadow block hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-800 mb-2">
                3. Start oppgaver
              </h3>
              <p className="text-sm text-gray-600">
                Hva introduserer TanStack Start? Sjekk det ut.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
