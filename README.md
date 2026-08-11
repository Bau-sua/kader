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
