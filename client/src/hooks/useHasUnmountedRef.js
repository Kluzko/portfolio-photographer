import { useRef, useEffect } from "react";

export default function useHasUnmountedRef() {
  const hasUnmountedRef = useRef(false);
  useEffect(() => {
    return () => {
      hasUnmountedRef.current = true;
    };
  }, []);
  return hasUnmountedRef;
}
