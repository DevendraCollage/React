# Todo App with React and TypeScript

This project is a simple Todo application built with React and TypeScript. It provides a clean and intuitive interface for managing your daily tasks. The use of TypeScript enhances code quality and ensures a more robust development experience.

## Features

- **Add Tasks**: Easily add new tasks with a title and optional description.
- **Mark as Complete**: Check off completed tasks to keep track of your progress.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Filter Tasks**: Filter tasks based on their completion status (All, Active, Completed).
- **Responsive Design**: The application is responsive and works seamlessly across different devices.

## Technologies Used 

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing and other features.
- **CSS**: Styling is done using CSS to create a visually appealing and user-friendly interface.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-react-typescript.git

2. **Install dependencies:**
   ```bash
   cd todo-react-typescript
   npm install
3. **Run the application:**
   ```bash
   npm start
   The app will be accissible at https://localhost:3000 in your web browser.
## Folder Structure 
- **src/**
- **components/**: Contains React components used in the application.
- **styles/**: CSS styles for components.
- **types/**: TypeScript type definitions.
- **App.tsx**: The main application component.
- **index.tsx**: Entry point of the application.
- **...other files**: Additional files and configurations.

Happy task managing! 🚀

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
