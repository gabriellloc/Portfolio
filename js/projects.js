let screenWidth = window.innerWidth
console.log(screenWidth)
window.addEventListener("resize", () => {
	screenWidth = window.innerWidth
	console.log(screenWidth)
})

const allProjects = document.querySelectorAll(".project")

const contentProjectsDiv = document.querySelectorAll(".contentProjects > div")

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

  const projectA = entries.querySelector("button")
  projectA.disabled = 'true'
  projectA.addEventListener("mouseenter", (event) => {
    const desc = entries.querySelector(".hiddenDesc")
    desc.style.height = desc.scrollHeight + "px"
    desc.style.opacity = "1"

    projectA.textContent = "Conhecer o Projeto"
    projectA.classList.add("meetProject")

    
    projectA.removeAttribute("disabled")
  })

	if(screenWidth < 900){
		entries.addEventListener("click", (event) => {
			const desc = entries.querySelector(".hiddenDesc")
			desc.style.height = desc.scrollHeight + "px"
			desc.style.opacity = "1"
	
			projectA.textContent = "Conhecer o Projeto"
			projectA.classList.add("meetProject")
	
			
			projectA.removeAttribute("disabled")
		})
	}

  entries.addEventListener("mouseleave", () => {
    const desc = entries.querySelector(".hiddenDesc")
    // desc.classList.add("hiddenDesc")
    desc.style.height = "0"
    desc.style.opacity = "0"

    projectA.textContent = "Mais informações"
    projectA.classList.remove("meetProject")
    projectA.disabled = 'true'
  })
})

contentProjectsDiv.forEach(div => {
  div.style.height = (29.6875) + "rem"
})