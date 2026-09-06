import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <motion.span
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, my name is
        </motion.span>
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dimitris Sidiropoulos.
        </motion.h1>
        <motion.h2
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ICT Administrator & Systems Engineer.
        </motion.h2>
        <motion.p
          className="hero__bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Based in Athens, Greece. Currently working in maritime IT at Angelakos (Hellas) S.A.,
          managing onshore infrastructure and vessel IT operations. I design secure systems,
          automate workflows, and build software that makes operations run better.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a href="#experience" className="btn btn--ghost">
            View my work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
