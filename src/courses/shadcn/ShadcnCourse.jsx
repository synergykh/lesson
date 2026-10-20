import React from "react";
import CourseViewer from "../common/CourseViewer";
import { SHADCN_SLIDES, SHADCN_META } from "./slides";

export default function ShadcnCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="shadcn"
      courseTitle={SHADCN_META.title}
      defaultPart={SHADCN_META.module}
      accent={SHADCN_META.accent}
      slides={SHADCN_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
