import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import auptexHomieImage from "../assets/auptex-homie-device.png";
import solarEnergyImage from "../assets/solar-energy-design.png";
import sstMakerspaceImage from "../assets/sst-makerspace-design.png";

// TODO: Optimise images. Chage from png to webp.
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative py-9 text-center">
        <div className="max-w-[980px] mx-auto px-4">
          <h1 className="font-[Geist] text-6xl font-bold leading-tight tracking-tight mb-6">
            Hi, I'm Saviour Emmanuel
          </h1>
          <p className="text-xl text-black/90 font-[Inter] mb-8 max-w-2xl mx-auto">
            Electrical & Electronics Engineering Student at Pan-Atlantic
            University
          </p>
          <div className="flex gap-4 justify-center font-[Poppins]">
            <Button size="lg" asChild className="group">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-[Geist] text-3xl font-semibold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="SST Makerspace Initiative"
              description="Led the development of Pan-Atlantic University's innovative makerspace, hosting events like the Motobot Design Challenge to foster hands-on learning and technological innovation among students."
              imagePath={sstMakerspaceImage}
            />
            <ProjectCard
              title="PCB Design: Smart Home Device"
              description="Custom PCB design for home automation system with integrated IoT capabilities and modern power management."
              imagePath={auptexHomieImage}
            />
            <ProjectCard
              title="Solar Energy Solutions"
              description="Comprehensive design and implementation of sustainable energy solutions, focusing on efficient solar power systems for residential and commercial applications."
              imagePath={solarEnergyImage}
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="font-[Inter] group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  imagePath,
}: {
  title: string;
  description: string;
  imagePath: string;
}) => {
  return (
    <div className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="aspect-video rounded-md bg-muted mb-4 overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-[Geist] font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-sm font-[Poppins] text-black/90">{description}</p>
    </div>
  );
};

export default HomePage;
