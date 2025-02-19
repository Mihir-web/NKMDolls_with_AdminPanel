<<<<<<< HEAD
# NKM Dolls - E-Commerce Project

## Frontend (frontend/) - NKM Dolls (React/TypeScript)

### Project Overview
This is the frontend for NKM Dolls, an e-commerce platform built using React and TypeScript. The frontend communicates with the backend API.

### Requirements
- Node.js (v16.x or later)
- pnpm (v8.x or later)

### Installing pnpm
To install pnpm, run the following command:

```bash
npm install -g pnpm
```

### Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NKM-Dolls/nkm-dolls-frontend
   cd nkm-dolls-frontend
   ```

2. **Install dependencies:**
   ```bash
      pnpm install
   ```

3. **Start the development server:**
   ```bash
      pnpm dev
   ```

###Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
>>>>>>> dev
```
