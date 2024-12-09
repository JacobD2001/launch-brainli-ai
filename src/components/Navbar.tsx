import { useState, useEffect } from "react";
import { Menu, X, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Navigation className="h-8 w-8 text-[#EE2B6C]" />
            <span className="ml-2 text-xl font-bold">microai-lab</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors"
            >
              What we do
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-white/80 hover:text-white transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white"
            >
              Book A Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm absolute top-20 left-0 right-0 p-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                What we do
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Team
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white w-full"
              >
                Book A Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};