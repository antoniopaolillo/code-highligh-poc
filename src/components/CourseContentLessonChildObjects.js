import React from "react";
import VideoPlayer from "./VideoPlayer";
import CodeHighlight from "./CodeHighlight";

function CourseContentLessonChildObjects({ object }) {
  switch (object.element_type) {
    case "code":
      return <CodeHighlight {...object} />;

    case "video":
      return <VideoPlayer {...object} />;

    default:
      return <div dangerouslySetInnerHTML={{ __html: object.content }} />;
  }
}

export default CourseContentLessonChildObjects;
