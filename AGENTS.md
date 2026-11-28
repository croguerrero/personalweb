# AGENTS.md

Contexto para agentes que trabajen en este repo: el portfolio personal de Christian Marcelo Guerrero, publicado en **https://portfolio.slopeit.com**.

## Stack

- React 19 + TypeScript + Vite 6. Sin router. Dos páginas estáticas: `index.html` (SPA del portfolio) y `architecture.html` (diagrama de despliegue).
- Estilos: CSS propio en `styles.css` (lo importa `App.tsx` y lo enlaza `architecture.html`). **No** hay Tailwind ni framer-motion.
- Iconos: `lucide-react`. No hay otras dependencias de runtime.
- Sitio en inglés; README y comunicación con el dueño en español.

## Dónde está cada cosa

- `constants.ts`: **todo el contenido** (`PROFILE`, `FOCUS_AREAS`, `TERMINAL_COMMANDS`, `EDUCATION`, `SKILL_CATEGORIES`, `CERTIFICATIONS`, `LANGUAGES`, `PROJECTS`, `EXPERIENCE`). Para cambiar textos se edita aquí, no en los componentes.
- `types.ts`: interfaces de esos datos (`Certification.url` es el enlace de verificación opcional).
- `components/`: una sección por archivo. El orden de la página está en `App.tsx`: Hero (`#about`, incluye `Terminal.tsx`) → Portfolio (`#portfolio`) → Experience (`#experience`) → Skills (`#skills`) → Certifications (`#certifications`, también muestra `LANGUAGES` en la tarjeta `#languages`) → Contact (`#contact`) → Footer.
- `components/Navbar.tsx` y `components/PipelineProgress.tsx` tienen sus propias listas de secciones. Si se agrega, quita o reordena una sección, hay que actualizar ambas.
- `Portfolio.tsx`: el primer elemento de `PROJECTS` es el proyecto destacado (con la imagen `assets/agent-security-lab.jpg`); el resto se lista debajo. Incluye el enlace a `/architecture.html` y al GitHub del perfil.
- `architecture.html` + `architecture.ts` + `assets/architecture/*.svg` (en la raíz, no en `public/`): segunda entrada de Vite (`vite.config.ts` → `rollupOptions.input`). Diagrama animado de cómo se publica el sitio (GitHub → Actions/OIDC → S3 → CloudFront → Cloudflare), con IDs enmascarados.
- `public/`: CV en PDF, `perfil.jpeg`, `social-card.jpg` (og:image 1200×630), `favicon.png`, `apple-touch-icon.png`, logos.
- `CNAME` y `metadata.json`: restos del hosting anterior; no se usan en el build.

## Comandos

```bash
npm ci
npm run dev             # http://localhost:3000
npm run build           # genera dist/ (index.html + architecture.html)
npm run preview         # sirve dist/ en local
npx tsc --noEmit -p .   # chequeo de tipos (no hay tests ni linter)
npm run deploy          # despliegue manual (ver abajo)
```

## CI y despliegue

**Un push a `main` con cambios en el sitio publica en producción.** El sitio se sirve así: Cloudflare (DNS/proxy) → CloudFront `EDPPV9B86HA6P` → bucket S3 `slopeit-bucket-webpage-prod` (us-east-1).

Workflow `.github/workflows/ci.yml` (en PR a `main`, push a `main` y manual):

- **Build and type check**: `npm ci`, `tsc --noEmit`, `npm run build`.
- **SCA (OSV-Scanner)** sobre `package-lock.json` y **SAST (Semgrep CE, `p/default`)**. Cualquier hallazgo hace fallar el job. Si Semgrep marca un falso positivo, se silencia con un `nosemgrep` comentado (ver ejemplo en `index.html`).
- **Detect site changes**: solo en push a `main`. Busca el último commit desplegado (la ejecución exitosa más reciente cuyo paso `Publish to S3 and invalidate CloudFront` se ejecutó de verdad) y compara con el commit actual. Ignora lo que no llega a `dist/`: `*.md`, `.github/`, `.claude/`, `.gitignore`, `deploy.sh`, `CNAME`, `metadata.json`. Si solo cambió eso, no se despliega. Si no encuentra un despliegue previo, despliega. Si añades un archivo que no forma parte del sitio, agrégalo a esa lista; si cambias los nombres de ese job o paso, actualiza la búsqueda.
- **Deploy to AWS (OIDC)**: solo si pasan build, SCA y SAST y hubo cambios en el sitio. Si el commit ya no es la cabeza de `main`, se salta la publicación. Asume el rol del secret `AWS_DEPLOY_ROLE_ARN`, sube `assets/` con caché inmutable, el resto con 1 h, `index.html` al final con `no-cache`, e invalida CloudFront (`/*`).
- El rol de AWS (`GitHubPersonalWebDeploy`) solo tiene `s3:PutObject` sobre una **lista explícita** de archivos (`assets/*`, `index.html`, `architecture.html` y cada archivo de `public/`) y `cloudfront:CreateInvalidation`. Si agregas o renombras un archivo en `public/`, hay que añadirlo a la política del rol o el despliegue fallará con `AccessDenied`.
- Los despliegues manuales con `deploy.sh` no quedan registrados para esta comparación; el siguiente push con cambios desplegará igualmente.

Despliegue manual (alternativa): `npm run deploy` (`deploy.sh`), desde la Mac del dueño con sus credenciales de AWS. Hace lo mismo que el job de CI pero compila en local. Se niega a desplegar con cambios sin commit (`ALLOW_DIRTY=1` lo salta; usar solo si los cambios no afectan al build). Variables: `AWS_PROFILE`, `S3_BUCKET`, `CF_DISTRIBUTION_ID`.

Avisos:

- El bucket **no tiene versionado**: antes de un cambio arriesgado, haz una copia con `aws s3 sync s3://slopeit-bucket-webpage-prod/ <carpeta>`.
- Ni el CI ni `deploy.sh` borran archivos del bucket (no usan `--delete`). Queda un `perfil2.png` antiguo que no está en `dist/`.
- Restos de GitHub Pages: la rama `gh-pages` y la configuración de Pages del repo siguen existiendo pero no se usan.

## Reglas del dueño

- `git commit` / `git push` solo desde la Mac (macOS). En otra plataforma, dejar los cambios listos sin commitear.
- Confirmar con el dueño antes de hacer push a GitHub (si hay cambios en el sitio, equivale a desplegar), desplegar a S3 o borrar ramas o archivos remotos.
- Verificar siempre con `npm run build` y `npx tsc --noEmit -p .` antes de commitear.

## Mejoras pendientes (revisado el 28 nov 2026)

- Enlazar los proyectos: `Project.link` existe en `types.ts` pero `Portfolio.tsx` no lo usa y ningún proyecto lo tiene. Falta saber qué repos son públicos.
- Los tres proyectos de IA en `PROJECTS` repiten casi literalmente los puntos de SLOPE-IT en `EXPERIENCE`.
- Limpiar los restos de GitHub Pages (rama `gh-pages`, configuración de Pages, `CNAME`) y el `perfil2.png` del bucket; confirmar antes con el dueño.
