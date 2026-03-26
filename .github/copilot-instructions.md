# Copilot Instructions — CTC Sistemas Landing

## Descripción del Proyecto
Landing page + e-commerce para **CTC Sistemas**, empresa de soluciones tecnológicas empresariales (IT, ERP, infraestructura). Incluye catálogo de productos, sección de servicios, configurador de desarrollo web y formulario de contacto.

## Stack Tecnológico
- **Framework**: Next.js 15 App Router, TypeScript estricto
- **Estilos**: Tailwind CSS 3 con tokens custom en `tailwind.config.ts`
- **Animaciones**: Framer Motion 12 (`whileInView`, `AnimatePresence`)
- **CMS**: Payload CMS v3 + SQLite (`better-sqlite3`)
- **Iconografía**: Lucide React
- **Utilities**: `cn()` de `@/lib/utils` (clsx + tailwind-merge)
- **Fuente custom**: Sagace (via `@font-face` en `globals.css`)

## Colores de Marca (tokens Tailwind)
- `ctc-navy` → `#1a2332` (azul marino corporativo)
- `primary-500` → `#2563eb` (azul principal)
- `secondary-*` → escala de slate
- Gradiente principal: `var(--ctc-blue-gradient)` = `linear-gradient(to right, #002a54, #1e40af)`

## Arquitectura de Componentes
```
src/
├── app/(frontend)/     # Páginas del sitio (layout.tsx + page.tsx)
├── components/         # Componentes por sección
├── lib/
│   ├── animations.ts   # Variantes Framer Motion (fadeInUp, staggerContainer, etc.)
│   ├── payload.ts      # Queries al CMS con cache
│   ├── utils.ts        # cn() + formatPrice + helpers
│   └── media-utils.ts  # Helpers para imágenes de Payload
└── collections/        # Colecciones Payload CMS
```

## Reglas de Código
1. **"use client"** solo cuando hay: `useState`, `useEffect`, handlers de eventos o `motion.*` interactivo
2. **Server Components** por defecto — fetch de Payload en `lib/payload.ts` con `next: { revalidate: 3600 }`
3. **Colores**: siempre tokens Tailwind, NUNCA hex inline (ej. `text-primary-600`, no `text-[#1d4ed8]`)
4. **cn()** para todas las clases condicionales: `import { cn } from "@/lib/utils"`
5. **Imágenes**: `next/image` con `alt` descriptivo + `fill` o `width/height` explícito
6. **Íconos**: `lucide-react`, siempre con `className="w-5 h-5"` o `size={20}` explícito, `aria-hidden="true"` en decorativos
7. **Contenedor base**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
8. **Secciones**: `py-16 md:py-24 lg:py-32`, siempre con `id=` para scroll navigation
9. **Animaciones**: importar variantes de `@/lib/animations`, usar `viewport={{ once: true, margin: "-100px" }}`
10. **Mobile-first**: responsive siempre con escala `base → md → lg`

## Patrones de Animación Estándar
```tsx
// Componente con entrada animada
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>

// Lista de cards con stagger
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
```

## Payload CMS
- Collections: `Products`, `Categories`, `Services`, `Testimonials`, `FAQs`, `Clients`, `Media`
- Globals: `SiteSettings`, `ContactInfo`, `HomePage`
- Queries siempre en `src/lib/payload.ts` con cache de Next.js
- Tipos importados de `@/payload-types.ts` (nunca definir manualmente)
- Imágenes: acceder por `doc.image?.url`, nunca por ID directo

## Componentes Clave del Proyecto
- `HeroSection` – slider con `AnimatePresence` + barra de progreso
- `ClientsSlider` – carrusel de logos de clientes
- `WebConfigurator` – configurador interactivo de presupuesto web
- `FeaturedProductsSection` – grid de productos desde Payload
- `WhatsAppButton` – botón flotante (no tocar la configuración de número)
- `ContactSection` – formulario con validación

## NO modificar sin consultar
- Logos en `/public/fonts/logo/`
- Datos de contacto hardcodeados (teléfono WhatsApp, emails)
- Contenido de slides del Hero (`/public/background/`)
- Configuración de Payload (`src/payload.config.ts`)
