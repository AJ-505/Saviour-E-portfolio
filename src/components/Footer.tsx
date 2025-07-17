import { Mail } from "lucide-react";
import { NavLink } from "./Navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t mt-auto font-[Inter]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-black/90">
            © {new Date().getFullYear()} Emmanuel Saviour. All rights reserved.
          </div>

          {/* Middle - Quick Navlinks */}
          <div className="flex gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>

          {/* Right side - Social Navlinks */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Github Profile"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-saviour-a9812436b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="mailto:saviour-emmanuel@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
