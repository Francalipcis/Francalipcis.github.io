let tl = gsap.timeline();



//animando el titulo
gsap.to('.servicios', {
  duration: 1,

  letterSpacing:3,
})





//animando la entrada
tl.from('.service', {
    duration: 1,

    x:-3000,


    stagger:.5
})




//animando los bordes de neon
tl.to('.service', {
    duration:.5,

    boxShadow: '#56d2ff 0px 0px 30px 1px',
})


tl.to('.thebest', {
  duration:.5,
  
  boxShadow: '#56d2ff 0px 0px 50px 1px',
})