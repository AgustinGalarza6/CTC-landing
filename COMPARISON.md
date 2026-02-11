# CTC-LANDING vs ZENITY-LANDING

## Análisis Comparativo

Este documento detalla las similitudes y diferencias entre los proyectos **CTC-landing** y **zenity-landing-v2**.

## ✅ Elementos Replicados de Zenity

### 1. Arquitectura Base

| Aspecto | Implementación |
|---------|----------------|
| Framework | Next.js 15 con App Router |
| Lenguaje | TypeScript strict mode |
| Estilos | Tailwind CSS utility-first |
| CMS | Payload CMS 3.0 |
| Base de Datos | SQLite con better-sqlite3 |
| Estructura | src/ directory con separación clara |

### 2. Patrones de Código

```typescript
// Mismo patrón de queries con Payload
export async function getProducts() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    depth: 1,
    limit: 100,
  });
  return docs;
}

// Mismo sistema de hooks para revalidación
export const createCollectionAfterChangeHook = (slug: string) => {
  return async ({ doc, operation }) => {
    revalidateCollection(slug, operation, doc?.slug);
    return doc;
  };
};
```

### 3. Estructura de Carpetas

```
Ambos proyectos comparten:
src/
├── app/(frontend)/          # Rutas públicas
├── collections/             # Payload collections
├── globals/                 # Payload globals
├── components/              # React components
├── lib/                     # Utilidades
├── hooks/                   # Custom hooks
└── payload.config.ts        # Configuración CMS
```

### 4. Componentes UI

- Navbar sticky con scroll effect
- Footer con múltiples columnas
- WhatsApp floating button
- Hero section con gradientes
- Cards con hover effects
- Responsive design patterns

## 🆕 Nuevas Características en CTC

### 1. E-commerce Collections

**CTC añade**:
```typescript
// Orders Collection (NO existe en Zenity)
export const Orders: CollectionConfig = {
  slug: "orders",
  fields: [
    orderNumber, status, type,
    customerInfo, items, totals,
    paymentMethod, paymentStatus
  ]
}
```

**Products Collection Extendida**:
```diff
+ sku: Código de producto
+ stock: Manejo de inventario
+ lowStockThreshold: Alertas de stock bajo
+ originalPrice: Para mostrar descuentos
```

### 2. Componentes E-commerce

**Nuevos componentes**:
- `ProductCard` - Tarjeta de producto con badges
- `ProductsGrid` - Grid con búsqueda
- `ProductDetail` - Vista detallada con galería
- `AddToCartButton` - Gestión de carrito
- `CartView` - Carrito completo con checkout
- `CategoryFilter` - Filtro por categorías

### 3. Páginas Adicionales

| Página | Zenity | CTC | Propósito |
|--------|--------|-----|-----------|
| `/` | ✅ | ✅ | Home |
| `/productos` | ✅ | ✅ | Catálogo |
| `/productos/[slug]` | ✅ | ✅ | Detalle producto |
| `/carrito` | ❌ | ✅ | **Carrito de compras** |
| `/servicios` | ❌ | ✅ | **Detalle de servicios** |
| `/contacto` | ✅ | ✅ | Contacto |

### 4. Globals CMS Específicos

**CTC incluye**:
```
Services - Detalle de servicios (IT, ERP, Web, Marketing)
WhyChooseUs - Diferenciadores corporativos
```

**Zenity tiene**:
```
Differentiators - Diferenciadores de productos
ProcessSteps - Proceso de compra
```

## 🎨 Diferencias de Diseño

### Paleta de Colores

**Zenity** (Producto tecnológico):
```typescript
colors: {
  zenity: {
    "blue-dark": "#2B3340",    // Principal
    "blue": "#384B99",
    "green": "#08FF00",        // Neón, tech
    "grey": "#B9B8BE"
  }
}
```

**CTC** (B2B Corporativo):
```typescript
colors: {
  ctc: {
    "blue-primary": "#1E3A8A",  // Confianza
    "cyan": "#06B6D4",          // Digital
    "green": "#10B981",         // Éxito
    "orange": "#F97316"         // Energía
  }
}
```

### Tipografía

| Proyecto | Headings | Body |
|----------|----------|------|
| Zenity | Montserrat | Roboto |
| CTC | Inter | Roboto |

### Tono Visual

- **Zenity**: Tech-forward, neón, gaming-inspired
- **CTC**: Corporativo, profesional, confiable

## 🔄 Funcionalidades Compartidas

### Server Components
Ambos usan Server Components por defecto:
```tsx
// Mismo patrón
export default async function Page() {
  const data = await getDataFromPayload();
  return <Component data={data} />;
}
```

### Revalidación de Cache
Mismo sistema de tags y revalidación:
```typescript
revalidateTag(`global-${slug}`);
revalidatePath(`/productos/${slug}`);
```

### Media Management
Payload Media collection con:
- Upload handling
- Image optimization
- Thumbnails automáticos
- Alt text para SEO

## 💼 Enfoque de Negocio

### Zenity
- **Tipo**: E-commerce B2C
- **Productos**: Smart Home, Mini PC, Servidores, POS
- **Modelo**: Venta directa con precio visible
- **Target**: Consumidores y pequeños negocios

### CTC Sistemas
- **Tipo**: B2B con e-commerce
- **Servicios**: IT Support, ERP, Web Dev, Marketing
- **Modelo**: Cotización + venta de hardware
- **Target**: Empresas medianas y grandes

## 🛠️ Stack Técnico Idéntico

```json
{
  "dependencies": {
    "@payloadcms/db-sqlite": "^3.0.0",
    "@payloadcms/next": "^3.0.0",
    "@payloadcms/richtext-lexical": "^3.0.0",
    "next": "^15.0.0",
    "payload": "^3.0.0",
    "react": "^19.0.0",
    "tailwindcss": "^3.4.13",
    "typescript": "^5"
  }
}
```

## 📊 Comparación de Complejidad

| Aspecto | Zenity | CTC |
|---------|--------|-----|
| Collections | 4 | 5 (+Orders) |
| Globals | 11 | 10 (ajustados) |
| Páginas | ~5 | 7 (+carrito, +servicios) |
| Componentes | ~15 | ~25 (+e-commerce) |
| LOC (aprox) | 3,500 | 4,500 |

## 🎯 Casos de Uso

### Zenity es mejor para:
- Catálogo de productos tech
- Venta directa online
- Productos con precios fijos
- Audiencia tech-savvy

### CTC es mejor para:
- Servicios + productos
- Modelo de cotización
- Clientes empresariales
- Soluciones integrales

## 🚀 Extensibilidad

Ambos proyectos están preparados para:

### Fase 2
- Integración de pagos (MercadoPago, Stripe)
- Notificaciones por email
- Panel de cliente

### Fase 3
- Integración ERP
- Sistema de tickets
- Dashboard analytics

### Fase 4
- Multi-idioma
- Multi-moneda
- API pública

## 📝 Conclusión

**CTC-landing** toma la arquitectura sólida de **zenity-landing-v2** y la extiende con:

1. ✅ Misma calidad de código
2. ✅ Mismos patrones de desarrollo
3. ✅ Misma stack tecnológica
4. ➕ E-commerce completo
5. ➕ Sistema de órdenes
6. ➕ Enfoque B2B
7. ➕ Servicios profesionales

Es una **evolución**, no una copia. Mantiene los estándares de producción mientras añade las funcionalidades específicas que CTCSistemas necesita.

---

**Última actualización**: Febrero 2026
