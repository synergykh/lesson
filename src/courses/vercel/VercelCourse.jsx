import React from "react";
import CourseViewer from "../common/CourseViewer";
import { VERCEL_SLIDES, VERCEL_META } from "./slides";

export default function VercelCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="vercel"
      courseTitle={VERCEL_META.title}
      defaultPart={VERCEL_META.module}
      accent={VERCEL_META.accent}
      slides={VERCEL_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
