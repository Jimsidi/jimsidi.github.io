const skillGroups = [
  {
    category: 'Programming & Scripting',
    skills: ['Python', 'JavaScript', 'Java', 'C#', 'Bash', 'Google Apps Script'],
  },
  {
    category: 'Systems & Infrastructure',
    skills: ['Windows Server', 'Linux', 'NAS', 'Microsoft 365', 'VPN (IPsec, L2TP)'],
  },
  {
    category: 'Networking',
    skills: [
      'TCP/IP',
      'IPsec',
      'L2TP',
      'DNS',
      'DHCP',
      'Network Troubleshooting',
      'CCNA (in progress)',
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'AWS (in progress)'],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Web & Tools',
    skills: ['WordPress', 'React', 'REST APIs', 'Web Scraping', 'Glide'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {skillGroups.map(group => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.skills.map(skill => (
                  <li key={skill} className="skills__item">
                    <span className="skills__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
