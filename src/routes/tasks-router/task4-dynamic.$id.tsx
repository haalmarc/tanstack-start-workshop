import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks-router/task4-dynamic/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <div>Hello kafe-id {id}!</div>;
}
