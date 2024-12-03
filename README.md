# Stencil ElementInternals Issue

1. Install dependencies: `npm ci`
1. Build web-components: `npm run build:web-components`
1. Start development server: `npm run dev:app`
1. Open browser: [http://localhost:3000](http://localhost:3000)
1. Go back to your terminal a `console.error` will be displayed with the following message:
    ```
    NOTE: Property setValidity was accessed on ElementInternals, but this property is not implemented.
    Testing components with ElementInternals is fully supported in e2e tests.
    ```
