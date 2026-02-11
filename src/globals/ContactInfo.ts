import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const ContactInfo: GlobalConfig = {
  slug: "contact-info",
  label: "Información de Contacto",
  admin: {
    group: "Configuración",
    description: "Datos de contacto de la empresa",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("contact-info")],
  // },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      label: "Nombre de la Empresa",
      defaultValue: "CTCSistemas",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "Teléfono",
    },
    {
      name: "whatsapp",
      type: "text",
      required: true,
      label: "WhatsApp",
      admin: {
        description: "Formato: 5491112345678 (código país + código área + número)",
      },
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email",
    },
    {
      name: "address",
      type: "textarea",
      label: "Dirección",
    },
    {
      name: "workingHours",
      type: "textarea",
      label: "Horario de Atención",
      defaultValue: "Lunes a Viernes: 9:00 - 18:00\nSábados: 9:00 - 13:00",
    },
    {
      name: "socialMedia",
      type: "group",
      label: "Redes Sociales",
      fields: [
        {
          name: "facebook",
          type: "text",
          label: "Facebook",
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram",
        },
        {
          name: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter",
        },
      ],
    },
  ],
};
