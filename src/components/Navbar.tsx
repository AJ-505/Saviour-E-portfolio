import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export const Navbar = () => {
  return (
    <nav className="border-b font-[Poppins]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold font-[Inter]">
            Emmanuel Saviour
          </Link>
          <div className="flex gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-black/90 hover:text-foreground transition-colors",
        "hover:underline underline-offset-4"
      )}
    >
      {children}
    </Link>
  );
};
