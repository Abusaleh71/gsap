var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor") 

main.addEventListener("mousemove", function(xyz){
  gsap.to(cursor,{
    x: xyz.x,
    y: xyz.y,
    duration : 1,
    ease: "back.out(1.7)",

  })
})