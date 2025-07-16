import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t mt-auto font-[Inter]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-black/90">
            © {new Date().getFullYear()} Emmanuel Saviour. All rights reserved.
          </div>

          {/* Middle - Quick Links */}
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="text-sm text-black/90 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-black/90 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="text-sm text-black/90 hover:text-foreground transition-colors"
            >
              Projects
            </Link>
          </div>

          {/* Right side - Social Links */}
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
              aria-label="LinkedIn Profile"
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