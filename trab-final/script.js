particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 400 } },
      color: { value: "#003df9" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 9.962498886306022,
          opacity_min: 1,
          sync: false
        }
      },
      size: {
        value: 3.5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#5633ff",
        opacity: 0.1,
        width: 2.5
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top-right",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 1 } },
        bubble: { distance: 1500, size: 500, duration: 10, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });