gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    backgroundColor:"white",
    delay:1,
    rotate:720,
    borderRadius:100,
   
})
gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    backgroundColor:"white",
    rotate:720,
    borderRadius:100,
    scrollTrigger:{
        trigger:"#page2 #box",
        markers:true,
        scroller:"body",
        start:"top 60%",
        end:"top 10%",
        scrub: 3,

      }
})
gsap.from("#page3 #box",{
    scale:0,
    duration:1,
    backgroundColor:"white",
    delay:1,
    rotate:720,
    borderRadius:100,
   
})

gsap.to("#page5 h1",{
    color:"white",
    transform: "translateX(-80%)",
    scrollTrigger:{
        trigger:"#page5",
        markers:true,
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true,

      }
})


