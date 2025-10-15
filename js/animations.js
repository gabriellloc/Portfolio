/**
 * Animação de entrada para todos os elementos
 */

// Ícone do Figma na parte de minhas especialidades
const imgFigmaTec = document.querySelector("#imgFigmaTec")

const observerFigmaTec = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imgFigmaTec.classList.add('ToLeft');
    } else {
      imgFigmaTec.classList.remove('ToLeft');
    }
  })
})

observerFigmaTec.observe(imgFigmaTec)

// Ícone do node na parte de minhas especialidades
const imgNodeTec = document.querySelector("#imgNodeTec")

const observeNodeTec = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      imgNodeTec.classList.add("ToRight")
    } else {
      imgNodeTec.classList.remove("ToRight")
    }
  })
})

observeNodeTec.observe(imgNodeTec)

// Up
const Up = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("Up")
    } else {
      entry.target.classList.remove("Up")
    }
  })
})

const iconsTec = document.querySelectorAll(".iconTec")
iconsTec.forEach(iconTec => {
  Up.observe(iconTec)
})

const project = document.querySelectorAll(".project")
project.forEach(content => {
  Up.observe(content)
})

// UpMedium
const myTec = document.querySelector(".technologies h2")
const myProjectsTitle = document.querySelector(".myProjectsTitle")

const UpMedium = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("UpMedium")
    } else {
      entry.target.classList.remove("UpMedium")
    }
  })
})
UpMedium.observe(myTec)
UpMedium.observe(myProjectsTitle)



const menuItem = document.querySelectorAll(".menuItem")
const footer = document.querySelector("#footer")
const inicio = document.querySelector("#inicio")


menuItem.forEach(MItem => {
  const MenuObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        MItem.classList.add("active")
      } else {
        MItem.classList.remove("active")
      }
    })
  })

  if(MItem.textContent === "Contato"){
    MenuObserver.observe(footer)
  } else if(MItem.textContent === "Início"){
    MenuObserver.observe(inicio)
  }

})