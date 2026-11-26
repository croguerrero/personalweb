#!/usr/bin/env bash
# Build the portfolio and publish it to S3 + CloudFront (portfolio.slopeit.com).
#
# Usage:  ./deploy.sh            (or: npm run deploy)
# Override defaults with env vars: S3_BUCKET, CF_DISTRIBUTION_ID, AWS_PROFILE.
set -euo pipefail

S3_BUCKET="${S3_BUCKET:-slopeit-bucket-webpage-prod}"
CF_DISTRIBUTION_ID="${CF_DISTRIBUTION_ID:-EDPPV9B86HA6P}"
SITE_URL="https://portfolio.slopeit.com"

cd "$(dirname "$0")"

# 1. Only deploy committed code, so the live site always matches a commit.
#    ALLOW_DIRTY=1 ./deploy.sh skips this check (use with care).
if [[ -n "$(git status --porcelain)" && "${ALLOW_DIRTY:-0}" != "1" ]]; then
  echo "✗ Hay cambios sin commit. Haz commit (o stash) antes de desplegar." >&2
  git status --short >&2
  exit 1
fi
COMMIT="$(git rev-parse --short HEAD)"
echo "→ Desplegando commit $COMMIT ($(git log -1 --format=%s))"

# 2. Check AWS credentials before building.
aws sts get-caller-identity --query Account --output text >/dev/null \
  || { echo "✗ Credenciales de AWS no válidas." >&2; exit 1; }

# 3. Build.
npm run build

# 4. Upload hashed assets with long cache (their names change on every build).
aws s3 sync dist/assets "s3://$S3_BUCKET/assets" \
  --cache-control "public, max-age=31536000, immutable" --only-show-errors

# 5. Upload everything else (PDF, images, architecture.html) with short cache.
aws s3 sync dist/ "s3://$S3_BUCKET/" \
  --exclude "assets/*" --exclude "index.html" \
  --cache-control "public, max-age=3600" --only-show-errors

# 6. index.html last and never cached, so it only points to assets already uploaded.
aws s3 cp dist/index.html "s3://$S3_BUCKET/index.html" \
  --cache-control "no-cache" --content-type "text/html; charset=utf-8" --only-show-errors

# 7. Invalidate CloudFront.
INV_ID="$(aws cloudfront create-invalidation --distribution-id "$CF_DISTRIBUTION_ID" \
  --paths "/*" --query Invalidation.Id --output text)"
echo "→ Invalidación de CloudFront: $INV_ID (tarda 1-2 min)"

echo "✓ Commit $COMMIT subido a s3://$S3_BUCKET → $SITE_URL"
