const experiences = [
  {
    role: 'IT Systems & Software Engineer',
    company: 'Homeward Development',
    location: 'Glyfada, Greece',
    period: 'May 2023 — Present',
    current: true,
    bullets: [
      'Designed and maintained IT infrastructure including NAS file servers and VPN servers supporting 20+ employees across multiple sites.',
      'Administered Microsoft 365 environment with zero reported downtime over a 2-year period.',
      'Built and maintained the company WordPress website serving as the primary digital storefront.',
      'Developed a company-wide mobile app (Glide) replacing manual spreadsheet workflows for the full team.',
    ],
  },
  {
    role: 'IT Systems Technician – Military Service',
    company: 'Hellenic Air Force – General Staff',
    location: 'Cholargos, Athens',
    period: '2025 — March 2026',
    current: false,
    bullets: [
      'Delivered IT support and technical consulting to 500+ military and civilian personnel.',
      'Contributed to the design, installation, and support of enterprise-scale server infrastructure with strict security and high availability requirements.',
      'Maintained and upgraded hardware across a high-demand data centre environment.',
      'Administered mission-critical software systems in compliance with military information security protocols.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'StamatopoulosEftychidou Law Firm',
    location: 'Athens',
    period: 'Nov 2022 — Sep 2024',
    current: false,
    bullets: [
      'Sole IT administrator for a 10+ person law firm, designing the full network and NAS infrastructure.',
      'Designed and deployed VPN infrastructure from scratch (L2TP, IPsec) as sole engineer.',
      'Administered mail servers and domain services maintaining high availability through regular backups.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Tilderist',
    location: 'Athens, Greece',
    period: 'Oct 2021 — Sep 2024',
    current: false,
    bullets: [
      'Built a production automation pipeline (Python + Google Apps Script) for processing and delivering legal documents to clients.',
      'Designed and deployed a Python web scraper to identify potential clients missing legally required website documentation.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Where I have worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker">
                <div className={`timeline__dot ${exp.current ? 'timeline__dot--active' : ''}`} />
                {index < experiences.length - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">
                      {exp.company}
                      <span className="timeline__location"> — {exp.location}</span>
                    </p>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <ul className="timeline__bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="timeline__bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
