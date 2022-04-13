export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
