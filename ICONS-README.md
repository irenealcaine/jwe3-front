# Iconos y Manifest - JWE3 Dinosaurs

## Archivos creados:

### Iconos SVG
- `dino-icon.svg` - Icono principal de dinosaurio (512x512)
- `favicon.svg` - Favicon optimizado (32x32)

### Configuración PWA
- `manifest.json` - Manifiesto de aplicación web progresiva

### HTML actualizado
- Meta tags completos para SEO
- Open Graph y Twitter Cards
- Configuración PWA
- Título y descripción mejorados

## Características del manifest.json:

- **Nombre**: JWE3 Dinosaurs
- **Tema**: Oscuro (#111827)
- **Color principal**: Verde (#10b981)
- **Modo**: Standalone (como app nativa)
- **Orientación**: Portrait
- **Categorías**: Education, Games, Entertainment

## Iconos PNG recomendados:

Para generar los iconos PNG desde el SVG, puedes usar:

### Opción 1: ImageMagick (si está instalado)
```bash
./generate-icons.sh
```

### Opción 2: Online converter
1. Ve a https://convertio.co/svg-png/
2. Sube `dino-icon.svg`
3. Genera estos tamaños:
   - 16x16 → `favicon-16x16.png`
   - 32x32 → `favicon-32x32.png`
   - 180x180 → `apple-touch-icon.png`
   - 192x192 → `android-chrome-192x192.png`
   - 512x512 → `android-chrome-512x512.png`

### Opción 3: Usar el SVG directamente
Los navegadores modernos soportan SVG como favicon, por lo que la app funcionará con los archivos actuales.

## Tema visual:

- **Colores principales**: Verde (#10b981, #059669)
- **Fondo**: Gris oscuro (#111827)
- **Diseño**: Dinosaurio estilizado con espinas dorsales
- **Estilo**: Moderno, minimalista, coherente con el tema de la app

La aplicación ahora está lista para funcionar como PWA (Progressive Web App) y tiene todos los meta tags necesarios para SEO y redes sociales.