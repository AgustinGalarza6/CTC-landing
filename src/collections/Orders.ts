import type { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  labels: {
    singular: "Pedido",
    plural: "Pedidos",
  },
  admin: {
    useAsTitle: "orderNumber",
    defaultColumns: ["orderNumber", "customerName", "status", "total", "createdAt"],
    group: "E-commerce",
    description: "Gestión de pedidos y cotizaciones",
  },
  fields: [
    // Order Info
    {
      name: "orderNumber",
      type: "text",
      required: true,
      unique: true,
      label: "Número de Pedido",
      admin: {
        readOnly: true,
        description: "Generado automáticamente",
      },
      hooks: {
        beforeValidate: [
          ({ value, operation }) => {
            if (operation === "create" && !value) {
              const date = new Date();
              const timestamp = date.getTime();
              return `CTC-${timestamp}`;
            }
            return value;
          },
        ],
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      label: "Estado",
      defaultValue: "pending",
      options: [
        { label: "Pendiente", value: "pending" },
        { label: "Confirmado", value: "confirmed" },
        { label: "En Preparación", value: "preparing" },
        { label: "Enviado", value: "shipped" },
        { label: "Entregado", value: "delivered" },
        { label: "Cancelado", value: "cancelled" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      label: "Tipo",
      defaultValue: "quote",
      options: [
        { label: "Cotización", value: "quote" },
        { label: "Pedido", value: "order" },
      ],
      admin: {
        position: "sidebar",
      },
    },

    // Customer Info
    {
      type: "collapsible",
      label: "Datos del Cliente",
      fields: [
        {
          name: "customerName",
          type: "text",
          required: true,
          label: "Nombre Completo",
        },
        {
          name: "customerEmail",
          type: "email",
          required: true,
          label: "Email",
        },
        {
          name: "customerPhone",
          type: "text",
          required: true,
          label: "Teléfono",
        },
        {
          name: "customerCompany",
          type: "text",
          label: "Empresa (opcional)",
        },
        {
          name: "customerCUIT",
          type: "text",
          label: "CUIT/CUIL (opcional)",
        },
      ],
    },

    // Shipping Address
    {
      type: "collapsible",
      label: "Dirección de Envío",
      fields: [
        {
          name: "shippingAddress",
          type: "text",
          label: "Dirección",
        },
        {
          name: "shippingCity",
          type: "text",
          label: "Ciudad",
        },
        {
          name: "shippingProvince",
          type: "text",
          label: "Provincia",
        },
        {
          name: "shippingPostalCode",
          type: "text",
          label: "Código Postal",
        },
      ],
    },

    // Order Items
    {
      name: "items",
      type: "array",
      required: true,
      label: "Productos",
      minRows: 1,
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
          label: "Producto",
        },
        {
          name: "productName",
          type: "text",
          required: true,
          label: "Nombre del Producto",
          admin: {
            description: "Se guarda por si el producto cambia o se elimina",
          },
        },
        {
          name: "quantity",
          type: "number",
          required: true,
          label: "Cantidad",
          min: 1,
          defaultValue: 1,
        },
        {
          name: "price",
          type: "number",
          required: true,
          label: "Precio Unitario",
          min: 0,
          admin: {
            description: "Precio al momento del pedido",
          },
        },
        {
          name: "subtotal",
          type: "number",
          required: true,
          label: "Subtotal",
          min: 0,
          admin: {
            readOnly: true,
          },
        },
      ],
    },

    // Totals
    {
      type: "collapsible",
      label: "Totales",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "subtotal",
          type: "number",
          required: true,
          label: "Subtotal",
          min: 0,
          admin: {
            readOnly: true,
          },
        },
        {
          name: "shippingCost",
          type: "number",
          label: "Costo de Envío",
          defaultValue: 0,
          min: 0,
        },
        {
          name: "discount",
          type: "number",
          label: "Descuento",
          defaultValue: 0,
          min: 0,
        },
        {
          name: "total",
          type: "number",
          required: true,
          label: "Total",
          min: 0,
          admin: {
            readOnly: true,
          },
        },
      ],
    },

    // Notes
    {
      name: "customerNotes",
      type: "textarea",
      label: "Notas del Cliente",
    },
    {
      name: "internalNotes",
      type: "textarea",
      label: "Notas Internas",
      admin: {
        description: "Solo visible para administradores",
      },
    },

    // Payment
    {
      name: "paymentMethod",
      type: "select",
      label: "Método de Pago",
      options: [
        { label: "Pendiente", value: "pending" },
        { label: "Transferencia Bancaria", value: "transfer" },
        { label: "MercadoPago", value: "mercadopago" },
        { label: "Efectivo", value: "cash" },
        { label: "Tarjeta de Crédito", value: "credit_card" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "paymentStatus",
      type: "select",
      label: "Estado del Pago",
      defaultValue: "pending",
      options: [
        { label: "Pendiente", value: "pending" },
        { label: "Pagado", value: "paid" },
        { label: "Parcialmente Pagado", value: "partial" },
        { label: "Reembolsado", value: "refunded" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
