// particlesJS('particles-js', {
//     particles: {
//       number: {
//         value: 265, // Adjust the number of particles
//         density: {
//           enable: true,
//           value_area: 3133, // Spread the particles out for a smoother look
//         },
//       },
//       color: {
//         value: "#ffffff", // White particles for better contrast
//       },
//       shape: {
//         type: "edge", // Use smooth circles
//         stroke: {
//           width: 10,
//           color: "#000000",
//         },
//       },
//       opacity: {
//         value: 0.7, // Slightly transparent particles
//         random: true, // Randomize opacity for variation
//         anim: {
//           enable: true, // Add smooth opacity animation
//           speed: 1,
//           opacity_min: 0.3,
//           sync: false,
//         },
//       },
//       size: {
//         value: 3, // Smaller particle size for smoothness
//         random: true,
//         anim: {
//           enable: true, // Smooth size animation
//           speed: 5,
//           size_min: 0.5,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.5, // Semi-transparent lines
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 2, // Slow speed for a smoother animation
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out", // Particles move out of bounds
//         bounce: false, // No bouncing for a fluid feel
//         attract: {
//           enable: false,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "grab", // Smooth hover effect
//         },
//         onclick: {
//           enable: true,
//           mode: "push", // Add new particles on click
//         },
//         resize: true, // Smooth resizing
//       },
//       modes: {
//         grab: {
//           distance: 200,
//           line_linked: {
//             opacity: 0.7,
//           },
//         },
//         bubble: {
//           distance: 400,
//           size: 10,
//           duration: 2,
//           opacity: 0.8,
//           speed: 3,
//         },
//         repulse: {
//           distance: 150,
//           duration: 0.4,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true, // Adjust for high-resolution displays
//   });

// script.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 9,
      density: { enable: false, value_area: 2838.1318785279545 },
    },
    color: { value: "#1b1e34" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 160,
      random: false,
      anim: { enable: true, speed: 10, size_min: 40, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 35.199999999999996,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function () {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);
// Append value to the display
function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
//   Alternatives to eval():
// function safeEvaluate(expression) {
//     return Function(`'use strict'; return (${expression})`)();
//   }

// Perform scientific operations
function scientific(func) {
  const display = document.getElementById("display");
  let value = parseFloat(display.value);
  if (isNaN(value)) return;

  switch (func) {
    case "sqrt":
      display.value = Math.sqrt(value);
      break;
    case "sin":
      display.value = Math.sin((value * Math.PI) / 180); // Convert to radians
      break;
    case "cos":
      display.value = Math.cos((value * Math.PI) / 180); // Convert to radians
      break;
    case "tan":
      display.value = Math.tan((value * Math.PI) / 180); // Convert to radians
      break;
    case "log":
      display.value = Math.log10(value);
      break;
    case "exp":
      display.value = Math.exp(value);
      break;
    case "pow":
      const base = value;
      const exponent = prompt("Enter the exponent:");
      display.value = Math.pow(base, parseFloat(exponent));
      break;
    default:
      display.value = "Error";
  }
}
