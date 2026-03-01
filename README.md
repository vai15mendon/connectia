# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🎭 Smooth animations and transitions
- 📧 Contact form
- 🌐 SEO friendly

## Sections

- **Hero** - Eye-catching introduction with call-to-action
- **About** - Professional background, experience, and education
- **Projects** - Showcase of featured projects with technologies used
- **Skills** - Technical skills organized by category with proficiency levels
- **Contact** - Contact information and form for inquiries

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd connectia2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.tsx** - Name, title, and social links
2. **src/components/About.tsx** - Biography, experience, and education
3. **src/components/Projects.tsx** - Your projects and their details
4. **src/components/Skills.tsx** - Your technical skills
5. **src/components/Contact.tsx** - Contact information
6. **index.html** - Page title and meta information

### Styling

The project uses Tailwind CSS. You can customize the theme in `tailwind.config.js`:

- Colors
- Fonts
- Animations
- Breakpoints

### Images

Replace placeholder images in the Projects component with your actual project images.

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the `dist` folder to Netlify
```

### GitHub Pages

1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Your Name - [Your Website](https://yourwebsite.com)

## Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Built with [Vite](https://vitejs.dev)
