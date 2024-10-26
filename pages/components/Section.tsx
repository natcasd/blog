import React, { useState, useRef, useEffect, ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent container click from triggering
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);

      // Delay the scroll until after the content has expanded
      setTimeout(() => {
        handleScroll();
      }, 125); // Match the duration of the CSS transition
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  // Handle clicks inside the section, excluding links
  const handleSectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName !== "A" && target.tagName !== "BUTTON" && isOpen) {
      setIsOpen(false); // Close the section if clicking inside but not on links/buttons
    }
  };

  return (
    <div
      ref={sectionRef}
      className="w-full mb-1 cursor-pointer"
      onClick={handleSectionClick}
    >
      {/* Header with title and arrow */}
      <button
        onClick={toggleSection}
        className="w-full flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-3xl font-bold">{title}</span>
        <FaChevronRight
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
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

      {/* Content wrapper with maxHeight transition */}
      <div
        ref={contentRef}
        className="transition-all duration-150 ease-in-out overflow-hidden"
        style={{
          maxHeight: maxHeight,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-start py-2">{children}</div>
      </div>
    </div>
  );
};

export default Section;
