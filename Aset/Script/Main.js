//sidebar toggel
const navButton = document.querySelector(".navbar.muncul")
const sidebar= document.querySelector(".sidebar")

navButton.addEventListener("click", function(){
  sidebar.classList.toggle("active")
  navButton.classList.toggle("nav-active")
})

//animasi Hero load
document.addEventListener("DOMContentLoaded",function(){
  const fadeUpHero=document.querySelectorAll(".fade-up-hero")
  fadeUpHero.forEach(function(fade){
    fade.classList.add("fade-up-hero-active")
  })
})


//animas scroll
window.addEventListener("scroll",scrollMarkAnimation)
//fungsi scroll
function scrollMarkAnimation(){
  
  let mark = document.querySelectorAll(".mark")
  let fadeUp = document.querySelectorAll(".fade-up")
  let tinggiLayar = window.innerHeight
  let fadeLeft = document.querySelectorAll(".fade-left")
  let skill = document.querySelectorAll(".skill-main .skill-item .barChart .max")
  let resumeAnimasi = document.querySelectorAll(".resume-line-animation")
  
  //MARK
  mark.forEach(function(mark){
    let jarakAtasElement = mark.getBoundingClientRect().top
    if(jarakAtasElement<tinggiLayar-100){
      setTimeout(function(){
      mark.classList.add("mark-active")
      },350)
      
    }else{
      mark.classList.remove("mark-active")
    }
    
    //mark in menu
    const menuItem = document.querySelectorAll(".menu-item a")
    
    console.log(mark.id)
    menuItem.forEach(function(menu){
      if(menu.getAttribute("href") == ("#"+mark.parentElement.parentElement.id)){
        console.log(menu.getAttribute("href"))
        menu.style.color = "#37B7C3"
      }else{
        menu.style.color = "var(--second)"
      }
    })
  })
  //fadeuo
  fadeUp.forEach(function(fadeUp){
    let jarakAtasElement = fadeUp.getBoundingClientRect().top
    if(jarakAtasElement<tinggiLayar-80){
    fadeUp.classList.add("fade-up-active")
     }else if(jarakAtasElement > tinggiLayar){
    fadeUp.classList.remove("fade-up-active")
     }
  })
  fadeLeft.forEach(function(fade){
    let jarakAtasElement = fade.getBoundingClientRect().top
    if(jarakAtasElement<tinggiLayar-200){
      setTimeout(function(){
        fade.classList.add("fade-left-active")
      },300)
    fade.classList.add("fade-left-active")
     }else if(jarakAtasElement >tinggiLayar) {
    fade.classList.remove("fade-left-active")
     }
  })
  
  //skill animasi
  skill.forEach(function(skill){
    let jarakAtasElement = skill.getBoundingClientRect().top
    if(jarakAtasElement<tinggiLayar-175){
      setTimeout(function(){
        skill.classList.add("max-active")
        // skill.style.animation = "skillAnimation 1s ease-in-out forwards"
      },650)
     }else if(jarakAtasElement > tinggiLayar){
       skill.classList.remove("max-active")
     }
  })
  
  //Resume animatio
  resumeAnimasi.forEach(function(resume){
    let jarakAtasElement = resume.getBoundingClientRect().top
    if(jarakAtasElement<tinggiLayar-150){
      setTimeout(function(){
        resume.classList.add("resume-line-animation-active")
      },500)
    }else if(jarakAtasElement > tinggiLayar){
      resume.classList.remove("resume-line-animation-active")
    }
  })
}

const zoom = document.querySelector(".zoom-foto")
const zoomClose = zoom.querySelector(".close")
const foto = document.querySelectorAll(".foto-item img")
const zoomImg = zoom.querySelector("img")

foto.forEach(function(foto){
  foto.addEventListener("click", e=>{
    zoomImg.setAttribute("src",foto.getAttribute("src"))
    setTimeout(function(){
      zoom.classList.add("zoom-active")
    },200)
    
  })
})
zoomClose.addEventListener("click", e=>{
  zoom.classList.remove("zoom-active")
})