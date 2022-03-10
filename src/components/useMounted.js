import { useCallback, useLayoutEffect, useRef } from 'react';


function useMounted(){
  const mountedRef = useRef(true);

  useLayoutEffect(
    () => () => {
      mountedRef.current = false;
    },
    [],
  );

  return useCallback(() => mountedRef.current, []);
}

export default useMounted;
