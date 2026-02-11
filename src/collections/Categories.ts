import type { CollectionConfig } from "payload";
import {
  createCollectionAfterChangeHook,
  createCollectionAfterDeleteHook,
} from "@/hooks/revalidation";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Categoría",
    plural: "Categorías",
  },
  admin: {
    useAsTitle: "name",
    group: "E-commerce",
    description: "Categorías de productos",
    defaultColumns: ["name", "slug", "icon", "order"],
  },
  hooks: {
    afterChange: [createCollectionAfterChangeHook("categories")],
    afterDelete: [createCollectionAfterDeleteHook("categories")],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "URL amigable: notebooks, pcs, monitores, accesorios",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            }
            return value;
          },
        ],
      },
    },
    {
      name: "icon",
      type: "select",
      required: true,
      label: "Icono",
      options: [
        { label: "Laptop (Notebooks)", value: "laptop" },
        { label: "Monitor (Monitores)", value: "monitor" },
        { label: "CPU (PCs)", value: "cpu" },
        { label: "Server (Servidores)", value: "server" },
        { label: "Keyboard (Teclados)", value: "keyboard" },
        { label: "Mouse (Mouses)", value: "mouse" },
        { label: "Printer (Impresoras)", value: "printer" },
        { label: "HardDrive (Almacenamiento)", value: "hard-drive" },
        { label: "Package (Accesorios)", value: "package" },
        { label: "Wifi (Redes)", value: "wifi" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      label: "Descripción",
    },
    {
      name: "order",
      type: "number",
      label: "Orden de visualización",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
