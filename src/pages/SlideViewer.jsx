import React, { Suspense } from "react";
import { COURSE_COMPONENTS } from "../courses";

export default function SlideViewer({ courseId, initialSlide = 1 }) {
  const Course = COURSE_COMPONENTS[courseId];
  if (!Course) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
        Course not found: {courseId}
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-300">
          Loading lesson...
        </div>
      }
    >
      <Course initialSlide={initialSlide} />
    </Suspense>
  );
}
