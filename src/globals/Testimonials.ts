import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const Testimonials: GlobalConfig = {
  slug: "testimonials",
  label: "Testimonios",
  admin: {
    group: "Secciones",
    description: "Testimonios de clientes",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("testimonials")],
  // },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      defaultValue: "Lo que dicen nuestros clientes",
    },
    {
      name: "testimonials",
      type: "array",
      label: "Lista de Testimonios",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Nombre",
        },
        {
          name: "position",
          type: "text",
          required: true,
          label: "Cargo / Empresa",
        },
        {
          name: "content",
          type: "textarea",
          required: true,
          label: "Testimonio",
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
          label: "Foto (opcional)",
        },
        {
          name: "rating",
          type: "number",
          required: true,
          label: "Calificación",
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
  ],
};
