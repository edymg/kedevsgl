"use client";

import { useEffect, useState } from "react";

const useScrollActive = (inputRef: any) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = inputRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsActive(entry.isIntersecting);
      });
    });

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return isActive;
};

export default useScrollActive;
