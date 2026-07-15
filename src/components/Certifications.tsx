const certifications = [
  {
    title: 'CCNA — Cisco Certified Network Associate',
    issuer: 'Cisco',
    date: 'In progress',
    status: 'in-progress',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'January 2026',
    status: 'completed',
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    date: 'November 2025',
    status: 'completed',
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'ACTA & Microsoft',
    date: 'September 2021',
    status: 'completed',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Audax Security',
    date: 'April 2021',
    status: 'completed',
  },
]

function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label">Continuous learning</p>
        <h2 className="section-title">Certifications</h2>
        <div className="certs__grid">
          {certifications.map(cert => (
            <div key={cert.title} className="cert__card">
              <div className="cert__top">
                <span className={`cert__status cert__status--${cert.status}`}>
                  {cert.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </span>
                <span className="cert__date">{cert.date}</span>
              </div>
              <h3 className="cert__title">{cert.title}</h3>
              <p className="cert__issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
