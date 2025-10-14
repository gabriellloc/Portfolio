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
        aboutTechP.innerText = "JavaScript é uma linguagem de programação voltada principalmente para o desenvolvimento web. Ela permite criar páginas dinâmicas e interativas, controlando o comportamento dos elementos no navegador."
        break
      case "iconHTML":
        aboutTechH3.innerText = "HTML5"
        aboutTechP.innerText = "HTML (HyperText Markup Language) é a linguagem usada para estruturar o conteúdo de uma página web. Com ela, é possível definir títulos, parágrafos, imagens, links e todos os elementos que compõem o esqueleto do site."
        break
      case "iconCSS":
        aboutTechH3.innerText = "CSS3"
        aboutTechP.innerText = "CSS (Cascading Style Sheets) é responsável por estilizar as páginas da web. Define cores, fontes, tamanhos, espaçamentos e posicionamento dos elementos, tornando o layout visualmente atraente."
        break
      case "iconTypescript":
        aboutTechH3.innerText = "TypeScript"
        aboutTechP.innerText = "TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados. Ele ajuda a evitar erros e melhora a produtividade no desenvolvimento de aplicações complexas."
        break
      case "iconBabel":
        aboutTechH3.innerText = "Babel"
        aboutTechP.innerText = "Babel é um transpilador que converte código JavaScript moderno em versões compatíveis com navegadores antigos. Essencial para garantir compatibilidade e usar os recursos mais recentes da linguagem."
        break
      case "iconWebpack":
        aboutTechH3.innerText = "Webpack"
        aboutTechP.innerText = "Webpack é um empacotador de módulos (module bundler) para JavaScript. Ele organiza, otimiza e agrupa arquivos e dependências, facilitando o carregamento e a performance das aplicações web."
        break
      case "iconNodejs":
        aboutTechH3.innerText = "Node.js"
        aboutTechP.innerText = "Node.js é um ambiente de execução JavaScript no lado do servidor. Ele permite criar backends escaláveis e rápidos, aproveitando o poder do JavaScript fora do navegador."
        break
      case "iconReact":
        aboutTechH3.innerText = "React"
        aboutTechP.innerText = "React é uma biblioteca JavaScript para construção de interfaces de usuário. Criada pelo Facebook, ela facilita o desenvolvimento de componentes reutilizáveis e reativos."
        break
      case "iconFigma":
        aboutTechH3.innerText = "Figma"
        aboutTechP.innerText = "Figma é uma ferramenta online de design de interface (UI/UX). Permite criar protótipos interativos e colaborar em tempo real com outros designers e desenvolvedores."
        break
      case "iconGit":
        aboutTechH3.innerText = "Git"
        aboutTechP.innerText = "Git é um sistema de controle de versão distribuído. Ele registra o histórico de alterações do código, permitindo colaborar com outras pessoas e gerenciar versões de projetos com segurança."
        break
      case "iconGitHub":
        aboutTechH3.innerText = "GitHub"
        aboutTechP.innerText = "GitHub é uma plataforma baseada em Git para hospedagem e colaboração em projetos de software. Permite compartilhar código, gerenciar versões e contribuir com comunidades open source."
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
