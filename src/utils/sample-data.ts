import { User, ProductInterface } from "@/interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const productsMock: ProductInterface[] = [
  {
    id: 1,
    name: "Prod1",
    photo: {
      large: "",
      small: "",
      medium: "",
    },
    stock: 10,
    price: 100,
    description: "",
    is_active: true,
  },
];
