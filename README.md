# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This is a typescript project using Tailwind CSS. A simple project structure is setup with dummy data and commonly used libraries such as Axios and React Router are installed.

## Installation

- clone this repo `git clone git@github.com:mrlinnth/react-vite-starter.git`
- enter the directory
- run `yarn`
- run `yarn dev`

## References

### Style and Theme

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)
- [DasiyUI](https://daisyui.com/)

### State Management

- [Recoil](https://recoiljs.org/docs/introduction/getting-started)

### API Request and Response

- [axios](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
- [TanStack React Query](https://tanstack.com/query/latest/docs/framework/react/examples/basic)
- [React Query and Axios with Typescript](https://www.bezkoder.com/react-query-axios-typescript/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

### Routing

- [React Router](https://reactrouter.com/en/main)

### Linting

- ESLint
- Prettier

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
