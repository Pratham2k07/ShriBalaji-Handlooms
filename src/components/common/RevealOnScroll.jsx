import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only animate once
          observer.unobserve(currentRef);
        }
      });
    }, {
      threshold: 0.15
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-section ${isVisible ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
