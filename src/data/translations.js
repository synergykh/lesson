import commonTranslations from "./translations/common.json";
import gitTranslations from "./translations/git.json";
import githubTranslations from "./translations/github.json";
import promptingTranslations from "./translations/prompting.json";
import postgresTranslations from "./translations/postgres.json";
import vercelTranslations from "./translations/vercel.json";
import cloudflareTranslations from "./translations/cloudflare.json";
import nextjsTranslations from "./translations/nextjs.json";
import tailwindcssTranslations from "./translations/tailwindcss.json";
import shadcnTranslations from "./translations/shadcn.json";

export const courseTranslations = {
  git: gitTranslations,
  github: githubTranslations,
  prompting: promptingTranslations,
  postgres: postgresTranslations,
  vercel: vercelTranslations,
  cloudflare: cloudflareTranslations,
  nextjs: nextjsTranslations,
  tailwindcss: tailwindcssTranslations,
  shadcn: shadcnTranslations,
};

export { commonTranslations };

// Legacy combined object for backwards compatibility
export const translations = {
  en: {
    ...commonTranslations.en,
    ...gitTranslations.en,
    ...promptingTranslations.en,
    ...postgresTranslations.en,
    ...vercelTranslations.en,
    ...cloudflareTranslations.en,
  },
  km: {
    ...commonTranslations.km,
    ...gitTranslations.km,
    ...promptingTranslations.km,
    ...postgresTranslations.km,
    ...vercelTranslations.km,
    ...cloudflareTranslations.km,
  },
};

export default translations;
