import type { CollectionConfig } from "payload";
import {
    createCollectionAfterChangeHook,
    createCollectionAfterDeleteHook,
} from "@/hooks/revalidation";

export const Brands: CollectionConfig = {
    slug: "brands",
    labels: {
        singular: "Marca",
        plural: "Marcas",
    },
    admin: {
        useAsTitle: "name",
        group: "E-commerce",
        description: "Marcas de productos (ADATA, AMD, ASUS, etc.)",
        defaultColumns: ["name", "slug", "logo"],
    },
    hooks: {
        afterChange: [createCollectionAfterChangeHook("brands")],
        afterDelete: [createCollectionAfterDeleteHook("brands")],
    },
    fields: [
        {
        name: "name",
        type: "text",
        required: true,
        label: "Nombre de la Marca",
        admin: {
            description: "Ejemplo: ADATA, AMD, ASUS",
        },
        },
        {
        name: "slug",
        type: "text",
        required: true,
        unique: true,
        label: "Slug (URL)",
        admin: {
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
        name: "logo",
        type: "upload",
        relationTo: "media",
        required: true,
        label: "Logo de la Marca",
        admin: {
            description: "Logo oficial de la marca (formato cuadrado preferible)",
        },
        },
        {
        name: "description",
        type: "textarea",
        label: "Descripción",
        admin: {
            description: "Información breve sobre la marca (opcional)",
        },
        },
        {
        name: "website",
        type: "text",
        label: "Sitio Web",
        admin: {
            description: "URL del sitio oficial de la marca (opcional)",
        },
        },
        {
        name: "order",
        type: "number",
        label: "Orden de visualización",
        defaultValue: 0,
        admin: {
            position: "sidebar",
            description: "Orden en el que aparece en el filtro",
        },
        },
    ],
};
