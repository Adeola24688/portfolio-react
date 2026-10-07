import { useCallback, useEffect, useRef, useState } from "react";

const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const registerNode = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const element = nodeRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { registerNode, isVisible };
};

export default useScrollReveal;
