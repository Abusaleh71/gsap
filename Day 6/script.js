function breaktxt(){
    var h1 = document.querySelector("h1")    
    var h1Text = h1.textContent
    var splittedTxt = h1Text.split("")
    var clutter = ""
    splittedTxt.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    h1.innerHTML = clutter

}
breaktxt()


gsap.from("h1 span", {
    y:80,
    opacity : 0,
    duration :1,
    stagger: .15,
    rotate:180,
    scale:20,
    color: "green",
   
})