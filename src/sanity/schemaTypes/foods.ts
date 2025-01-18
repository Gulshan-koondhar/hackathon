export default {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
      description: "Select the category for this food item",
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
  ],
};
