import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const WhyChooseUs: GlobalConfig = {
  slug: "why-choose-us",
  label: "Por Qué Elegirnos",
  admin: {
    group: "Secciones",
    description: "Razones para elegirnos",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("why-choose-us")],
  // },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      defaultValue: "¿Por qué elegir CTCSistemas?",
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtítulo",
    },
    {
      name: "points",
      type: "array",
      required: true,
      label: "Puntos Clave",
      minRows: 3,
      fields: [
        {
          name: "icon",
          type: "select",
          required: true,
          label: "Icono",
          options: [
            { label: "Check Circle (Calidad)", value: "check-circle" },
            { label: "Clock (Rapidez)", value: "clock" },
            { label: "Users (Equipo)", value: "users" },
            { label: "Award (Experiencia)", value: "award" },
            { label: "Shield (Confianza)", value: "shield" },
            { label: "Zap (Eficiencia)", value: "zap" },
          ],
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Título",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Descripción",
        },
      ],
    },
  ],
};
