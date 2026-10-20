import React from "react";
import CourseViewer from "../common/CourseViewer";
import { GIT_SLIDES } from "./slides";

export default function GitCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="git"
      courseTitle="Git: Local Version Control"
      defaultPart="MODULE 01"
      accent="orange"
      slides={GIT_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
