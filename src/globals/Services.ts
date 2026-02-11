import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const Services: GlobalConfig = {
  slug: "services",
  label: "Servicios",
  admin: {
    group: "Secciones",
    description: "Servicios ofrecidos",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("services")],
  // },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      defaultValue: "Nuestros Servicios",
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtítulo",
      defaultValue: "Soluciones tecnológicas completas para empresas",
    },
    {
      name: "services",
      type: "array",
      required: true,
      label: "Lista de Servicios",
      minRows: 1,
      fields: [
        {
          name: "icon",
          type: "select",
          required: true,
          label: "Icono",
          options: [
            { label: "Headset (Soporte IT)", value: "headset" },
            { label: "Database (ERP)", value: "database" },
            { label: "Code (Desarrollo Web)", value: "code" },
            { label: "Megaphone (Marketing)", value: "megaphone" },
            { label: "Server (Infraestructura)", value: "server" },
            { label: "Shield (Seguridad)", value: "shield" },
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
        {
          name: "features",
          type: "array",
          label: "Características",
          fields: [
            {
              name: "feature",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
