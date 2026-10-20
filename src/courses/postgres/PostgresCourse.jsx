import React from "react";
import CourseViewer from "../common/CourseViewer";
import { POSTGRES_SLIDES, POSTGRES_META } from "./slides";

export default function PostgresCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="postgres"
      courseTitle={POSTGRES_META.title}
      defaultPart={POSTGRES_META.module}
      accent={POSTGRES_META.accent}
      slides={POSTGRES_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
