'use client'
import React, {useEffect, useRef, useState} from 'react'
import { LiaChevronUpSolid } from 'react-icons/lia'
  
function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
          const positionLimit = 200;
          const scrollTop = window.scrollY;
          setIsVisible(scrollTop >= positionLimit);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      function scrollToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }

  return (
    <div ref={buttonRef} onClick={scrollToTop} className={`w-10 fixed bottom-5 py-2 px-[9px] right-5 h-10 rounded-lg bg-[#0099FF] ${isVisible ? '' : 'hidden'}`}>
        <LiaChevronUpSolid className={``} size={`20`} color={`#FFFFFF`}/>
    </div>
  )
}

export default BackToTop