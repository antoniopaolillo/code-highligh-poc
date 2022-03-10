import { useRef, useState } from 'react';
import useMounted from './useMounted';

const COPY_FEEDBACK_DURATION = 2_000;

function CourseContentCodeHighlightCopy(props) {
  const { onCopy } = props;

  const mounted = useMounted();
  const timeoutRef = useRef(null);
  const [text, setText] = useState('Copiar');

  const handleClick = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    onCopy();
    setText('Copiado!');

    timeoutRef.current = window.setTimeout(() => {
      if (!mounted()) return;

      setText('Copiar');
    }, COPY_FEEDBACK_DURATION);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="CourseContentCodeHighlightCopy"
    >
      {text}
    </button>
  );
}

export default CourseContentCodeHighlightCopy;
