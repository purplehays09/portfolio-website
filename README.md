# Portfolio Website

A modern, responsive portfolio website built with React, Ant Design, and Vite.

## Features

- **Landing Page**: Eye-catching hero banner with a beautiful gradient background
- **AI Chatbot**: Interactive chat interface where visitors can chat with an AI version of you
- **Resume Page**: Professional resume display with download functionality
- **Projects Page**: Showcase your projects with descriptions, technologies, and links

## Tech Stack

- React 19
- Ant Design 6.3
- React Router DOM 7.13
- Vite (Build tool)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/purplehays09/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your personal information:

1. **Resume Page** (`src/pages/Resume.jsx`):
   - Replace "Your Name" with your actual name
   - Update contact information (email, phone, LinkedIn, GitHub)
   - Customize skills, experience, education, and certifications
   - Add your actual resume PDF to the `public` folder and update the download function

2. **Projects Page** (`src/pages/Projects.jsx`):
   - Update project information with your actual projects
   - Replace placeholder images with your project screenshots
   - Update GitHub and demo links

3. **Home Page** (`src/pages/Home.jsx`):
   - Customize the hero banner text
   - Update the AI chatbot responses to match your personality and experience

### Styling

The website uses Ant Design components. You can customize the theme by:
- Modifying the gradient colors in the hero banner
- Adjusting component styles in the individual page files
- Updating the global styles in `src/index.css`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT

## Author

Update with your information

