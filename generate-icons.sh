#!/bin/bash

# Script para generar iconos PNG desde SVG
# Requiere ImageMagick (convert) instalado

echo "Generando iconos PNG desde SVG..."

# Crear directorio de iconos si no existe
mkdir -p /workspaces/jwe3-front/public/icons

# Generar diferentes tamaños
convert /workspaces/jwe3-front/public/dino-icon.svg -resize 16x16 /workspaces/jwe3-front/public/favicon-16x16.png
convert /workspaces/jwe3-front/public/dino-icon.svg -resize 32x32 /workspaces/jwe3-front/public/favicon-32x32.png
convert /workspaces/jwe3-front/public/dino-icon.svg -resize 180x180 /workspaces/jwe3-front/public/apple-touch-icon.png
convert /workspaces/jwe3-front/public/dino-icon.svg -resize 192x192 /workspaces/jwe3-front/public/android-chrome-192x192.png
convert /workspaces/jwe3-front/public/dino-icon.svg -resize 512x512 /workspaces/jwe3-front/public/android-chrome-512x512.png

echo "¡Iconos PNG generados exitosamente!"