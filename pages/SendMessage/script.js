
function labelActiveF(){
  const inputsDiv = document.querySelectorAll(".inputs div")
  inputsDiv.forEach(inputDiv => {
    const inputs = inputDiv.querySelectorAll("input")
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        const label = inputDiv.querySelector("label")
        label.classList.add("labelActive")
      })
      
      input.addEventListener("blur", () => {
        if(input.value != ""){ return }
        const label = inputDiv.querySelector("label")
        label.classList.remove("labelActive")
      })

      if(input.value == ""){
        const label = inputDiv.querySelector("label")
        label.classList.remove("labelActive")
      }
    })
  })
}

labelActiveF()

const form = document.querySelector(".contentMessage form")

form.addEventListener("submit", (e)=> {
  e.preventDefault()
  const inputs = document.querySelectorAll(".inputs div input")

  inputs.forEach(input => {
    if(input.id === "yourName"){
      if(input.value.trim() === ""){
        input.style.borderBottom = "3px solid var(--cl-crimson-alert)"
        return
      } else {
        input.style.borderBottom = "3px solid var(--cl-royal-grape)"
      }
    }

    else if(input.id === "yourEmail"){
      const email = input.value.trim()
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(email === "" || !regex.test(email)){
        input.style.borderBottom = "3px solid var(--cl-crimson-alert)"
        input.value = ""
        labelActiveF()
        return
      } else {
        input.style.borderBottom = "3px solid var(--cl-royal-grape)"
      }
    }

    else if(input.id === "yourMessage"){
      if (input.value.trim() === ""){
        input.style.borderBottom = "3px solid var(--cl-crimson-alert)"
        return
      } else {
        input.style.borderBottom = "3px solid var(--cl-royal-grape)"
      }
    }
  })

  const yourName = document.querySelector("#yourName")
  const yourEmail = document.querySelector("#yourEmail")
  const yourMessage = document.querySelector("#yourMessage")

  if(yourEmail.value == "" || yourName.value == "" || yourMessage.value == ""){
    return
  } else {
    const messageSendModal = document.createElement("dialog")
    messageSendModal.classList.add("messageSendModal")
    messageSendModal.innerHTML = `
      <h1>Mensagem Enviada</h1>
      <p>Sua mensagem foi enviada com sucesso!<br>Entrarei em contato o quanto antes.</p>
      <div><button id="sendNewMessage">Enviar outra mensagem</button> <button id="closePage">Fechar</button></div>
      `
    document.body.append(messageSendModal)
    const containerMessage = document.querySelector(".containerMessage")
    const nav = document.querySelector("nav")
    containerMessage.style.filter = "blur(.2rem)"
    nav.style.filter = "blur(.2rem)"

    messageSendModal.showModal()

    messageSendModal.addEventListener("close", () => {
      messageSendModal.remove()
      containerMessage.style.filter = "blur(0)"
      nav.style.filter = "blur(0)"
      yourEmail.value = ""
      yourName.value = ""
      yourMessage.value = ""
      labelActiveF()
    })

    const sendNewMessage = document.querySelector("#sendNewMessage")
    sendNewMessage.addEventListener("click", () => {
      messageSendModal.close()
    })

    const closePage = document.querySelector("#closePage")
    closePage.addEventListener("click", () => {
      window.location.href = "../../index.html"
    })
  }
})