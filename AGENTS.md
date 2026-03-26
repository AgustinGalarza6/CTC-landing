# AGENTS.md — CTC Sistemas Landing

Este archivo define los agentes de IA especializados para trabajar en este proyecto. Cada agente tiene un rol acotado y reglas específicas.

---

## CODER
**Rol**: Implementación de componentes, páginas y lógica del proyecto.

**Puede**:
- Crear y modificar componentes React en `src/components/`
- Crear páginas en `src/app/(frontend)/`
- Agregar helpers en `src/lib/` (nunca modificar `encryption.ts`, `auth.ts`)
- Escribir queries de Payload en `src/lib/payload.ts`
- Instalar dependencias nuevas si son necesarias

**Reglas**:
- Usar `cn()` de `@/lib/utils` siempre para clases condicionales
- Íconos siempre de `lucide-react` con `className="w-5 h-5"`
- Colores por tokens Tailwind, NUNCA hex inline
- `"use client"` solo cuando es estrictamente necesario
- Animaciones importadas de `@/lib/animations`
- NUNCA modificar contenido (textos de cliente, logos, imágenes)

---

## DESIGNER
**Rol**: Sistemas de diseño, tokens de color, tipografía, componentes visuales.

**Puede**:
- Modificar `tailwind.config.ts` (solo sección `theme.extend`)
- Crear y actualizar `src/app/(frontend)/globals.css` (solo agregar variables/clases, nunca eliminar)
- Proponer variantes de componentes UI nuevos
- Crear dividers SVG, gradientes, efectos glass

**Reglas**:
- Mantener siempre la paleta de marca CTC: `ctc-navy (#1a2332)`, `primary (#2563eb)`
- Fuente base: Sagace (custom) — no cambiar sin autorización
- Los botones `.btn-primary` usan gradiente `var(--ctc-blue-gradient)` — no romper
- Accesibilidad: contraste AA mínimo

---

## PAYLOAD_SPECIALIST
**Rol**: Collections, globals, queries y tipos de Payload CMS.

**Puede**:
- Crear/modificar collections en `src/collections/`
- Agregar queries en `src/lib/payload.ts`
- Modificar `src/payload.config.ts` para registrar nuevas collections
- Usar tipos de `@/payload-types.ts` (no definir manualmente)

**Reglas**:
- Access control: `{ read: () => true }` para contenido público
- Siempre agregar `next: { revalidate: 3600 }` en queries
- Slugs auto-generados desde `name`/`title`
- Hook `afterChange` para `revalidatePath` en globals importantes

---

## ANIMATIONS_SPECIALIST
**Rol**: Animaciones Framer Motion, transiciones y micro-interacciones.

**Puede**:
- Crear y expandir `src/lib/animations.ts`
- Aplicar variantes en componentes existentes
- Crear loaders, transiciones de página

**Reglas**:
- `viewport={{ once: true, margin: "-100px" }}` en todos los `whileInView`
- Glow/blur backgrounds NO se animan (performance)
- Íconos hover: `whileHover={{ scale: 1.1 }}` con `transition={{ type: "spring", stiffness: 300 }}`
- NUNCA usar `key={index}` en listas animadas

---

## QA_REVIEWER
**Rol**: Revisión de código antes de commit/deploy.

**Checklist**:
- [ ] No hay `any` TypeScript explícito
- [ ] `cn()` usado en todas las clases condicionales
- [ ] `"use client"` solo donde es necesario
- [ ] Imágenes con `alt` descriptivo
- [ ] Íconos con `aria-hidden="true"` si son decorativos
- [ ] Queries Payload con cache `next: { revalidate }`
- [ ] No hay hex hardcodeado cuando existe el token Tailwind
- [ ] Responsive mobile-first implementado
- [ ] `viewport={{ once: true }}` en animaciones `whileInView`
