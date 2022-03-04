import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { decode } from 'html-entities';

// Enum languages

// criar snapshot para as linguagens

export default function CodeHighlight({ language, content }) {
  return (
    <SyntaxHighlighter language={language} style={okaidia} showLineNumbers>
      {decode(content)}
    </SyntaxHighlighter>
  );
}
