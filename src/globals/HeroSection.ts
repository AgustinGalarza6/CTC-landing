import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const HeroSection: GlobalConfig = {
  slug: "hero-section",
  label: "Hero Section",
  admin: {
    group: "Secciones",
    description: "Sección principal de la home",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("hero-section")],
  // },
  fields: [
    {
      name: "headline",
      type: "text",
      required: true,
      label: "Título Principal",
      defaultValue: "Soluciones tecnológicas integrales para tu empresa",
    },
    {
      name: "subheadline",
      type: "textarea",
      required: true,
      label: "Subtítulo",
      defaultValue: "Soporte IT, ERP, Desarrollo Web y Venta de Hardware profesional",
    },
    {
      name: "primaryCTA",
      type: "group",
      label: "Botón Principal",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Texto",
          defaultValue: "Ver Productos",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Link",
          defaultValue: "/productos",
        },
      ],
    },
    {
      name: "secondaryCTA",
      type: "group",
      label: "Botón Secundario",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Texto",
          defaultValue: "Contactar",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Link",
          defaultValue: "/contacto",
        },
      ],
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Imagen de Fondo (opcional)",
    },
  ],
};
