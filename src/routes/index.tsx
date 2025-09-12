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
          <Link to="/tasks-router/task1">Task1</Link>
        </li>
        <li>
          <Link to="/cafes">Cafe</Link>
        </li>
      </ul>
    </div>
  );
}
