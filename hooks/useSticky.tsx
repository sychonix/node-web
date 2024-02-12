'use client';

import { useState, useEffect } from 'react';

const useSticky = (elementId: string) => {
  const [isSticky, setSticky] = useState(false);

  // useEffect(() => {
  // 	const handleScroll = () => {
  // 		const targetElement = document.getElementById(elementId)

  // 		if (!targetElement) {
  // 			console.error(`Element with id "${elementId}" not found`)
  // 			return
  // 		}

  // 		if (targetElement.getBoundingClientRect().bottom <= 0) {
  // 			setSticky(true)
  // 		} else {
  // 			setSticky(false)
  // 		}
  // 	}

  // 	window.addEventListener('scroll', handleScroll)

  // 	return () => {
  // 		window.removeEventListener('scroll', handleScroll)
  // 	}
  // }, [elementId])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};

export default useSticky;
