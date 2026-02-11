import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navegación",
  admin: {
    group: "Configuración",
    description: "Configuración del menú de navegación",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("navigation")],
  // },
  fields: [
    {
      name: "mainMenu",
      type: "array",
      required: true,
      label: "Menú Principal",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Texto",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Link",
        },
      ],
    },
  ],
};
