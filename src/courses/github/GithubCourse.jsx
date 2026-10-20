import React from "react";
import CourseViewer from "../common/CourseViewer";
import { GITHUB_SLIDES, GITHUB_META } from "./slides";

export default function GithubCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="github"
      courseTitle={GITHUB_META.title}
      defaultPart={GITHUB_META.module}
      accent={GITHUB_META.accent}
      slides={GITHUB_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
