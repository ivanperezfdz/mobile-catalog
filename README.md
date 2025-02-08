## Arquitectura y Estructura del Proyecto

Este proyecto está estructurado de la siguiente manera:

- `.env.development` y `.env.production`: Archivos de configuración de entorno para desarrollo y producción.
- `.github/`: Contiene flujos de trabajo de GitHub Actions.
- `.husky/`: Configuración de Husky para pre-commit hooks.
- `cypress/`: Pruebas end-to-end con Cypress.
- `public/`: Archivos estáticos públicos, aquí se incluye la fuente Helvetica Neue para un mejor uso de los weights en las fuentes.
- `src/`: Código fuente de la aplicación.
  - `pages/`: Páginas de Next.js. Punto de entrada \_app.tsx.
  - `ui/`: Se incluye lo relacionado con las vistas y componentes de la aplicación, siguiendo Atomic Design. Se incluyen también los contextos, hooks y estilos del tema utilizado.
  - `application/, domain/, infrastructure/`: Se sigue una arquitectura hexagonal para los teléfonos, carrito y traducciones.
- `package.json`: Dependencias y scripts del proyecto.
- `tsconfig.json`: Configuración de TypeScript.

## Arquitectura Hexagonal

Se implementa en este proyecto para separar las preocupaciones y facilitar la mantenibilidad y escalabilidad del código. La estructura principal incluye:

- **Dominios**: Contiene la lógica de negocio central de la aplicación.
- **Aplicación**: Maneja la lógica de la aplicación, incluyendo casos de uso / puertos y servicios.
- **Infraestructura**: Contiene implementaciones específicas de la infraestructura, en este caso la conexión a la API, el LocalStorage e i18n.
- **UI / Interfaces**: Define las interfaces de usuario y otros puntos de entrada/salida de la aplicación.

## Configuración de ESLint y Prettier

Este proyecto utiliza ESLint y Prettier para asegurar un código limpio y consistente.

## Ejecución de la aplicación

Para ejecutar la aplicación en modo de desarrollo, se debe ejecutar el siguiente comando:

```bash
npm run dev
```

Para construir la aplicación en modo de producción, se debe ejecutar el siguiente comando:

```bash
npm run build
```

Para ejecutar la aplicación en modo de producción, se debe ejecutar el siguiente comando:

```bash
npm run start
```

## Pruebas

Para ejecutar las pruebas unitarias, se debe ejecutar el siguiente comando:

```bash
npm run test
```

Para ejecutar las pruebas end-to-end, se debe ejecutar el siguiente comando (es importante recordar que se debe tener la aplicación en ejecución):

```bash
npm run test:e2e
```

## Despliegue

El despliegue de la aplicación se realiza automáticamente a través de GitHub Actions. Se despliega en Vercel y se puede acceder a través de la siguiente URL: [https://mobile-catalog.vercel.app/](https://mobile-catalog.vercel.app/).

## Autor

- [Iván Pérez Fernández](https://www.linkedin.com/in/ivanperezfdz)

```

```
