function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About</h2>
        <div className="about__inner">
          <div className="about__text">
            <p>
              I'm an IT Systems Engineer based in Athens, Greece, with a BSc in Computer Science
              from the University of Piraeus. I enjoy working at the intersection of infrastructure
              and software — designing systems that are secure, reliable, and efficient.
            </p>
            <p>
              My experience spans from being the sole IT administrator for a law firm, to supporting
              500+ personnel at the Hellenic Air Force General Staff, to building internal tools and
              automation pipelines for private companies.
            </p>
            <p>
              Outside of work I'm currently pursuing my CCNA certification, and I enjoy working on
              personal projects that combine infrastructure thinking with software development.
            </p>
          </div>
          <div className="about__details">
            <div className="about__detail-item">
              <span className="about__detail-label">Degree</span>
              <span className="about__detail-value">BSc Computer Science</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">University</span>
              <span className="about__detail-value">University of Piraeus</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">GPA</span>
              <span className="about__detail-value">7.96 / 10</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Location</span>
              <span className="about__detail-value">Athens, Greece</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Languages</span>
              <span className="about__detail-value">Greek (Native), English (B2)</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Status</span>
              <span className="about__detail-value about__detail-value--available">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
