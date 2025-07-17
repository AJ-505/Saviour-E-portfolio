import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

// TODO: Add accurate information (mail, github(will probably be replaced)) and content to remove the lorem ipsums
export default function AboutPage() {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 font-[Geist]">Connect</h3>
            <div className="flex flex-col gap-2 font-[Inter]">
              <Button variant="outline" className="justify-start gap-2" asChild>
                <a href="mailto:example@email.com">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="justify-start gap-2" asChild>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="justify-start gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/emmanuel-saviour-a9812436b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-4 w-4 text-black/88" />
                  LinkedIn
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
            title="PCB Design"
            description="Experienced in designing complex PCBs for various applications including IoT and automation systems."
          />
          <SkillCard
            title="Electrical Engineering"
            description="Strong foundation in electrical systems, power electronics, and circuit design."
          />
          <SkillCard
            title="Project Management"
            description="Led multiple successful projects including the SST Makerspace initiative."
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 font-[Inter]">Education</h2>
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
