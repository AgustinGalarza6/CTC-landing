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
      defaultValue: "¿Listo para transformar tu negocio?",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Descripción",
      defaultValue: "Contáctanos hoy y descubre cómo podemos ayudarte",
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      label: "Texto del Botón",
      defaultValue: "Solicitar Cotización",
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
