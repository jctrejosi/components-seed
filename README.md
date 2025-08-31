# components-seed

Librería de componentes React (variantes por *constelación*) para portafolios y landing pages. Componentes modulares, estilizados con **CSS variables** (`var(--...)`), listos para consumir desde otros proyectos y para publicar en npm.

------

## Qué hace

- Exporta componentes listos (`HeroSectionAndromeda`, `ContactFormAndromeda`, `ScrollSnapAndromeda`, `WorkSectionAndromeda`, etc.).
- Estilos por componente; uso intensivo de `var(--...)` para tematización.
- Incluye carpeta `bundle/` con los builds compilados (`index.css`, `index.es.js`, `index.umd.js`).
- Script TypeScript `scripts/update-css-vars.ts` que inserta en cada `.css` un comentario inicial con las variables `--xxx` usadas (documentación automática).

------

## Instalación

### Desde npm (consumidor)

```
npm install components-seed
```

### En desarrollo (usar el paquete local)

```
# en la librería
npm install
npm link
npm run bundle:watch             # mantiene a la escucha para generar /bundle
# en el proyecto consumidor
npm link components-seed
```

------

## Ejemplo de uso

Importa los estilos de la librería en el main.tsx

```react
import 'components-seed/bundle/index.css'
```

Importa un componente desde la librería

```react
import { ExampleComponent } from 'components-seed'

export const Home = () => (
  <ExampleComponent someProp="value" />
)
```

**Recuerda:** las variables CSS globales (`:root { --base-color-7: ... }`) deben definirse en el proyecto para que los colores concuerden.

------

## Estructura del proyecto

```sh
.
├── bundle
│   ├── index.css
│   ├── index.es.js
│   └── index.umd.js
├── src
│   ├── components
│   │   ├── ContactForm(Type-Component)
│   │   │   └── Andromeda(Constelation-Name)
│   │   │       ├── index.tsx
│   │   │       └── styles.module.css
│   └── index.ts
├── scripts
│   ├── generate-components-index.ts
│   ├── generate-types-index.ts
│   ├── generate-utils-index.ts
│   └── update-css-vars.ts
├── package.json
├── .prettierrc
└── eslint.config.js
```

------

## Scripts (`package.json`)

```json
{
  "scripts": {
   	"dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx --fix",
    "lint:fix": "eslint . --fix",
    "lint:css": "stylelint \"**/*.css\" --fix",
    "format": "prettier --write .",
    "generate:types": "ts-node ./src/scripts/generate-types-index.ts",
    "generate:utils": "ts-node ./src/scripts/generate-utils-index.ts",
    "generate:components": "ts-node ./src/scripts/generate-components-index.ts",
    "comment-css-variables": "ts-node ./src/scripts/comment-css-variables.ts",
    "generate-indexes": "ts-node ./src/scripts",
    "bundle": "npm run generate-indexes && tsc -b && vite build",
    "bundle:watch": "vite build --watch"
  }
}
```

------

## Publicar en npm

1. Ejecuta localmente:

```sh
npm run lint
npm run format
npm run bundle
```

2. Bump de versión:

```
npm version patch
```

3. Login (si es necesario):

```
npm login
```

4. Publicar:

```
npm publish --access public
```

5. En proyecto consumidor:

```
npm install components-seed@X.Y.Z
```

------

## VS Code — configuración recomendada (pegar en `.vscode/` del workspace consumidor)

### `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.organizeImports": "always",
    "source.removeUnusedImports": "always",
    "source.sortImports": "always"
  }
}
```

**Notas VS Code**

- `prettier.configPath` apunta al `.prettierrc` dentro del paquete `components-seed` instalado. Esto unifica formato entre librería y consumidor.
- Si usas path-aliases en `tsconfig.json`, añade `eslint-import-resolver-typescript` para que ESLint resuelva importaciones.

------

## Buenas prácticas antes de publicar

1. `npm run lint && npm run format && npm run build && npm run comment-css-variables`.
2. Verifica `bundle/index.css` y builds (`index.es.js`, `index.umd.js`).
3. Prueba localmente instalando el paquete desde la ruta: `npm install /ruta/a/components-seed` y ejecuta el proyecto consumidor.
4. Mantén `prepublishOnly` para no olvidar pasos.

------

## Cómo añadir una nueva constelación (rápido)

1. Copia la carpeta base del componente (p. ej. `src/components/HeroSection/Andromeda`) → renombra `Antlia`.
2. Ajusta `index.tsx` y el `.css` correspondiente.
3. Ejecuta `npm run comment-css-variables`.
4. Ejecuta `npm run bundle`.
5. Bump version y publicar.
