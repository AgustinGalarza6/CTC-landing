# CTC-LANDING - Arquitectura y Patrones

## 🏗️ Arquitectura del Proyecto

Este proyecto sigue la misma arquitectura de **zenity-landing-v2** con extensiones para e-commerce.

### Principios de Diseño

1. **Server Components First**: Renderizado del lado del servidor por defecto
2. **Client Components Solo Cuando Necesario**: Interactividad específica
3. **Type Safety**: TypeScript estricto en todo el proyecto
4. **Separation of Concerns**: Componentes, lógica y datos separados
5. **Performance Optimized**: Lazy loading, caching, optimización de imágenes

## 📊 Flujo de Datos

```
┌─────────────────┐
│  Payload CMS    │
│  (SQLite DB)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   lib/payload   │ ◄── Server-side queries
│   (Helpers)     │     with caching
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Server         │
│  Components     │ ◄── Fetch data, render HTML
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Client         │
│  Components     │ ◄── Interactive features only
└─────────────────┘
```

## 🗂️ Estructura de Colecciones (Payload)

### Products Collection

```typescript
{
  name: string
  sku: string
  slug: string (auto-generated)
  shortDescription: string
  description: RichText
  category: Relationship → Categories
  price: number
  originalPrice: number (optional)
  stock: number
  lowStockThreshold: number
  images: Array<{image: Media}>
  features: Array<{feature: string}>
  specs: Array<{label: string, value: string}>
  downloads: Array<{name, type, file: Media}>
  isFeatured: boolean
  isNew: boolean
  tags: Array<{tag: string}>
  metaTitle: string
  metaDescription: string
}
```

### Orders Collection

```typescript
{
  orderNumber: string (auto-generated)
  status: enum [pending, confirmed, preparing, shipped, delivered, cancelled]
  type: enum [quote, order]
  customerName: string
  customerEmail: email
  customerPhone: string
  customerCompany: string (optional)
  customerCUIT: string (optional)
  shippingAddress: {...}
  items: Array<{
    product: Relationship → Products
    productName: string (snapshot)
    quantity: number
    price: number (snapshot)
    subtotal: number (calculated)
  }>
  subtotal: number
  shippingCost: number
  discount: number
  total: number
  customerNotes: textarea
  internalNotes: textarea
  paymentMethod: enum
  paymentStatus: enum
}
```

## 🎨 Componentes Reusables

### Patrones de Componentes

#### 1. Layout Components (Server)
- Navbar
- Footer
- Layout wrappers

#### 2. Section Components (Server)
- HeroSection
- ServicesSection
- FeaturedProductsSection
- etc.

#### 3. UI Components (Client cuando necesario)
- Buttons
- Forms
- Modals
- Accordions

#### 4. E-commerce Components
- ProductCard (Server)
- ProductDetail (Client para interactividad)
- AddToCartButton (Client)
- CartView (Client)

### Convención de Nombres

```
PascalCase para componentes: ProductCard.tsx
camelCase para utilidades: formatPrice()
kebab-case para routes: /productos/categoria/notebooks
SCREAMING_SNAKE para constantes: MAX_CART_ITEMS
```

## 🔄 Estado y Cache

### Server-side Caching

```typescript
// Payload queries con cache
export const getCachedGlobal = unstable_cache(
  async (slug) => getGlobal(slug),
  ['global-{slug}'],
  { revalidate: 3600, tags: ['global-{slug}'] }
);
```

### Client-side State

```typescript
// Shopping cart usa localStorage
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
```

### Revalidation Strategy

1. **On CMS Update**: Hooks revalidan automáticamente
2. **Manual**: Tag-based revalidation
3. **Time-based**: unstable_cache con revalidate

## 🎯 Routing Strategy

```
/ → Home (Server Component)
/servicios → Services page (Server)
/productos → Products catalog (Server + Client filters)
/productos/[slug] → Product detail (Server + Client cart)
/productos/categoria/[slug] → Category page (Server)
/carrito → Cart (Client)
/contacto → Contact (Server + Client form)
```

## 🛒 E-commerce Flow

### 1. Browse Products
```
User → /productos → ProductsGrid (Server)
         ↓
    CategoryFilter (Client)
         ↓
    ProductCard (Server)
```

### 2. View Product
```
User → /productos/[slug] → ProductDetail (Server)
                              ↓
                         AddToCartButton (Client)
                              ↓
                         localStorage
```

### 3. Cart & Quote
```
User → /carrito → CartView (Client)
                     ↓
                Submit Quote Form
                     ↓
                Create Order in Payload
                     ↓
                Admin notification
```

## 🎨 Styling Patterns

### Tailwind Utilities

```tsx
// Botones
className="btn btn-primary"           // Botón principal
className="btn btn-secondary"         // Botón secundario  
className="btn btn-outline"           // Botón outline

// Cards
className="card"                      // Card básica
className="card card-hover"           // Con hover effect

// Containers
className="container-custom"          // Container responsive
className="section-padding"           // Padding de sección
```

### Responsive Design

```tsx
// Mobile-first approach
<div className="
  grid              // Base
  sm:grid-cols-2    // Tablet
  lg:grid-cols-3    // Desktop
  xl:grid-cols-4    // Large desktop
">
```

## 🔐 Seguridad

### Autenticación
- Payload maneja auth de admins
- JWT tokens
- Role-based access control

### Validación
- Payload valida en backend
- TypeScript en frontend
- Form validation en client

## 📈 Performance Optimizations

### Code Splitting
```tsx
// Dynamic imports para below-fold
const DynamicComponent = dynamic(() => import('@/components/...'));
```

### Image Optimization
```tsx
<Image
  src={imageUrl}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Database Queries
```typescript
// Limit, depth control
await payload.find({
  collection: 'products',
  depth: 1,        // Limita población
  limit: 12,       // Limita resultados
});
```

## 🧪 Testing Strategy (Recomendado)

```bash
# Unit tests
npm run test

# E2E tests  
npm run test:e2e

# Type checking
npm run type-check
```

## 📦 Deployment Checklist

- [ ] Variables de entorno configuradas
- [ ] Base de datos con contenido
- [ ] Imágenes optimizadas
- [ ] Build sin errores
- [ ] SEO metadata completo
- [ ] Analytics configurado
- [ ] Error tracking
- [ ] Backup strategy

## 🔄 Future Enhancements

### Fase 2 - Payments
- MercadoPago integration
- Stripe integration
- Payment status tracking

### Fase 3 - ERP Integration
- Stock sync
- Order export
- Invoice generation

### Fase 4 - Advanced Features
- Product reviews
- Wishlists
- Product recommendations
- Advanced search/filters

---

**Última actualización**: Febrero 2026
**Basado en**: zenity-landing-v2 patterns
**Stack**: Next.js 15 + Payload CMS 3 + TypeScript 5
