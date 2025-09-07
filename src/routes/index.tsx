import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <ul>
        <li>
          <Link
            // @ts-expect-error
            to="/this-route-does-not-exist"
          >
            This Route Does Not Exist
          </Link>
        </li>
        <li>
          <Link to="/cafes">Cafe</Link>
        </li>
      </ul>
    </div>
  );
}
