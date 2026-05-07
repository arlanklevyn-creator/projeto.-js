function Contact() {
  return (
    <section id="center">
      <div>
        <h1>Contato</h1>
        <p>
          Entre em contato comigo para oportunidades de colaboração ou apenas para bater um papo sobre tecnologia.
        </p>
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact