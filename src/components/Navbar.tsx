import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useCalendar } from "@/hooks/useCalendar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useCalendar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = ["services", "process", "work", "team"].map(id => ({
        id,
        element: document.getElementById(id),
      }));

      // Find the current section
      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getMenuItemClass = (id: string) => {
    return `transition-colors ${
      activeSection === id
        ? "text-[#EE2B6C]"
        : "text-white/80 hover:text-white"
    }`;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src="/logo.svg" alt="microai-lab" className="h-8" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className={getMenuItemClass("services")}
              >
                What we do
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className={getMenuItemClass("process")}
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={getMenuItemClass("work")}
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={getMenuItemClass("team")}
              >
                Team
              </button>
              <Button
                className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white"
                data-cal-namespace="free-ai-audit-implement-ai-in-your-business"
                data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
                data-cal-config='{"layout":"month_view"}'
              >
                Book A Call
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className={getMenuItemClass("services")}
              >
                What we do
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className={getMenuItemClass("process")}
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={getMenuItemClass("work")}
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={getMenuItemClass("team")}
              >
                Team
              </button>
              <Button
                className="bg-[#EE2B6C] hover:bg-[#EE2B6C]/90 text-white w-full"
                data-cal-namespace="free-ai-audit-implement-ai-in-your-business"
                data-cal-link="jakubdzikowski/free-ai-audit-implement-ai-in-your-business"
                data-cal-config='{"layout":"month_view"}'
              >
                Book A Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};