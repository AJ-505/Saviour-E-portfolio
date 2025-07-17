import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
// import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
