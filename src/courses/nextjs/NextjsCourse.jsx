import React from "react";
import CourseViewer from "../common/CourseViewer";
import { NEXTJS_SLIDES, NEXTJS_META } from "./slides";

export default function NextjsCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="nextjs"
      courseTitle={NEXTJS_META.title}
      defaultPart={NEXTJS_META.module}
      accent={NEXTJS_META.accent}
      slides={NEXTJS_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
