# CTC-LANDING - SETUP GUIDE

## ✅ Project Successfully Created!

This is a production-grade Next.js application for CTCSistemas, replicating the architecture and quality standards of zenity-landing-v2 with added e-commerce functionality.

## 📁 Project Structure

```
CTC-landing/
├── src/
│   ├── app/
│   │   └── (frontend)/
│   │       ├── page.tsx                    # Home page
│   │       ├── layout.tsx                  # Root layout
│   │       ├── globals.css                 # Global styles
│   │       ├── productos/                  # Products catalog
│   │       │   ├── page.tsx
│   │       │   └── [slug]/page.tsx         # Product detail
│   │       ├── carrito/page.tsx            # Shopping cart
│   │       ├── servicios/page.tsx          # Services page
│   │       └── contacto/page.tsx           # Contact page
│   │
│   ├── collections/                        # Payload CMS Collections
│   │   ├── Products.ts                     # E-commerce products
│   │   ├── Categories.ts                   # Product categories
│   │   ├── Orders.ts                       # Order management
│   │   ├── Media.ts                        # Media/images
│   │   └── Users.ts                        # Admin users
│   │
│   ├── globals/                            # Payload Global Configs
│   │   ├── HeroSection.ts
│   │   ├── Services.ts
│   │   ├── WhyChooseUs.ts
│   │   ├── Testimonials.ts
│   │   ├── FAQs.ts
│   │   ├── CTASection.ts
│   │   ├── ContactInfo.ts
│   │   ├── Navigation.ts
│   │   ├── Footer.ts
│   │   └── SiteSettings.ts
│   │
│   ├── components/                         # React Components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedProductsSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── ServicesDetail.tsx
│   │   └── ecommerce/                      # E-commerce components
│   │       ├── ProductCard.tsx
│   │       ├── ProductsGrid.tsx
│   │       ├── ProductDetail.tsx
│   │       ├── CategoryFilter.tsx
│   │       ├── AddToCartButton.tsx
│   │       ├── CartView.tsx
│   │       └── RelatedProducts.tsx
│   │
│   ├── lib/                                # Utilities
│   │   ├── payload.ts                      # Payload client & queries
│   │   ├── revalidate.ts                   # Cache revalidation
│   │   ├── utils.ts                        # General utilities
│   │   └── media-utils.ts                  # Media helpers
│   │
│   ├── hooks/                              # Custom hooks
│   │   └── revalidation.ts                 # Payload hooks
│   │
│   └── payload.config.ts                   # Payload CMS config
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── .env.example
```

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
cd CTC-landing
npm install
```

### 2. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set your values:
# - PAYLOAD_SECRET (min 32 characters)
# - NEXT_PUBLIC_SITE_URL
# - Contact information
```

### 3. Generate TypeScript Types

```bash
npm run generate:types
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

### 5. Create First Admin User

1. Navigate to http://localhost:3000/admin
2. Create your first admin account
3. You'll be redirected to the admin dashboard

## 📝 Content Management

### Adding Products

1. Go to Admin Panel → Products → Create New
2. Fill in:
   - Name, SKU, Description
   - Category
   - Price, Stock
   - Images
   - Technical Specifications
   - Features
3. Mark as "Featured" to show on home page

### Managing Categories

1. Admin Panel → Categories → Create New
2. Set name, icon, and display order

### Configuring Globals

All page content is managed through Globals:

- **Hero Section**: Main headline and CTAs
- **Services**: Service offerings
- **Why Choose Us**: Company differentiators
- **Testimonials**: Customer reviews
- **FAQs**: Frequently asked questions
- **Contact Info**: Company contact details
- **Navigation & Footer**: Site navigation

## 🛒 E-commerce Features

### Shopping Cart

- Client-side cart using localStorage
- Add/remove products
- Quantity management
- Persistent across sessions

### Quote System

Instead of immediate checkout, customers:
1. Add products to cart
2. Fill contact form
3. Submit quote request
4. Admins receive order in CMS

### Future Payment Integration

The architecture is ready for:
- MercadoPago integration
- Bank transfer instructions
- Credit card processing
- ERP integration

## 🎨 Styling & Theming

### Brand Colors

The project uses a professional B2B color palette:

- **Primary Blue**: Trust & professionalism
- **Cyan**: Digital services
- **Green**: Success & support
- **Orange**: Hardware & energy

Edit colors in `tailwind.config.ts`.

### Typography

- **Headings**: Inter (clean, modern)
- **Body**: Roboto (readable)

## 📦 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Key Differences from Zenity

While based on Zenity's architecture, CTC-landing includes:

1. **E-commerce Collections**:
   - Products with inventory management
   - Orders collection
   - Shopping cart functionality

2. **Different Services Focus**:
   - IT Support
   - ERP Implementation
   - Web Development
   - Marketing

3. **B2B Professional Design**:
   - Corporate color palette
   - Business-focused messaging
   - Quote-based purchasing

4. **Extended Product Schema**:
   - SKU management
   - Stock tracking
   - Low stock alerts
   - Technical specifications
   - Downloadable resources

## 🛠️ Development Tips

### Adding New Pages

1. Create file in `src/app/(frontend)/your-page/page.tsx`
2. Use existing page structure as template
3. Import Navbar, Footer, WhatsAppButton

### Creating New Components

1. Add to `src/components/`
2. Use TypeScript
3. Follow naming convention (PascalCase)
4. Export as default

### Database Queries

Use functions from `src/lib/payload.ts`:
- `getProducts()`
- `getFeaturedProducts()`
- `getProductBySlug()`
- `getCategories()`
- etc.

### Cache Management

Content is cached for performance. To revalidate:
- Edit content in Payload CMS (auto-revalidates)
- Manual: adjust cache tags in `lib/payload.ts`

## 📚 Tech Stack

- **Next.js 15**: App Router, Server Components
- **React 19**: Latest features
- **TypeScript 5**: Type safety
- **Tailwind CSS 3**: Utility-first styling
- **Payload CMS 3**: Headless CMS
- **SQLite**: Database (via better-sqlite3)
- **Framer Motion**: Animations (ready to use)

## 🔐 Security

- Admin authentication via Payload
- Environment variables for secrets
- SQLite database (local file)
- Input validation on forms
- TypeScript for type safety

## 📈 Performance

- Server Components by default
- Dynamic imports for below-fold content
- Image optimization via Next.js
- Cached CMS queries
- Minimal client JavaScript

## 🌐 SEO

- Metadata per page
- Dynamic Open Graph images
- Semantic HTML
- Mobile responsive
- Fast load times

## 🤝 Contributing

This is a production project for CTCSistemas. Maintain:
- Code quality standards
- TypeScript strict mode
- Component patterns
- Naming conventions

## 📞 Support

For questions or issues with this implementation, refer to:
- Next.js docs: https://nextjs.org/docs
- Payload CMS docs: https://payloadcms.com/docs
- Tailwind docs: https://tailwindcss.com/docs

---

**Project Status**: ✅ Production-ready scaffold
**Architecture**: Based on zenity-landing-v2 patterns
**E-commerce**: Full product catalog + cart + orders
**CMS**: Payload 3.0 with SQLite
