
//Particles
particlesJS(
    {
        "particles": {
          "number": {
            "value": 152,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#d2ffff"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 4.008530152163807,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 78.91476416322726,
            "color": "#ffffff",
            "opacity": 0.24463576890600452,
            "width": 0.7891476416322727
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);

//GS Animations

gsap.from("#particles-js", {opacity:0, duration:2, ease:"power4"})

gsap.from("#logo", {y:50, opacity:0, duration:2})

const PT = gsap.timeline({})
PT.from(".texts", {x:-1000, duration:1})
PT.from("#exp", {opacity:0, duration:2})

  //timeline
const tl = gsap.timeline({})
tl.from("#nav", {y:-1000, duration:2})
tl.from("#Ntitle", {opacity:0, duration:1})
tl.from("#lnk", {x:-50, opacity:0, duration:1, stagger:0.2})





