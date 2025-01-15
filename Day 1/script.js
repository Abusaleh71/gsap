gsap.to("#box1",{
x:900,
backgroundColor:"chartreuse",
borderRadius:100,
rotate:360,
duration:2,
delay:1,
repeat:-1,
yoyo:1,
})

gsap.from("#box2",{
x:900,
backgroundColor:"red",
borderRadius:100,
rotate:360,
duration:2,
delay:1,
repeat:-1,
yoyo:1,
})


gsap.to("#box3",{
x:900,
backgroundColor:"yellow",
borderRadius:100,
rotate:360,
duration:2,
delay:1,
repeat:-1,
yoyo:1,
})

gsap.from("h1",{
    y:50,
    stagger:0.5,
    opacity:0,
    duration:1,
    
})

//Variable using
var tl = gsap.timeline()

tl.to("#box4",{
    x:500,
    delay:1
})
tl.to("#box5",{
    x:500,
    delay:1
})
tl.to("#box6",{
    x:500,
    delay:1
})