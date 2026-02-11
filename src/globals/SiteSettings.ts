import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Configuración del Sitio",
  admin: {
    group: "Configuración",
    description: "Configuración general del sitio web",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("site-settings")],
  // },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      label: "Nombre del Sitio",
      defaultValue: "CTCSistemas",
    },
    {
      name: "siteDescription",
      type: "textarea",
      required: true,
      label: "Descripción del Sitio",
      defaultValue: "Soluciones tecnológicas integrales: Soporte IT, ERP, Desarrollo Web y Venta de Hardware profesional",
    },
    {
      name: "keywords",
      type: "array",
      label: "Palabras Clave (SEO)",
      fields: [
        {
          name: "keyword",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
    },
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
      label: "Favicon",
    },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
      label: "Imagen Open Graph",
      admin: {
        description: "Imagen para compartir en redes sociales (1200x630px)",
      },
    },
  ],
};
