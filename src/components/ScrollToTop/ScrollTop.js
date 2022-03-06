import React, { useEffect, useState } from "react";
import {BsFillArrowUpSquareFill} from "react-icons/bs"
import styled from "styled-components";

const Scroll = styled.div`
    position: fixed;
    bottom: 0;
    right: 1rem;
    cursor: pointer;
`

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Scroll>
      {isVisible && (
        <div onClick={scrollToTop}>
          <BsFillArrowUpSquareFill size={24} fill="#d9d9d99c"/>
        </div>
      )}
    </Scroll>
  );
}