import { useState } from "react";
import { Button } from "../components/ui/button";
import auptexHomieImage from "../assets/auptex-homie-device.png";
import solarEnergyImage from "../assets/solar-energy-design.png";
import sstMakerspaceImage from "../assets/sst-makerspace-design.png";
import nepaUpdateImage from "../assets/nepa-update-design.png";
import smartInverterDesign from "../assets/smart-inverter-design.png"
import powerxenseImage from "../assets/powerxense-design.png";

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  category: "PCB" | "Software" | "Research" | "Presentation";
  imagePath: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Auptex Homie Device",
    description:
      "Smart home automation system with custom PCB design and IoT integration capabilities.",
    category: "PCB",
    imagePath: auptexHomieImage,
  },
  {
    id: 2,
    title: "NepaUpdate System",
    description:
      "Real-time power monitoring and notification system for tracking electricity availability in Nigeria.",
    category: "Software",
    imagePath: nepaUpdateImage,
  },
  {
    id: 3,
    title: "Introduction to Solar Energy",
    description:
      "Comprehensive research and implementation guide for solar energy solutions.",
    category: "Research",
    imagePath: solarEnergyImage,
  },
  {
    id: 4,
    title: "Smart Inverter Design",
    description:
      "Advanced inverter system with intelligent power management and monitoring capabilities.",
    category: "PCB",
    imagePath: smartInverterDesign, 
  },
  {
    id: 5,
    title: "PowerXense",
    description:
      "Power monitoring and analytics platform for industrial applications.",
    category: "Software",
    imagePath: powerxenseImage,
  },
  {
    id: 6,
    title: "SST Makerspace Initiative",
    description:
      "Proposal and implementation plan for university makerspace facility.",
    category: "Presentation",
    imagePath: sstMakerspaceImage,
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "PCB",
    "Software",
    "Research",
    "Presentation",
    "Designs",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 font-[Geist]">My Projects</h1>
        <p className="font-[Poppins] text-black/90 max-w-2xl mx-auto">
          A collection of my work in PCB design, software development, research,
          and presentations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="text-sm font-[Inter]"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
      {/* Image Container */}
      <div className="aspect-video rounded-md bg-muted mb-4 overflow-hidden">
        <div className="w-full h-full bg-secondary/40 flex items-center justify-center text-black/90">
          <img
            src={project.imagePath}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-semibold text-lg leading-tight font-[Geist]">
            {project.title}
          </h3>
          <span className="text-xs bg-black text-white px-3 py-1.5 rounded-full font-[Inter]">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-black/90 font-[Poppins]">
          {project.description}
        </p>
      </div>
    </div>
  );
}
