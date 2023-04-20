
//definiendo la timeline
let tl = gsap.timeline();




//animando la barra superior y los lincks
tl.from('.menu-navegacion', {
    duration: 2,

    x: -1700,
    ease:'power4'
})



tl.from('.linck', {
    duration: .5,
    
    y: -200,
    stagger:0.1
})




//animando los titulos 
tl.from('#title', {
    delay:.5,
    duration:1,
    
    y:50,
    opacity:0
})

tl.from('#subTitle', {
    duration:.5,
    
    y:50,
    opacity:0
})

tl.from('#button-contact', {
    duration:.5,
    opacity:0
})





//animando el logo junto con el quienes somos
gsap.registerPlugin(ScrollTrigger);

let infoScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.quienesSomos',
        start: 'top +=440',
        
        ease:'power1'
    },
})
infoScrollTimeline.from('#logo', {
    duration: 2.5,
    
    opacity:0,
    x:-300,
    
})



//animando la seccion de contactos
let contactScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#contacto',
        start: 'top +=250',

    }
})

contactScrollTimeline.from('.card', {
    duration: .5,

    opacity:0,
    y:-100,
    ease:'power4',

    stagger:0.3
})


let pricesScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#servicesContainer',
        start: 'top 500',
    }
})


pricesScrollTimeline.to('#servicesContainer', {
    duration:.3,

    color: 'white',
    letterSpacing: 3,
    
    backgroundColor: 'black',
    border:'#009dff solid 4px',
})