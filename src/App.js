import React from "react";
import CourseContentLessonChildObjects from "./components/CourseContentLessonChildObjects";
import { objects } from "./mock/contentObjectMock";

export default function App() {
  return (
    <div>
      {objects.map((object) => (
        <React.Fragment key={object.id}>
          <CourseContentLessonChildObjects object={object} />
        </React.Fragment>
      ))}
    </div>
  );
}
