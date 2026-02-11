import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Usuario",
    plural: "Usuarios",
  },
  admin: {
    useAsTitle: "email",
    group: "Administración",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nombre",
    },
    {
      name: "role",
      type: "select",
      label: "Rol",
      required: true,
      defaultValue: "editor",
      options: [
        {
          label: "Administrador",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
      access: {
        create: ({ req }) => req.user?.role === "admin",
        update: ({ req }) => req.user?.role === "admin",
      },
    },
  ],
};
