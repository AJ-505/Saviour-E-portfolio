import { useEffect, useRef, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaResearchgate,
} from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

import {
  SiKicad,
  SiAltiumdesigner,
  SiProteus,
  SiAutocad,
  SiBlender,
  SiCanva,
  SiNotion,
  SiMiro,
  SiPowers,
  SiTableau,
  SiMedium,
} from "react-icons/si";

// 1. Expand the tools array with new entries and categories
const tools = [
  {
    name: "Eagle CAD",
    category: "PCB Design",
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    name: "KiCad",
    category: "PCB Design",
    color: "bg-green-100 dark:bg-green-900/20",
  },
  {
    name: "Altium Designer",
    category: "PCB Design",
    color: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    name: "Proteus",
    category: "Simulation",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
  },
  {
    name: "Saturn PCB Toolkit",
    category: "PCB Utility",
    color: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    name: "Siemens Hyperlynx",
    category: "Simulation",
    color: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  {
    name: "STM32CubeMX",
    category: "Embedded Dev",
    color: "bg-red-100 dark:bg-red-900/20",
  },
  {
    name: "Power Supply Designer II",
    category: "Electronics",
    color: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  {
    name: "Arduino",
    category: "Electronics",
    color: "bg-teal-100 dark:bg-teal-900/20",
  },
  {
    name: "Raspberry Pi",
    category: "Electronics",
    color: "bg-red-100 dark:bg-red-900/20",
  },
  {
    name: "Medium",
    category: "Content Creation",
    color: "bg-gray-100 dark:bg-gray-700/20",
  },
  {
    name: "Canva",
    category: "Design",
    color: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    name: "Notion",
    category: "Productivity",
    color: "bg-gray-200 dark:bg-gray-800/20",
  },
  {
    name: "Miro",
    category: "Collaboration",
    color: "bg-blue-200 dark:bg-blue-800/20",
  },
  {
    name: "AutoCAD",
    category: "CAD",
    color: "bg-cyan-100 dark:bg-cyan-900/20",
  },
  {
    name: "Fusion", // Assuming Fusion 360, no specific Si icon, will use fallback
    category: "CAD",
    color: "bg-purple-200 dark:bg-purple-800/20",
  },
  {
    name: "PowerBI",
    category: "Data Visualization",
    color: "bg-orange-200 dark:bg-orange-800/20",
  },
  {
    name: "Tableau",
    category: "Data Visualization",
    color: "bg-lime-100 dark:bg-lime-900/20",
  },
  {
    name: "Filmora", // No specific Si icon, will use fallback
    category: "Video Editing",
    color: "bg-fuchsia-100 dark:bg-fuchsia-900/20",
  },
  {
    name: "Blender",
    category: "3D Modeling",
    color: "bg-orange-300 dark:bg-orange-900/20",
  },
];

// 2. Create a mapping from tool name to its React Icon component
const toolIcons: { [key: string]: React.ElementType } = {
  KiCad: SiKicad,
  "Altium Designer": SiAltiumdesigner,
  Proteus: SiProteus,
  AutoCAD: SiAutocad,
  Blender: SiBlender,
  Canva: SiCanva,
  Notion: SiNotion,
  Miro: SiMiro,
  PowerBI: SiPowers, // Assuming SiPowers is for PowerBI, please double-check your react-icons/si import
  Tableau: SiTableau,
  Medium: SiMedium,
};

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const currentTranslateX = useRef<number>(0);
  const contentWidth = useRef<number>(0); // Width of one full set of cards

  const scrollSpeed = 2.5; // Pixels per frame

  // Function to start the animation loop
  const animateScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    // Move content left
    currentTranslateX.current -= scrollSpeed;

    // If the content has scrolled past one full set, reset its position
    // We add 1 to contentWidth to ensure it fully moves past the boundary before resetting
    if (Math.abs(currentTranslateX.current) >= contentWidth.current) {
      currentTranslateX.current = 0; // Reset to start
    }

    // Apply the new position
    scrollContainerRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;

    // Request the next frame
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, [scrollSpeed]);

  // Effect to measure content width and start/stop animation
  useEffect(() => {
    const measureAndStartScroll = () => {
      if (scrollContainerRef.current) {
        // Calculate the width of one original set of cards
        // IMPORTANT: Ensure all ToolCard elements are rendered before measuring.
        // A direct measure of the actual rendered elements is more robust
        // than hardcoding `singleCardWidth` if card widths might vary.

        // Get the first set of cards to measure
        const firstSetOfCards = Array.from(
          scrollContainerRef.current.children
        ).slice(0, tools.length) as HTMLElement[];

        let calculatedContentWidth = 0;
        if (firstSetOfCards.length > 0) {
          firstSetOfCards.forEach((card, index) => {
            calculatedContentWidth += card.offsetWidth;
            // Add gap for all but the last card in the set
            if (index < firstSetOfCards.length - 1) {
              calculatedContentWidth += 32; // gap-8 = 32px
            }
          });
          // For some reason, the flex container's last item doesn't always have the gap on its right
          // if it's the last item in a row before wrapping, but since we use flex-nowrap,
          // it usually adds the gap. Let's re-verify this calculation by observing.
          // A common alternative is to get `scrollWidth` of the *first* child container that holds `tools.length` elements.
        } else {
          // Fallback if elements aren't immediately available for measurement
          // Using your previous hardcoded values
          const singleCardWidth = 288; // w-72 = 72 * 4 = 288px
          const gapWidth = 32; // gap-8 = 8 * 4 = 32px
          calculatedContentWidth = tools.length * (singleCardWidth + gapWidth);
        }

        contentWidth.current = calculatedContentWidth;

        // Start the animation
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    };

    // Use setTimeout to ensure DOM is rendered before measuring widths
    const timeoutId = setTimeout(measureAndStartScroll, 100); // Small delay

    // Cleanup: Cancel the animation frame and timeout when the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      clearTimeout(timeoutId);
    };
  }, [animateScroll]); // Dependency on tools.length to remeasure if tool count changes

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 font-[Geist]">About Me</h1>
          <p className="text-black max-w-2xl mx-auto font-[Poppins]">
            Electrical & Electronics Engineering Student passionate about
            innovation and technology
          </p>
        </section>

        {/* Bio Section */}
        <section className="grid md:grid-cols-[2fr,1fr] gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 font-[Inter]">
              Biography
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 font-[Poppins] text-black/90">
              <p>
                As an Electrical & Electronics Engineering student at
                Pan-Atlantic University, I am driven by a passion for innovation
                and technology. My academic journey has equipped me with a
                strong foundation in electrical systems, circuit design, and
                power electronics. I thrive on transforming theoretical
                knowledge into practical solutions, constantly seeking
                opportunities to apply my skills in real-world scenarios.
              </p>
              <p>
                My experience extends to leading successful projects, including
                the SST Makerspace initiative, where I fostered a collaborative
                environment for technological exploration. I am particularly
                adept at PCB design, utilizing tools like Eagle CAD, KiCad, and
                Altium Designer to bring complex electronic concepts to life. My
                goal is to contribute to advancements in IoT, automation, and
                sustainable energy solutions.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 font-[Geist]">
                Connect
              </h3>
              <div className="flex flex-col gap-2 font-[Inter]">
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a href="mailto:emmanuel.saviour@example.com">
                    {" "}
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://github.com/Savvy-robot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://medium.com/@emmanuelsaviour348"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMedium className="h-4 w-4" />
                    Medium
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/emmanuel-saviour-a9812436b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/silicon.ink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://x.com/NerdSavi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="h-4 w-4" />X (Twitter)
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href="https://www.researchgate.net/profile/EmmanuelSaviour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaResearchgate className="h-4 w-4" />
                    ResearchGate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 font-[Inter]">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="PCB Design & Electronics"
              description="Expert in designing complex PCBs using industry-standard tools like Eagle CAD, KiCad, and Altium Designer. Experienced in IoT device development and automation systems."
            />
            <SkillCard
              title="Power Systems & Energy"
              description="Strong foundation in power electronics, sustainable energy solutions, and smart inverter design. Developed innovative power monitoring systems."
            />
            <SkillCard
              title="Project Leadership"
              description="Successfully led the SST Makerspace initiative, organized technical workshops, and managed cross-functional teams in various engineering projects."
            />
          </div>
        </section>

        {/* Research & Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 font-[Inter]">
            Research & Publications
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-2 font-[Inter]">
                Smart Inverter Design Implementation
              </h3>
              <p className="text-sm text-black/90 font-[Poppins] mb-4">
                Research focused on developing efficient and intelligent power
                management solutions for sustainable energy systems.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-[Poppins]">
                  Power Electronics
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-[Poppins]">
                  Sustainability
                </span>
              </div>
            </div>
            <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-2 font-[Inter]">
                SST Makerspace Initiative
              </h3>
              <p className="text-sm text-black/90 font-[Poppins] mb-4">
                Led the establishment of Pan-Atlantic University's innovative
                makerspace, including the successful implementation of the
                Motobot Design Challenge.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-100 text-purple-950 px-3 py-1.5 rounded-full font-[Poppins]">
                  Innovation
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full font-[Poppins]">
                  Leadership
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 font-[Inter]">
            Featured Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-2 font-[Inter]">
                Technical Innovation
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-black/90 font-[Poppins] flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-primary mt-2"></span>
                  Designed and implemented the PowerXense monitoring platform
                </li>
                <li className="text-sm text-black/90 font-[Poppins] flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-primary mt-2"></span>
                  Developed the Auptex Homie Device for smart home automation
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-2 font-[Inter]">Leadership</h3>
              <ul className="space-y-2">
                <li className="text-sm text-black/90 font-[Poppins] flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-primary mt-2"></span>
                  Spearheaded the SST Makerspace initiative at Pan-Atlantic
                  University
                </li>
                <li className="text-sm text-black/90 font-[Poppins] flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-primary mt-2"></span>
                  Led multiple successful technical projects and research
                  initiatives
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16 overflow-hidden">
          <h2 className="text-2xl font-semibold mb-8 font-[Inter]">
            Tools & Technologies
          </h2>
          <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Scrolling Container */}
            <div className="flex overflow-hidden py-4">
              <div
                ref={scrollContainerRef}
                className="flex gap-8 flex-nowrap"
                style={{
                  transform: `translateX(${currentTranslateX.current}px)`,
                  willChange: "transform",
                }}
              >
                {/* Duplicate the content multiple times for seamless looping */}
                {[...tools, ...tools, ...tools].map((tool, index) => (
                  <ToolCard key={`tool-${index}`} {...tool} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 font-[Inter]">
            Education
          </h2>
          <div className="border hover:border-primary/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 font-[Inter]">
              Pan-Atlantic University
            </h3>
            <p className="text-black/90 mb-1 font-[Poppins]">
              B.Eng. Electrical and Electronics Engineering
            </p>
            <p className="text-sm text-black/90 font-[Poppins]">
              Expected Graduation: 2027
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="font-[Inter] text-center mb-16">
          <Button size="lg" asChild>
            <Link to="/projects" className="group">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}

function SkillCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
      <h3 className="font-semibold mb-2 font-[Inter]">{title}</h3>
      <p className="text-sm text-black/90 font-[Poppins]">{description}</p>
    </div>
  );
}

function ToolCard({
  name,
  category,
  color,
}: {
  name: string;
  category: string;
  color: string;
}) {
  const IconComponent = toolIcons[name];

  return (
    <div
      className={`flex-none w-72 rounded-xl p-6 transition-all hover:scale-100 hover:shadow-lg group ${color} backdrop-blur-sm`} // Changed hover:scale-105 to hover:scale-100 and removed transform, it was causing blurriness
    >
      <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-black/20 mb-4 flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
        {IconComponent ? (
          <IconComponent className="h-8 w-8 text-gray-800 dark:text-white" />
        ) : (
          <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center text-xs text-primary font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)}{" "}
            {/* Fallback: Initials */}
          </div>
        )}
      </div>
      <h3 className="font-semibold mb-1 font-[Inter] group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-black/70 dark:text-white/70 font-[Poppins]">
        {category}
      </p>
    </div>
  );
}

export { tools, ToolCard };
