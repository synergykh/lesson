import React, { lazy } from "react";

export const COURSE_COMPONENTS = {
  git: lazy(() => import("./git/GitCourse")),
  github: lazy(() => import("./github/GithubCourse")),
  nextjs: lazy(() => import("./nextjs/NextjsCourse")),
  tailwindcss: lazy(() => import("./tailwindcss/TailwindCourse")),
  shadcn: lazy(() => import("./shadcn/ShadcnCourse")),
  postgres: lazy(() => import("./postgres/PostgresCourse")),
  vercel: lazy(() => import("./vercel/VercelCourse")),
  cloudflare: lazy(() => import("./cloudflare/CloudflareCourse")),
  prompting: lazy(() => import("./prompting/PromptingCourse")),
};

export function getCourseComponent(courseId) {
  return COURSE_COMPONENTS[courseId] || null;
}
