import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { decode } from 'html-entities';
import CourseContentCodeHighlightCopy from './CourseContentCodeHighlightCopy';

export default function CodeHighlight(props) {
  const { language, content } = props;
  const decodedContent = decode(content);

  const handleCopy = () => {
    window.navigator.clipboard.writeText(decodedContent);
  };

  return (
    <div>
      <CourseContentCodeHighlightCopy onCopy={handleCopy} />
      <SyntaxHighlighter
        language={language}
        style={okaidia}
        showLineNumbers
      >
        {decodedContent}
      </SyntaxHighlighter>
    </div>
  );
}
