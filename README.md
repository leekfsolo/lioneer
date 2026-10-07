# Lioneer Landing Page

Lioneer builds software that helps people understand and protect the environment. This modern, responsive landing page is built with Next.js, Tailwind CSS, shadcn/ui, and framer-motion.

## Setup Instructions

### 1. Install Dependencies
If you haven't already, install the project dependencies:
```bash
npm install
```

### 2. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will automatically redirect you to the default locale (`/en`).

## Customization Guide

### How to Customize Colors
All theme colors are defined using CSS variables in `src/app/globals.css`. 
- **Light Theme**: Edit the variables under `:root`.
- **Dark Theme**: Edit the variables under `.dark`.
The primary brand colors (`--emerald-primary`, `--lime-accent`, etc.) are explicitly defined and used throughout the application. 

### How to Add Projects
To add a new project to the "Featured Projects" section:
1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array. Provide a unique `id`, `i18nKey`, `category`, `status`, and `icon` (from lucide-react).
3. Open `messages/en.json` and `messages/vi.json`. Under the `projects` object, add your new project's translation data using the `i18nKey` you specified:
   ```json
   "yourNewProject": {
     "title": "Project Title",
     "description": "Project description.",
     "tags": ["Tag 1", "Tag 2"]
   }
   ```

### How to Add Languages
To add a new language (e.g., Spanish `"es"`):
1. **Update locales configuration**: Open `src/i18n/config.ts` and add the locale code to the `locales` array and `localeNames` record.
   ```typescript
   export const locales = ["en", "vi", "es"] as const;
   export const localeNames: Record<Locale, string> = {
     en: "English",
     vi: "Tiếng Việt",
     es: "Español"
   };
   ```
2. **Create translation file**: Create a new file `messages/es.json`. You can copy `messages/en.json` as a starting point and translate all the values.
3. The `LanguageSwitcher` component will automatically pick up the new language and display it in the dropdown menu.

## Architecture

- **`src/app/[locale]`**: Contains the main application layout and page components, using Next.js App Router.
- **`src/components/sections`**: Contains the large structural blocks of the landing page (Hero, About, Contact, etc.).
- **`src/components/shared`**: Reusable elements like the Logo, ThemeToggle, and LanguageSwitcher.
- **`src/components/ui`**: Base UI components powered by shadcn/ui.
- **`messages/`**: Translation files for i18n support.
- **`src/i18n`**: Configuration for `next-intl`.
