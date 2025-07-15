import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <div className="max-w-[980px] mx-auto px-4">
          <h1 className="text-6xl font-bold leading-tight tracking-tight mb-6">
            Hi, I'm Emmanuel Saviour
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Electrical & Electronics Engineering Student at Pan-Atlantic University
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="group" asChild>
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
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="PCB Design: Smart Home Device"
              description="Custom PCB design for home automation system with integrated IoT capabilities and modern power management."
              imagePath="/src/assets/images/project-1.png"
            />
            <ProjectCard
              title="NepaUpdate System"
              description="Real-time power monitoring and notification system for tracking electricity availability."
              imagePath="/src/assets/images/project-2.png"
            />
            <ProjectCard
              title="Solar Energy Solutions"
              description="Sustainable energy implementation project focusing on efficient solar power systems."
              imagePath="/src/assets/images/project-3.png"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
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
        <div className="w-full h-full bg-secondary/40 flex items-center justify-center text-muted-foreground">
          Image Placeholder
        </div>
      </div>
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default HomePage;