import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import auptexHomieImage from "../assets/auptex-homie-device.png";
import solarEnergyImage from "../assets/solar-energy-design.png";
import sstMakerspaceImage from "../assets/sst-makerspace-design.png";
import { tools, ToolCard } from "./AboutPage";
import {
  FaInstagram,
  FaXTwitter,
  FaResearchgate,
} from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { useCallback, useEffect, useRef } from "react";

// TODO: Optimise images. Chage from png to webp.
const HomePage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const currentTranslateX = useRef<number>(0);
  const contentWidth = useRef<number>(0);

  const scrollSpeed = 2.5; 

  // Copy the same animateScroll and useEffect logic from AboutPage
  const animateScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    currentTranslateX.current -= scrollSpeed;
    if (Math.abs(currentTranslateX.current) >= contentWidth.current) {
      currentTranslateX.current = 0;
    }
    scrollContainerRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, [scrollSpeed]);

  useEffect(() => {
    const measureAndStartScroll = () => {
      if (scrollContainerRef.current) {
        const firstSetOfCards = Array.from(
          scrollContainerRef.current.children
        ).slice(0, tools.length) as HTMLElement[];
        let calculatedContentWidth = 0;
        if (firstSetOfCards.length > 0) {
          firstSetOfCards.forEach((card, index) => {
            calculatedContentWidth += card.offsetWidth;
            if (index < firstSetOfCards.length - 1) {
              calculatedContentWidth += 32;
            }
          });
        }
        contentWidth.current = calculatedContentWidth;
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    };

    const timeoutId = setTimeout(measureAndStartScroll, 100);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      clearTimeout(timeoutId);
    };
  }, [animateScroll]);

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

      {/* Tools I Use */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center font-[Inter]">
            Tools I Use
          </h2>
          <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Scrolling Container */}
            <div className="flex overflow-hidden py-4">
              <div className="flex gap-8 flex-nowrap" ref={scrollContainerRef}>
                {[...tools, ...tools, ...tools].map((tool, index) => (
                  <ToolCard key={`tool-${index}`} {...tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="font-[Geist] text-3xl font-semibold mb-6">
            Connect with Me
          </h2>
          <div className="flex gap-4 items-center justify-center mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://medium.com/@emmanuelsaviour348"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium className="size-7" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/silicon.ink/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="size-7" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://x.com/NerdSavi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="size-7" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.researchgate.net/profile/EmmanuelSaviour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaResearchgate className="size-7" />
              </a>
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
