import React from "react";
import CourseViewer from "../common/CourseViewer";
import { TAILWIND_SLIDES, TAILWIND_META } from "./slides";

export default function TailwindCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="tailwindcss"
      courseTitle={TAILWIND_META.title}
      defaultPart={TAILWIND_META.module}
      accent={TAILWIND_META.accent}
      slides={TAILWIND_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
