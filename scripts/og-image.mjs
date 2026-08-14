/**
 * Genera la imagen Open Graph (1200×630) de la marca.
 * Uso: npm run og:image  (o: node scripts/og-image.mjs)
 * Requiere sharp (dependencia transitiva de Astro).
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

// Paleta del sitio (tema oscuro por defecto):
//   bg #211e1b · ink #f0eae2 · muted #a79f93 · terracota #d97b55
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#211e1b"/>

  <!-- Resplandores decorativos sutiles (como en el hero) -->
  <circle cx="960" cy="300" r="240" fill="#d97b55" opacity="0.08"/>
  <circle cx="140" cy="540" r="190" fill="#d97b55" opacity="0.05"/>

  <!-- Marco interior -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#f0eae2" stroke-opacity="0.14" stroke-width="1.5"/>

  <!-- Eyebrow -->
  <text x="84" y="182" font-family="Arial, Helvetica, sans-serif" font-size="21" letter-spacing="9" fill="#d97b55" font-weight="500">DESARROLLO DE SOFTWARE</text>

  <!-- Marca -->
  <text x="80" y="308" font-family="Georgia, 'Times New Roman', serif" font-size="124" font-weight="600" fill="#f0eae2">Kader</text>

  <!-- Tagline -->
  <text x="84" y="386" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="300" fill="#a79f93">Software a medida que trabaja por vos.</text>

  <!-- Monograma K (logo del sitio) -->
  <g transform="translate(852,188) scale(2.6)" fill="none" stroke="#d97b55" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M46 36v48"/>
    <path d="M46 44l26-8"/>
    <path d="M46 76l26 8"/>
    <rect x="80" y="50" width="20" height="20"/>
  </g>

  <!-- Dominio -->
  <text x="1116" y="566" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="19" letter-spacing="5" fill="#a79f93" opacity="0.75">KADERSOLUTIONS.SITE</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync("public/og-image.png", png);
console.log(`public/og-image.png generado (${png.length} bytes, 1200×630)`);
