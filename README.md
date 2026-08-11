# Bau — Landing de servicios de desarrollo

Landing bilingüe (ES/EN) para ofrecer servicios de desarrollo de software. Stack: **Astro + Tailwind CSS**, deploy estático **gratis** en Vercel, formulario de contacto con **Web3Forms**.

## Funcionalidades

- 🌙 **Dark mode por defecto** con toggle claro/oscuro en la navbar (persiste en localStorage)
- 🌍 **Bilingüe ES/EN** — `/` y `/en/`, con switcher y `hreflang`
- 📄 **Una página por servicio** (`/servicios/[slug]`) con qué incluye, proceso, **gancho de escasez** (cupo limitado) y CTA directo al formulario
- ✉️ Formulario de contacto con **mensaje pre-cargado** por servicio

## Estructura

```
src/
├── site.config.ts      # Identidad, contacto, redes, clave Web3Forms
├── i18n/index.ts       # Textos ES/EN + contenido de páginas de servicio
├── layouts/Base.astro  # Head SEO, tema, fuentes, nav, footer
├── components/         # Hero, Servicios, Sobre mí, Contacto, ServiceDetail…
└── pages/
    ├── index.astro             # Español (ruta /)
    ├── en/index.astro          # Inglés (ruta /en/)
    ├── servicios/[slug].astro  # Páginas de servicio ES
    └── en/services/[slug].astro# Páginas de servicio EN
```

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático en dist/
```

## Antes de publicar (TODO)

1. **Identidad**: editá `src/site.config.ts` (nombre, iniciales, email, redes).
2. **Textos y ganchos**: editá `src/i18n/index.ts` — buscá `hook` para ajustar los mensajes de escasez por servicio.
3. **Formulario**:
   - Entrá a https://web3forms.com, poné tu email y recibís tu Access Key (gratis, 250 envíos/mes).
   - Copiá `.env.example` a `.env` y pegá la key en `PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. **Foto**: reemplazá el bloque del monograma en `src/components/About.astro` por un `<img>`.
5. **Dominio**: actualizá `site` en `astro.config.mjs` (el dominio real de Vercel).

## Deploy a Vercel (gratis)

1. Creá un repo en GitHub y subí esta carpeta (`git init && git add . && git commit -m "init" && git push`).
2. En [vercel.com](https://vercel.com) → *Add New Project* → importá el repo.
3. Vercel detecta Astro automáticamente. En *Environment Variables* agregá `PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Deploy. Cada push a `main` publica automáticamente.
