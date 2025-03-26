
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";
import { ContentCategory } from "@/lib/data";

interface ContentRowProps {
  category: ContentCategory;
}

const ContentRow = ({ category }: ContentRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="content-row">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">
          {category.title}
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="arrow left-arrow"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-2 px-4 md:px-8"
        >
          {category.projects.map((project) => (
            <ContentCard key={project.id} project={project} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="arrow right-arrow"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ContentRow;
