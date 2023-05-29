import React, { useRef, useEffect } from 'react';

const ElementVisibility = ({ handleVisibility }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0, // Fully visible or fully hidden
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is inside the viewport
          handleVisibility(true);
        } else {
          // Element is outside the viewport
          handleVisibility(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [handleVisibility]);

  return <div ref={targetRef}></div>;
};

export default ElementVisibility;
