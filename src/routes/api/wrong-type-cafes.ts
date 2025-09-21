// src/routes/api/cafes.ts
import { createServerFileRoute } from "@tanstack/react-start/server";
import { json } from "@tanstack/react-start";
import { db } from "~/server/db";

export const ServerRoute = createServerFileRoute("/api/wrong-type-cafes").methods({
  GET: async () => {
    // For start-task2, returning score instead of rating to simulate validation error
    const editedCafes = db.cafes.map(c => {
      const { rating, ...rest } = c;
      return { ...rest, score: rating };
    })
    return json(editedCafes);
  },
});
