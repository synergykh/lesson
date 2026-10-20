import React from "react";
import CourseViewer from "../common/CourseViewer";
import { CLOUDFLARE_SLIDES, CLOUDFLARE_META } from "./slides";

export default function CloudflareCourse({ initialSlide = 1 }) {
  return (
    <CourseViewer
      courseId="cloudflare"
      courseTitle={CLOUDFLARE_META.title}
      defaultPart={CLOUDFLARE_META.module}
      accent={CLOUDFLARE_META.accent}
      slides={CLOUDFLARE_SLIDES}
      initialSlide={initialSlide}
    />
  );
}
