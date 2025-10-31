const iconsTech = document.querySelectorAll(".iconTec")

const aboutTec = document.createElement("div")
aboutTec.classList.add("aboutTec")

const aboutTechH3 = document.createElement("h3")
const aboutTechP = document.createElement("p")

iconsTech.forEach(icon => {
  icon.addEventListener("mouseenter", (event) => {
    switch(event.target.id){
      case "iconJavascript":
        aboutTechH3.innerText = "JavaScript"
        aboutTechP.innerText = "É uma linguagem de programação voltada principalmente para o desenvolvimento web, permitindo a criação de páginas dinâmicas."
        break
      case "iconHTML":
        aboutTechH3.innerText = "HTML5"
        aboutTechP.innerText = "É a linguagem usada para estruturar o conteúdo de uma página web. Com ela, é possível definir títulos, parágrafos, imagens, links e todos os elementos que compõem o esqueleto do site."
        break
      case "iconCSS":
        aboutTechH3.innerText = "CSS3"
        aboutTechP.innerText = "É responsável por estilizar as páginas da web. Definindo as cores, fontes, tamanhos, espaçamentos e posicionamento dos elementos."
        break
      case "iconTypescript":
        aboutTechH3.innerText = "TypeScript"
        aboutTechP.innerText = "É um superset do JavaScript que adiciona tipagem estática e recursos avançados. Ele ajuda a evitar erros e melhora a produtividade no desenvolvimento de aplicações complexas."
        break
      case "iconBabel":
        aboutTechH3.innerText = "Babel"
        aboutTechP.innerText = "É um transpilador que converte código JavaScript moderno em versões compatíveis com navegadores antigos."
        break
      case "iconWebpack":
        aboutTechH3.innerText = "Webpack"
        aboutTechP.innerText = "É um empacotador de módulos (module bundler) para JavaScript. Ele organiza, otimiza e agrupa arquivos e dependências, facilitando o carregamento e a performance das aplicações web."
        break
      case "iconNodejs":
        aboutTechH3.innerText = "Node.js"
        aboutTechP.innerText = "É um ambiente de execução JavaScript no lado do servidor. Ele permite criar backends escaláveis e rápidos, aproveitando o poder do JavaScript fora do navegador."
        break
      case "iconReact":
        aboutTechH3.innerText = "React"
        aboutTechP.innerText = "É uma biblioteca JavaScript para construção de interfaces de usuário. Ela facilita o desenvolvimento de componentes reutilizáveis e reativos."
        break
      case "iconFigma":
        aboutTechH3.innerText = "Figma"
        aboutTechP.innerText = "É uma ferramenta online de design de interface (UI/UX). Permite criar protótipos interativos e colaborar em tempo real com outros designers e desenvolvedores."
        break
      case "iconGit":
        aboutTechH3.innerText = "Git"
        aboutTechP.innerText = "É um sistema de controle de versão distribuído. Ele registra o histórico de alterações do código, permitindo colaborar com outras pessoas e gerenciar versões de projetos com segurança."
        break
      case "iconGitHub":
        aboutTechH3.innerText = "GitHub"
        aboutTechP.innerText = "É uma plataforma baseada em Git para hospedagem e colaboração em projetos de software. Permite compartilhar código, gerenciar versões e contribuir com comunidades open source."
        break
    }
  
    aboutTec.append(aboutTechH3, aboutTechP)
    event.target.append(aboutTec)
  })

  icon.addEventListener("mouseleave", () => {
    aboutTec.remove()
    aboutTechH3.innerText = ""
    aboutTechP.innerText = ""
  })

})
