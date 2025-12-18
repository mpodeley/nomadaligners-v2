# NomadAligners — Sitio estático

Sitio estático (HTML/CSS/JS) listo para GitHub Pages + dominio propio.

## Estructura

- `/index.html` — Home (lead + evaluador)
- Páginas SEO (cada una con `index.html`):
  - `/alineadores-invisibles-palermo/`
  - `/ortodoncia-invisible-precios/`
  - `/apinamiento-alineadores/`
  - `/diastemas-alineadores/`
  - `/mordida-cruzada-alineadores/`
  - `/sobremordida-mordida-abierta-prognatismo/`
  - `/invisalign-vs-alineadores/`
  - `/teleconsulta-ortodoncia/`
  - `/nosotros/`
- Páginas de pacientes (bloqueadas para SEO por `robots.txt` y `noindex`):
  - `/blanqueamiento.html`
  - `/contenciones.html`
  - `/fonoaudiologia.html`

## SEO técnico incluido

- `robots.txt` con sitemap y bloqueo de páginas de pacientes
- `sitemap.xml`
- `<link rel="canonical">`, metadescripción, Open Graph y Twitter Cards
- JSON-LD (`Dentist` + `FAQPage`) en las páginas indexables

## Desarrollo local

```bash
python3 -m http.server 8000
```

Abrir:
- `http://localhost:8000/`

## Deploy

1. Subir al repo (GitHub)
2. GitHub Pages: configurar la carpeta raíz del repo
3. Mantener `CNAME` si usás dominio propio

