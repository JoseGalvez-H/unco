# UNCO Agency Website - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Extract and Install

\`\`\`bash
# Extract the archive
tar -xzf unco-agency.tar.gz
cd unco-agency

# Install dependencies
npm install
\`\`\`

### 2. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000 to see your website!

### 3. Customize

Your website is now running! Here's what to customize:

## 📝 Customization Checklist

### Brand Assets
- [ ] Replace the logo in `components/Navbar.tsx` (currently using text logo)
- [ ] Update favicon in `app/layout.tsx` metadata
- [ ] Add your actual brand colors to `tailwind.config.ts`

### Content Updates
- [ ] `app/page.tsx` - Update hero text, stats, and services
- [ ] `app/work/page.tsx` - Add your real projects and case studies
- [ ] `app/services/page.tsx` - Customize service descriptions and tech stack
- [ ] `app/about/page.tsx` - Add team photos and real bios
- [ ] `app/research/page.tsx` - Add your actual research and insights
- [ ] `app/contact/page.tsx` - Update contact details and form submission

### Footer
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Add your actual email and phone number
- [ ] Update privacy and terms links

### SEO
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add Google Analytics or tracking code
- [ ] Create a sitemap

## 🎨 Design Customization

### Colors
The site uses a glass morphism design with orange/amber accents. To change:

**In `tailwind.config.ts`:**
\`\`\`typescript
colors: {
  'glass': {
    'light': 'rgba(255, 255, 255, 0.1)',
    'medium': 'rgba(255, 255, 255, 0.15)',
    'dark': 'rgba(0, 0, 0, 0.2)',
  },
}
\`\`\`

**In `app/globals.css`:**
\`\`\`css
.gradient-text {
  @apply bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 
         bg-clip-text text-transparent font-bold;
}
\`\`\`

### Animations
Modify animations in `tailwind.config.ts` under the `animation` and `keyframes` sections.

### Background Orbs
Change orb colors in `app/layout.tsx`:
\`\`\`tsx
<div className="floating-orb w-96 h-96 bg-orange-400 top-20 -left-20" />
\`\`\`

## 🔧 Common Tasks

### Adding a New Page
1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add route to navbar in `components/Navbar.tsx`

### Connecting Form Submission
In `app/contact/page.tsx`, update the `handleSubmit` function:
\`\`\`typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your form submission logic
  // e.g., send to API, email service, etc.
};
\`\`\`

### Adding Images
1. Place images in `public/images/`
2. Use Next.js Image component:
\`\`\`tsx
import Image from 'next/image';

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
\`\`\`

## 📦 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🚀 Deploy

### Vercel (Recommended)
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Other Platforms
- Netlify: Connect your git repo
- AWS Amplify: Use the Amplify CLI
- Self-hosted: Use `npm run build` and serve the `.next` folder

## 📱 Mobile Testing

Test on different devices:
\`\`\`bash
# Get your local IP
ipconfig getifaddr en0  # Mac
# or
hostname -I  # Linux

# Then access from mobile: http://YOUR_IP:3000
\`\`\`

## 🆘 Troubleshooting

**Port already in use?**
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

**Build errors?**
\`\`\`bash
rm -rf .next node_modules
npm install
npm run dev
\`\`\`

**TypeScript errors?**
Check `tsconfig.json` and ensure all imports are correct.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips

1. **Development**: Hot reload is automatic - save files and see changes instantly
2. **Performance**: Use Next.js Image component for optimized images
3. **SEO**: Update meta tags in each page's metadata
4. **Accessibility**: The site uses semantic HTML - maintain this when adding content
5. **Glass Effect**: Adjust `backdrop-blur` values for stronger/weaker effects

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000
4. Start customizing with your content!

Need help? Check the README.md for detailed documentation.

Happy building! 🚀
