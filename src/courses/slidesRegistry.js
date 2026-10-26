/**
 * Lazy loaders for all course slides
 * Enables on-demand loading of course chunks to keep initial bundle compact.
 */

export const COURSE_SLIDES_LOADERS = {
  git: () => import("./git/slides").then((m) => m.GIT_SLIDES),
  github: () => import("./github/slides").then((m) => m.GITHUB_SLIDES),
  nextjs: () => import("./nextjs/slides").then((m) => m.NEXTJS_SLIDES),
  tailwindcss: () => import("./tailwindcss/slides").then((m) => m.TAILWIND_SLIDES),
  shadcn: () => import("./shadcn/slides").then((m) => m.SHADCN_SLIDES),
  postgres: () => import("./postgres/slides").then((m) => m.POSTGRES_SLIDES),
  vercel: () => import("./vercel/slides").then((m) => m.VERCEL_SLIDES),
  cloudflare: () => import("./cloudflare/slides").then((m) => m.CLOUDFLARE_SLIDES),
  prompting: () => import("./prompting/slides").then((m) => m.PROMPTING_SLIDES),
};

export async function loadCourseSlides(courseId) {
  const loader = COURSE_SLIDES_LOADERS[courseId];
  if (!loader) {
    throw new Error(`Unknown course ID: ${courseId}`);
  }
  return await loader();
}
