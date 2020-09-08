import React from 'react'
import Particles from "react-tsparticles";

class ParticleComponent extends React.Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#f4f2f3",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#f62356",
            },
            links: {
              color: "#ffffff",
              distance: 600,
              enable: false,
              opacity: 0.5,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: true,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                value_area: 1894.0440207397826,
              },
              value: 20,
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 24.036150370156733,
              anim: {
                enable: false,
                speed: 4.869141813755329,
                size_min: 0.1,
                sync: false,
              }
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticleComponent