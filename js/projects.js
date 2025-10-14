const allProjects = document.querySelectorAll(".project")

allProjects.forEach(entries => {

  entries.addEventListener("mouseenter", () => {
    const iconsLight = entries.querySelectorAll(".iconsProjectBg img")
    iconsLight.forEach(icon => {
      icon.style.filter = "saturate(3)"
    })
  })

  entries.addEventListener("mouseleave", () => {
    const iconsLight = entries.querySelectorAll(".iconsProjectBg img")
    iconsLight.forEach(icon => {
      icon.style.filter = "saturate(1)"
    })
  })

  const projectA = entries.querySelector("a")
  projectA.addEventListener("mouseenter", (event) => {
    const desc = entries.querySelector(".hiddenDesc")
    console.log(desc)
    desc.style.height = "100%"
    desc.style.opacity = "1"

    projectA.textContent = "Conhecer o Projeto"
    projectA.classList.add("meetProject")

  })

  entries.addEventListener("mouseleave", () => {
    const desc = entries.querySelector(".hiddenDesc")
    // desc.classList.add("hiddenDesc")
    desc.style.opacity = "0"
    desc.style.height = "0"

    projectA.textContent = "PASSE O MOUSE AQUI"
    projectA.classList.remove("meetProject")
  })
})