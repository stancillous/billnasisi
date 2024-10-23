document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger);
  pageFunctions()
  faqs()
  // dynamically set year on the footer
  document.querySelector(".year-wrp").textContent =  new Date().getFullYear()
});


// function for the 'faq' section
function faqs(){
       let question = document.querySelectorAll(".question");

       question.forEach((question) => {
         question.addEventListener("click", (event) => {
           const active = document.querySelector(".question.active");
           if (active && active !== question) {
             active.classList.toggle("active");
             active.nextElementSibling.style.maxHeight = 0;
           }
           question.classList.toggle("active");
           const answer = question.nextElementSibling;
           if (question.classList.contains("active")) {
             answer.style.maxHeight = answer.scrollHeight + "px";
           } else {
             answer.style.maxHeight = 0;
           }
         });
       });
}

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

    /**animation for the part that has info that look like FAQs */
     let dashboardFeaturesTl = gsap.timeline({
       scrollTrigger: {
         trigger: ".faq-section",
         start: "top center",
         ease: "Back.easeOut",
         toggleActions: "play pause resume reset",
       },
     });

     dashboardFeaturesTl.from(".faq-wrp", {
      opacity: 0,
      y: 34
     })


    /**animation for the plans/pricing section */
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
    
    /**animation for the image showing different payment methods/features */
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
    
    /**animation for the footer */
    let footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section-wrapper",
        start: "top 80%",
        ease: "Back.easeOut",
        toggleActions: "play pause resume reset",
      },
    });
    
    // footerTl.from(".fsw-wrapper", {
    //     y: 34,
    //     opacity: 0
    // })

}