# UNCO Agency Website

A modern, glass morphism-themed website for a design, research, and development agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Glass Morphism Design** - Beautiful frosted glass effects throughout
- 🌊 **Smooth Animations** - Engaging micro-interactions and page transitions
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Built with Next.js 14 and modern best practices
- 🎯 **SEO Ready** - Proper meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with keyboard navigation

## Pages

- **Home** (`/`) - Hero section with services overview and CTA
- **Work** (`/work`) - Portfolio showcase with project filtering
- **Services** (`/services`) - Detailed service offerings and process
- **About** (`/about`) - Team, values, and company story
- **Research** (`/research`) - Insights, publications, and thought leadership
- **Contact** (`/contact`) - Contact form with office information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS animations + Framer Motion (optional)
- **Icons:** Heroicons via SVG

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd unco-agency
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
unco-agency/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── research/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── work/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/
│   └── images/
│       ├── Frame_16.jpg (branding sheet)
│       └── _-5.jpg (design reference)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## Customization

### Colors

The glass morphism theme uses a neutral color palette with orange/amber accents. To customize:

1. Edit the gradient colors in `tailwind.config.ts`
2. Update the `gradient-text` utility class in `globals.css`
3. Modify the floating orb colors in `app/layout.tsx`

### Branding

Your UNCO branding assets are in `/public/images/`. Update the logo component in `Navbar.tsx` to use your actual logo SVG or image file.

### Content

All content is currently placeholder text. Update each page with your:
- Actual projects and case studies
- Real team members and bios
- Genuine research insights
- Company information

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Design System

### Glass Morphism Components

- `glass-card` - Main card component with frosted glass effect
- `glass-nav` - Navigation bar with glass morphism
- `glass-button` - Interactive button with glass effect
- `gradient-text` - Orange/amber gradient text
- `floating-orb` - Animated background orbs

### Animation Classes

- `animate-float` - Floating animation for orbs
- `animate-slide-up` - Slide up on page load
- `animate-fade-in` - Fade in animation

## Performance Optimizations

- Image optimization with Next.js Image component (ready to implement)
- Route-based code splitting
- CSS-only animations where possible
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 UNCO Agency. All rights reserved.

## Contact

For questions or support, reach out to hello@unco.agency
# unco
