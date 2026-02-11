import type { CollectionConfig } from "payload";
import { mediaAfterChangeHook } from "@/hooks/revalidation";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Archivo",
    plural: "Archivos",
  },
  access: {
    read: () => true, // Acceso público para ver imágenes
  },
  admin: {
    group: "Archivos",
    description: "Imagenes y documentos del sitio",
  },
  hooks: {
    afterChange: [mediaAfterChangeHook],
  },
  upload: {
    staticDir: path.resolve(dirname, "../../public/media"),
    mimeTypes: [
      "image/*",
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
      "application/octet-stream",
    ],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 576,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    focalPoint: true,
    crop: true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Texto alternativo",
      admin: {
        description: "Descripcion de la imagen para accesibilidad y SEO",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Pie de foto",
    },
  ],
};
