import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  admin: {
    group: "Configuración",
    description: "Pie de página del sitio",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("footer")],
  // },
  fields: [
    {
      name: "tagline",
      type: "text",
      label: "Eslogan",
      defaultValue: "Tecnología que impulsa tu éxito",
    },
    {
      name: "columns",
      type: "array",
      label: "Columnas",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Título",
        },
        {
          name: "links",
          type: "array",
          label: "Enlaces",
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
    },
    {
      name: "copyright",
      type: "text",
      label: "Copyright",
      defaultValue: "© 2026 CTCSistemas. Todos los derechos reservados.",
    },
  ],
};
