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

## Integración continua en GitHub

El workflow [CI](.github/workflows/ci.yml) corre al abrir o actualizar un pull request hacia `main`, al subir commits a `main` y cuando se ejecuta manualmente desde **Actions → CI**.

- **Build and type check** instala las dependencias del lockfile, comprueba TypeScript y compila el sitio.
- **SCA (OSV-Scanner)** revisa las versiones directas y transitivas de `package-lock.json`, incluidas las dependencias de desarrollo, en busca de vulnerabilidades conocidas.
- **SAST (Semgrep CE)** revisa el código fuente con las reglas de seguridad de `p/default`.

Los análisis marcan su comprobación como fallida si encuentran vulnerabilidades o hallazgos. Los detalles están en los registros de cada job. La publicación a S3 se ejecuta manualmente con el comando de la sección siguiente.

## Publicación en AWS

Con el código listo en un commit y con credenciales válidas de AWS CLI, ejecuta:

```bash
npm run deploy
```

`deploy.sh` compila el proyecto, sube los recursos versionados a S3 con caché de largo plazo, sincroniza los archivos estáticos, publica `index.html` al final y solicita una invalidación de CloudFront. Se pueden configurar `AWS_PROFILE`, `S3_BUCKET` y `CF_DISTRIBUTION_ID` mediante variables de entorno.
