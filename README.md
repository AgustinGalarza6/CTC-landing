# CTC Sistemas - Corporate Website & E-commerce

Production-grade Next.js website for CTCSistemas with integrated e-commerce and Payload CMS.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS 3.0
- **Database**: SQLite (via better-sqlite3)
- **Animations**: Framer Motion

## Architecture

- Server Components by default
- Client Components only when necessary
- Fully typed with TypeScript
- CMS-driven content
- E-commerce ready with cart and checkout structure

## Features

### Pages
- Home (corporate landing)
- Services (IT, ERP, Web Development, Marketing)
- Products (e-commerce catalog)
- Product Detail (with cart functionality)
- Cart & Checkout
- Contact

### E-commerce
- Product catalog with categories
- Product detail pages
- Shopping cart
- Order management via CMS
- Quote request system
- Ready for payment gateway integration

### CMS Collections
- Products (with images, specs, pricing, stock)
- Categories
- Orders
- Media
- Users

## Getting Started

### Prerequisites
- Node.js 18.20.2+ or 20.9.0+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Generate Payload types
npm run generate:types

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the frontend.
Access Payload CMS at [http://localhost:3000/admin](http://localhost:3000/admin)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing pages
│   │   ├── page.tsx         # Home
│   │   ├── servicios/       # Services
│   │   ├── productos/       # Products catalog
│   │   ├── carrito/         # Cart
│   │   └── contacto/        # Contact
│   └── (payload)/           # Payload CMS admin
├── collections/             # Payload collections
│   ├── Products.ts
│   ├── Categories.ts
│   ├── Orders.ts
│   └── ...
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── sections/            # Page sections
│   └── ecommerce/           # E-commerce components
├── globals/                 # Payload global configs
├── hooks/                   # React & Payload hooks
├── lib/                     # Utility functions
└── payload.config.ts        # Payload CMS configuration
```

## Environment Variables

See `.env.example` for required environment variables.

## License

Private - CTCSistemas
