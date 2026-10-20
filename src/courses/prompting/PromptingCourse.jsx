import React from "react";
import CourseViewer from "../common/CourseViewer";
import { PROMPTING_SLIDES, PROMPTING_META } from "./slides";

export default function PromptingCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="prompting"
      courseTitle={PROMPTING_META.title}
      defaultPart={PROMPTING_META.module}
      accent={PROMPTING_META.accent}
      slides={PROMPTING_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
