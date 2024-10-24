import Link from "next/link";
import Image from "next/image";
import profile from "./images/profile.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { ReactNode, useState } from "react";
import Section from "./components/Section";

import { FaChevronRight } from "react-icons/fa";
import generalData from "./mappings/general.json";
import mapsData from "./mappings/maps.json";
import reviewsData from "./mappings/reviews.json";
import recipesData from "./mappings/recipes.json";

interface Blog {
  title: string;
  href: string;
  date: string;
}
interface SectionData {
  section: string;
  entries: Blog[];
}

export default function Home() {
  const sections: SectionData[] = [
    { section: "General", entries: generalData },
    { section: "Reviews", entries: reviewsData },
    { section: "Recipes", entries: recipesData },
    { section: "Maps", entries: mapsData },
  ];

  return (
    <div className="main-container flex flex-col items-center w-full py-8">
      <h1 className="text-6xl font-bold mb-8 underline">Nate's Blog</h1>
      <div className="mb-8 w-full max-w-xl px-4">
        <Image
          src={profile}
          alt="profile"
          layout="responsive"
          width={600}
          height={600}
          className="w-full"
        />
      </div>
      {/* Container aligned with the image */}
      <div className="w-full max-w-xl px-4">
        <div className="flex flex-col items-start mb-4 w-full">
          {sections.map((sectionData) => (
            <Section key={sectionData.section} title={sectionData.section}>
              {sectionData.entries.map((entry) => (
                <div key={entry.href} className="flex items-center mb-1 w-full">
                  {/* Dotted line to the left */}
                  <div className="border-l-2 border-dotted border-gray-400 h-full mr-2"></div>
                  {/* Entry content */}
                  <div className="flex justify-between items-center w-full">
                    <Link
                      href={entry.href}
                      className="text-blue-500 underline hover:text-blue-700 text-lg"
                    >
                      {entry.title}
                    </Link>
                    <div className="text-sm text-gray-500">{entry.date}</div>
                  </div>
                </div>
              ))}
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}
