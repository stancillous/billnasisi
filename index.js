document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger);
  pageFunctions()
  // dynamically set year on the footer
  document.querySelector(".year-wrp").textContent =  new Date().getFullYear()
});



function pageFunctions() {

  gsap.to(".homepage-ord-wrapper", {
    opacity: 1
  })
  gsap.from("header", {
    opacity: 0,
    y: -4
  })
 
    let tl = gsap.timeline()
    tl.from(".animate-section", {
        y: 23,
        stagger: .1,
        opacity: 0,
        ease: "Back.easeOut"
    })
    tl.from(".ill-image-container", {
        opacity: 0,
        y: 13,
        duration: .3,
        ease: "Back.easeOut",
    })

    let imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lt-benefits-wrapper",
        // markers: true,
        scrub: 1,
        start: "top center",
        ease: "Back.easeOut",
        toggleActions: "play pause resume reset",
      },
    });

    imgTl.to(".tps-img", {
        x: 232,
        scale: 4
    })
    let plansTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".available-plans-section",
        // markers: true,
        // scrub: 1,
        start: "top center",
        ease: "Back.easeOut",
        toggleActions: "play pause resume reset",
      },
    });
    plansTl.from(".plans-animation", {y: 12, opacity: 0, stagger: .06})
    plansTl.from(".apw-plan", {y: 6, opacity: 0, stagger: .06})
    
    let mtkTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mtk",
        // markers: true,
        start: "top center",
        ease: "Back.easeOut",
        toggleActions: "play pause resume reset",
      },
    });
    
    mtkTl.from(".mtk-ttl", {
        y: 6,
        opacity: 0,  
        stagger: .04
    })
    
    mtkTl.from(".img", {
        opacity: 0,
    })
    
    let footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section-wrapper",
        start: "top 80%",
        ease: "Back.easeOut",
        toggleActions: "play pause resume reset",
      },
    });
    
    footerTl.from(".fsw-wrapper", {
        y: 34,
        opacity: 0
    })

}