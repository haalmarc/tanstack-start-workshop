// src/routes/api/cafes/$id.ts
import { createServerFileRoute } from "@tanstack/react-start/server";
import { json } from "@tanstack/react-start";
import { db } from "~/server/db";

export const ServerRoute = createServerFileRoute("/api/cafes/$id").methods({
  GET: async ({ params }) => {
    const cafe = db.cafes.find((c) => String(c.id) === String(params.id));
    if (!cafe) return json({ error: "Not found" }, { status: 404 });
    return json(cafe);
  },
});
