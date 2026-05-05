import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Home() {
  return (
    <section id="home" className="home">

      <div className="hero">
        <img src={heroImg} className="base" alt="Imagem principal" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      <div className="content">
        <h1>Olá, eu sou Arlan 👋</h1>

        <h2>Desenvolvedor Front-end</h2>

        <p>
          Crio interfaces modernas, responsivas e focadas na melhor experiência
          do usuário utilizando tecnologias como React e JavaScript.
        </p>

        <div className="buttons">
          <a href="#about" className="btn">
            Sobre mim
          </a>

          <a href="#projects" className="btn secondary">
            Ver projetos
          </a>
        </div>
      </div>

    </section>
  )
}