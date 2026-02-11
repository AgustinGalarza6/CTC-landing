import type { GlobalConfig } from "payload";
// import { createGlobalAfterChangeHook } from "@/hooks/revalidation";

export const FAQs: GlobalConfig = {
  slug: "faqs",
  label: "FAQs",
  admin: {
    group: "Secciones",
    description: "Preguntas frecuentes",
  },
  // hooks: {
  //   afterChange: [createGlobalAfterChangeHook("faqs")],
  // },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      defaultValue: "Preguntas Frecuentes",
    },
    {
      name: "faqs",
      type: "array",
      label: "Preguntas",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Pregunta",
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
          label: "Respuesta",
        },
      ],
    },
  ],
};
