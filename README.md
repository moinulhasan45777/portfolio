# Moinul Hasan - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional dark theme with orange accent colors
- **Fully Responsive**: Optimized for all device sizes
- **TypeScript**: Type-safe development with full TypeScript support
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Framer Motion and GSAP powered animations
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Interactive contact form with validation
- **Fixed Navigation**: Smooth scrolling navigation with backdrop blur

## Sections

- **Hero**: Introduction with profile image and social links
- **About**: Personal information and statistics
- **Skills**: Technical expertise organized by categories
- **Education**: Academic background
- **Projects**: Featured work with project details
- **Contact**: Contact form and information
- **Footer**: Additional links and information

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4
- **Animations**: Framer Motion + GSAP
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

- `primary`: Main accent color (#FF5733)
- `background-dark`: Main background (#050505)
- `surface-dark`: Card backgrounds (#121212)

### Content

Update the content in each component file:

- Personal information in `Hero.tsx` and `About.tsx`
- Skills in `Skills.tsx`
- Education details in `Education.tsx`
- Projects in `Projects.tsx`
- Contact information in `Contact.tsx`

### Images

Replace the profile images with your own:

- Update the `src` attributes in `Hero.tsx` and `About.tsx`
- Add your images to the `public` folder or use external URLs

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: moinul.hasan45777@gmail.com
- **LinkedIn**: [moinulhasan45777](https://www.linkedin.com/in/moinulhasan45777/)
- **GitHub**: [moinulhasan45777](https://github.com/moinulhasan45777)
