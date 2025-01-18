import { type SchemaTypeDefinition } from "sanity";
import foods from "./foods";
import chefs from "./chefs";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs, category],
};
