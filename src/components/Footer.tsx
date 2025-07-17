import { Github, Mail, Linkedin } from 'lucide-react'
import { NavLink } from './Navbar';

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
            <NavLink
              to="/" 
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
            >
              Projects
            </NavLink>
          </div>

          {/* Right side - Social Navlinks */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Github Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="NavlinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;