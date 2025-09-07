// src/routes/api/cafes.ts
import { createServerFileRoute } from "@tanstack/react-start/server";
import { json } from "@tanstack/react-start";
import { db } from "~/server/db";

export const ServerRoute = createServerFileRoute("/api/cafes").methods({
  GET: async () => json(db.cafes),
  POST: async ({ request }) => {
    const body = await request.json();
    const cafe = { id: crypto.randomUUID(), ...body };
    db.cafes.push(cafe);
    return json(cafe, { status: 201 });
  },
});
