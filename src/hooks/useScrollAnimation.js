import { useEffect, useState } from "react";

export default function useScrollAnimation(threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    const element = document.querySelector("[data-scroll-animate]");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
}
