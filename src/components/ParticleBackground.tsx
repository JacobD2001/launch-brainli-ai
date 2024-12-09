import { useEffect } from 'react';

declare const particlesJS: any;

export const ParticleBackground = () => {
  useEffect(() => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#EE2B6C" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#EE2B6C",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div 
      id="particles-js" 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};