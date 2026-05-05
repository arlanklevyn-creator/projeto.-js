function About() {
  return (
    <section id="about" style={{ textAlign: "center", padding: "40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Sobre Mim
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          Sou um desenvolvedor apaixonado por tecnologia, focado em criar
          interfaces modernas e funcionais. Tenho experiência com React e
          desenvolvimento web, sempre buscando aprender novas ferramentas
          e melhorar minhas habilidades.
        </p>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ marginBottom: "15px" }}>Habilidades</h2>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>⚛️ React</li>
            <li>🟨 JavaScript</li>
            <li>🌐 HTML & CSS</li>
            <li>🟩 Node.js</li>
            <li>🔧 Git</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About