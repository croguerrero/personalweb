# Portafolio de Christian Guerrero

Portafolio en inglés sobre ingeniería de plataformas, DevSecOps y seguridad de sistemas de IA. La página principal y `/architecture.html` se generan como archivos estáticos con React, TypeScript y Vite. El CSS, el retrato, la ilustración y el CV se sirven desde el propio sitio.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Compilación y vista previa

```bash
npm run build
npm run preview
```

La compilación genera `dist/`. Revisa la página principal y `/architecture.html` en la URL local que indica Vite.

## Pruebas de navegador

```bash
npx playwright install --only-shell chromium
npm test
```

`npm test` compila el sitio y ejecuta Playwright sobre la vista previa de producción. Las pruebas cubren navegación, descarga del CV, terminal, arquitectura y uso en móvil. GitHub Actions conserva el resultado y la traza si una prueba falla.

## Integración continua en GitHub

El workflow [CI](.github/workflows/ci.yml) corre al abrir o actualizar un pull request hacia `main`, al subir commits a `main` y cuando se ejecuta manualmente desde **Actions → CI**.

- **Build and type check** instala las dependencias del lockfile, comprueba TypeScript, compila el sitio y ejecuta las pruebas de navegador antes de guardar el artefacto de despliegue.
- **SCA (OSV-Scanner)** revisa las versiones directas y transitivas de `package-lock.json`, incluidas las dependencias de desarrollo, en busca de vulnerabilidades conocidas.
- **SAST (Semgrep CE)** revisa el código fuente con las reglas de seguridad de `p/default`.

Los análisis marcan su comprobación como fallida si encuentran vulnerabilidades o hallazgos. Los detalles están en los registros de cada job.

## Publicación en AWS

En un push a `main`, GitHub Actions publica el artefacto `dist/` después de que pasen la compilación, las pruebas de navegador, SCA y SAST. El job de despliegue asume por OIDC el rol configurado en el secret `AWS_DEPLOY_ROLE_ARN`. Sube los recursos a S3, publica `index.html` al final y solicita la invalidación de CloudFront.

El despliegue solo ocurre si cambió algún archivo del sitio desde el último commit publicado. El job **Detect site changes** ignora la documentación (`*.md`), `.github/`, `.claude/`, `.gitignore`, `deploy.sh`, `CNAME`, `metadata.json`, `tests/` y `playwright.config.ts`; si el push solo toca esos archivos, el despliegue se omite.

Para publicar manualmente desde un commit con credenciales válidas de AWS CLI, ejecuta:

```bash
npm run deploy
```

`deploy.sh` compila el proyecto, sube los recursos versionados a S3 con caché de largo plazo, sincroniza los archivos estáticos, publica `index.html` al final y solicita una invalidación de CloudFront. Se pueden configurar `AWS_PROFILE`, `S3_BUCKET` y `CF_DISTRIBUTION_ID` mediante variables de entorno.
