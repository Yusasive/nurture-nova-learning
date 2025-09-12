# Repository Information

- **name**: nurture-nova
- **framework**: Next.js 15 (App Router)
- **language**: TypeScript + React 19
- **styling**: Tailwind CSS 4
- **animation**: framer-motion
- **icons**: lucide-react
- **sitemap**: next-sitemap
- **build analyzer**: @next/bundle-analyzer

## Scripts

- **dev**: next dev --turbopack
- **build**: next build
- **postbuild**: next-sitemap
- **start**: next start
- **analyze**: cross-env ANALYZE=true next build
- **lint**: next lint

## Next config

- **output**: export
- **images**: unoptimized: true; domains: ["res.cloudinary.com"]

## App routes

- **/**: app/page.tsx
- **/about**: app/about/page.tsx
- **/contact**: app/contact/page.tsx (API: app/api/contact)
- **/faqs**: app/faqs/page.tsx
- **/our-tutors**: app/our-tutors/page.tsx
- **/our-tutors/[id]**: app/our-tutors/[id]/page.tsx (client component)
  - layout adds generateStaticParams

## Data

- **tutors**: data/tutors.ts exports tutorsData and helpers

## Notes

- With output: export, dynamic routes require generateStaticParams or must be avoided. A layout at app/our-tutors/[id]/layout.tsx now provides it.
- Images use next/image with unoptimized mode enabled.
