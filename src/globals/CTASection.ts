import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const CTASection: GlobalConfig = {
  slug: "cta-section",
  label: "CTA Section",
  admin: {
    group: "Secciones",
    description: "Sección de llamado a la acción",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("cta-section")],
  // },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      defaultValue: "¿Necesita soluciones y asistencia tecnológica para su empresa?",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Descripción",
      defaultValue: "Consulte con nuestro equipo para encontrar la solución tecnológica ideal.",
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      label: "Texto del Botón",
      defaultValue: "Hablar con un asesor",
    },
    {
      name: "buttonLink",
      type: "text",
      required: true,
      label: "Link del Botón",
      defaultValue: "/contacto",
    },
  ],
};
