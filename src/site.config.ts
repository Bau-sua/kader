/**
 * ============================================================
 *  Configuración central del sitio
 *  — Editar TODO lo relacionado con identidad ACÁ y en
 *    src/i18n/ (textos).
 * ============================================================
 */

export const site = {
  // Marca: Kader («marco» en neerlandés) — identidad minimalista, elegante y profesional
  name: "Kader",
  initials: "K",
  role: "Desarrollo de Software",

  // TODO: Datos de contacto reales
  email: "hola@tudominio.com",
  location: "San Luis, Argentina",

  // TODO: Redes sociales (dejá en "" lo que no uses)
  socials: {
    linkedin: "",
    instagram:"",
  },

  // Clave pública de Web3Forms — configurar en .env (ver .env.example)
  web3formsAccessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
};
