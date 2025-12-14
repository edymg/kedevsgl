'use client'

import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useEffect, useState, useRef } from 'react';

export default function ScrollNavigation() {
  const [showUpButton, setShowUpButton] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const checkScrollPosition = () => {
    if (!footerRef.current) return;

    const footer = footerRef.current;
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    setShowUpButton(footerPosition <= windowHeight * 0.9);
  };

  useEffect(() => {

    footerRef.current = document.querySelector('footer');

    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-6  lg:right-8 bottom-24 lg:bottom-40 flex flex-col gap-2 z-50">
      <Zoom in={showUpButton}>
        <Fab
          color="primary"
          size="medium"
          aria-label="Volver arriba"
          onClick={scrollToTop}
          sx={{
            opacity: 0.8,
            '&:hover': {
              opacity: 1,
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </div>
  );
}