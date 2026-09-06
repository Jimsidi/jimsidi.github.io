function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact</h2>
        <div className="contact__inner">
          <p className="contact__text">
            <p className="contact__text">
              I'm currently not looking for new opportunities, but I'm always happy to connect.
              Whether you have a question, want to talk tech, or just want to say hi — feel free to
              reach out.
            </p>
          </p>
          <div className="contact__links">
            <a href="mailto:dimsidiropoulos@hotmail.com" className="contact__link">
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">dimsidiropoulos@hotmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dimitris-sidiropoulos-831429288"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">Dimitris Sidiropoulos</span>
            </a>
            <a
              href="https://github.com/Jimsidi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">Jimsidi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
