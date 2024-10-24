import React, { useState, useRef, useEffect, ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const bottom = rect.bottom;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (bottom > viewportHeight) {
        const scrollAmount = bottom - viewportHeight + 20; // Adjust padding as needed
        window.scrollBy({
          top: scrollAmount,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [isOpen]);

  return (
    <div ref={sectionRef} className="w-full mb-1">
      {/* Button with title and arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-3xl font-bold">{title}</span>
        <FaChevronRight
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-100 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      {/* Dotted line */}
      <div
        className={`w-full border-b-2 border-dotted mb-2 ${
          isOpen ? "border-black" : "border-gray-400"
        }`}
      ></div>
      {/* Content */}
      {isOpen && <div className="flex flex-col items-start">{children}</div>}
    </div>
  );
};

export default Section;
