  //timeline
  const tl = gsap.timeline({})
  tl.from("#nav", {y:-1000, duration:2})
  tl.from("#Ntitle", {opacity:0, duration:1})
  tl.from("#lnk", {x:-50, opacity:0, duration:1, stagger:0.2})