export type Cafe = {
  id: string;
  name: string;
  city: string;
  rating: number;
  favorite?: boolean;
};

const seed: Cafe[] = [
  {
    id: "5ddeee5b-2222-4069-86f4-0eebfa6b4d33",
    name: "Lille Espresso",
    city: "Oslo",
    rating: 4.2,
  },
  {
    id: "1ddeee5b-ffff-4069-86f4-0eebfa6b4d39",
    name: "Brenneriet",
    city: "Bergen",
    rating: 4.5,
  },
];

type DB = { cafes: Cafe[] };

const g = globalThis as any;
export const db: DB = g.__DB__ ?? (g.__DB__ = { cafes: [...seed] });
