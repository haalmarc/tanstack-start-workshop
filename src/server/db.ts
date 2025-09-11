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

  {
    id: "2ddeee5b-aaaa-4069-86f4-0eebfa6b4d34",
    name: "Kaffebrenneriet",
    city: "Oslo",
    rating: 4.3,
  },
  {
    id: "3ddeee5b-bbbb-4069-86f4-0eebfa6b4d35",
    name: "Java Espressobar",
    city: "Oslo",
    rating: 4.6,
  },
  {
    id: "4ddeee5b-cccc-4069-86f4-0eebfa6b4d36",
    name: "Dromedar Kaffebar",
    city: "Trondheim",
    rating: 4.7,
  },
  {
    id: "6ddeee5b-dddd-4069-86f4-0eebfa6b4d37",
    name: "Stockfleths",
    city: "Oslo",
    rating: 4.4,
  },
  {
    id: "7ddeee5b-eeee-4069-86f4-0eebfa6b4d38",
    name: "Godt Brød",
    city: "Bergen",
    rating: 4.5,
  },
  {
    id: "8ddeee5b-1111-4069-86f4-0eebfa6b4d39",
    name: "Tim Wendelboe",
    city: "Oslo",
    rating: 4.8,
  },
  {
    id: "9ddeee5b-2222-4069-86f4-0eebfa6b4d40",
    name: "Supreme Roastworks",
    city: "Oslo",
    rating: 4.7,
  },
  {
    id: "10ddeee5b-3333-4069-86f4-0eebfa6b4d41",
    name: "Kaffemisjonen",
    city: "Bergen",
    rating: 4.6,
  },
  {
    id: "11ddeee5b-4444-4069-86f4-0eebfa6b4d42",
    name: "Jacobsen og Svart",
    city: "Trondheim",
    rating: 4.8,
  },
  {
    id: "12ddeee5b-5555-4069-86f4-0eebfa6b4d43",
    name: "Fuglen",
    city: "Oslo",
    rating: 4.9,
  },
];

type DB = { cafes: Cafe[] };

const g = globalThis as any;
export const db: DB = g.__DB__ ?? (g.__DB__ = { cafes: [...seed] });
