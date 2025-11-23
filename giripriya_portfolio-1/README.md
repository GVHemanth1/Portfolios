# giripriya_portfolio

This project is a React application built with TypeScript and Vite. It utilizes Tailwind CSS for styling and includes various components and pages.

## Project Structure

- **src/**: Contains the source code for the application.
  - **main.tsx**: Entry point of the application.
  - **App.tsx**: Main application component with routing.
  - **index.css**: Global CSS styles.
  - **components/**: Contains reusable components like Header and Footer.
  - **pages/**: Contains page components like Home and About.
  - **routes/**: Sets up application routes.
  - **hooks/**: Custom hooks for managing state and logic.
  - **utils/**: Utility functions for API calls.
  - **types/**: TypeScript types and interfaces.

- **index.html**: Main HTML template for the application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.
- **vite.config.ts**: Vite configuration file.
- **tailwind.config.cjs**: Tailwind CSS configuration.
- **postcss.config.cjs**: PostCSS configuration.
- **.eslintrc.cjs**: ESLint configuration.
- **.gitignore**: Specifies files to ignore in Git.
- **README.md**: Documentation for the project.

## Deployment Instructions

1. **Build the Project**: Run `npm run build` to create a production build of your application. This will generate static files in a `dist` directory.

2. **Choose a Hosting Provider**: Select a hosting service such as Vercel, Netlify, GitHub Pages, or any other static site hosting provider.

3. **Deploy the Build**:
   - For **Vercel**: Connect your GitHub repository and follow the prompts to deploy.
   - For **Netlify**: Drag and drop the `dist` folder into the Netlify dashboard or connect your GitHub repository.
   - For **GitHub Pages**: Push your `dist` folder to a `gh-pages` branch or use a GitHub Action to automate the deployment.

4. **Configure Domain (Optional)**: If you have a custom domain, configure it in your hosting provider's settings.

5. **Access Your Application**: Once deployed, you will receive a URL where your application is accessible.