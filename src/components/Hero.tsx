function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <span className="hero__greeting">Hi, my name is</span>
        <h1 className="hero__name">Dimitris Sidiropoulos.</h1>
        <h2 className="hero__title">IT Systems Engineer & Developer.</h2>
        <p className="hero__bio">
          Based in Athens, Greece. I design and maintain secure infrastructure, automate workflows,
          and build software that makes systems run better. Currently expanding into cloud
          technologies and networking.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a href="#experience" className="btn btn--ghost">
            View my work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
