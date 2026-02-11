import type { CollectionConfig, CollectionBeforeChangeHook } from "payload";
import {
  createCollectionAfterChangeHook,
  createCollectionAfterDeleteHook,
} from "@/hooks/revalidation";

// Helper para formatear tamaño de archivo
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

// Hook para calcular tamaño de archivos en downloads
const calculateDownloadSizes: CollectionBeforeChangeHook = async ({
  data,
  req,
}) => {
  if (!data?.downloads || !Array.isArray(data.downloads)) {
    return data;
  }

  const payload = req.payload;

  for (const download of data.downloads) {
    if (download.file) {
      const fileId = typeof download.file === "object" ? download.file.id : download.file;

      try {
        const media = await payload.findByID({
          collection: "media",
          id: fileId,
        });

        if (media?.filesize) {
          download.size = formatFileSize(media.filesize);
        }
      } catch {
        // Si no se puede obtener el archivo, dejamos el size como está
      }
    } else {
      download.size = "";
    }
  }

  return data;
};

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Producto",
    plural: "Productos",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "price", "stock", "isFeatured"],
    group: "E-commerce",
    description: "Catálogo de productos de hardware",
  },
  hooks: {
    afterChange: [createCollectionAfterChangeHook("products")],
    afterDelete: [createCollectionAfterDeleteHook("products")],
    beforeChange: [calculateDownloadSizes],
  },
  fields: [
    // Main Info
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre del Producto",
    },
    {
      name: "sku",
      type: "text",
      label: "SKU / Código",
      admin: {
        position: "sidebar",
        description: "Código único del producto",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug (URL)",
      admin: {
        position: "sidebar",
        description: "Se genera automáticamente del nombre",
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
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Descripción Corta",
      admin: {
        description: "Breve resumen del producto (para listados)",
      },
    },
    {
      name: "description",
      type: "richText",
      required: true,
      label: "Descripción Completa",
    },

    // Category & Classification
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
      label: "Categoría",
      admin: {
        position: "sidebar",
      },
    },

    // Pricing
    {
      name: "price",
      type: "number",
      required: true,
      label: "Precio",
      min: 0,
      admin: {
        description: "Precio de venta actual",
      },
    },
    {
      name: "originalPrice",
      type: "number",
      label: "Precio Original (opcional)",
      min: 0,
      admin: {
        description: "Para mostrar descuentos",
      },
    },

    // Stock Management
    {
      name: "stock",
      type: "number",
      label: "Stock Disponible",
      defaultValue: 0,
      min: 0,
      admin: {
        position: "sidebar",
        description: "Cantidad disponible (0 = sin stock)",
      },
    },
    {
      name: "lowStockThreshold",
      type: "number",
      label: "Umbral de Stock Bajo",
      defaultValue: 5,
      admin: {
        position: "sidebar",
        description: "Alertar cuando el stock esté por debajo de este número",
      },
    },

    // Images
    {
      name: "images",
      type: "array",
      label: "Imágenes",
      minRows: 1,
      maxRows: 10,
      admin: {
        description: "Imágenes del producto (la primera es la principal)",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Imagen",
        },
      ],
    },

    // Features
    {
      name: "features",
      type: "array",
      label: "Características Destacadas",
      admin: {
        description: "Puntos clave del producto",
      },
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
          label: "Característica",
        },
      ],
    },

    // Technical Specifications
    {
      name: "specs",
      type: "array",
      label: "Especificaciones Técnicas",
      admin: {
        description: "Detalles técnicos completos",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "Nombre",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Valor",
        },
      ],
    },

    // Downloads (datasheets, manuals, etc.)
    {
      name: "downloads",
      type: "array",
      label: "Archivos Descargables",
      admin: {
        description: "Fichas técnicas, manuales, drivers",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Nombre del archivo",
        },
        {
          name: "type",
          type: "select",
          required: true,
          label: "Tipo",
          options: [
            { label: "Ficha Técnica", value: "datasheet" },
            { label: "Manual", value: "manual" },
            { label: "Driver", value: "driver" },
            { label: "Otro", value: "other" },
          ],
        },
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Archivo",
        },
        {
          name: "size",
          type: "text",
          label: "Tamaño",
          admin: {
            readOnly: true,
            description: "Se calcula automáticamente",
          },
        },
      ],
    },

    // Product Status
    {
      name: "isFeatured",
      type: "checkbox",
      label: "Destacado",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Mostrar en la home",
      },
    },
    {
      name: "isNew",
      type: "checkbox",
      label: "Nuevo",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Marcar como producto nuevo",
      },
    },
    {
      name: "tags",
      type: "array",
      label: "Etiquetas",
      admin: {
        description: "Tags para búsqueda y filtrado",
      },
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },

    // SEO
    {
      name: "metaTitle",
      type: "text",
      label: "Meta Título (SEO)",
      admin: {
        description: "Título para motores de búsqueda",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      label: "Meta Descripción (SEO)",
      admin: {
        description: "Descripción para motores de búsqueda",
      },
    },
  ],
};
