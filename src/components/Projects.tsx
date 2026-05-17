const projects = [
  {
    title: 'Personal Portfolio',
    type: 'Personal Project',
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    description:
      'This portfolio website — built with React and TypeScript, deployed automatically via a CI/CD pipeline with GitHub Actions to GitHub Pages.',
  },
  {
    title: 'Snip — URL Shortener',
    type: 'Personal Project',
    stack: ['Python', 'FastAPI', 'Docker', 'GitHub Actions', 'Render', 'SQLite'],
    description:
      'A minimal, production-ready URL shortener with custom short codes and click analytics. Fully Dockerized with a multi-stage build, pushed to Docker Hub, and deployed on Render. CI/CD pipeline runs pytest on every push to main, builds and pushes the Docker image, then triggers an auto-deploy on Render.',
  },
  {
    title: 'F1 Telemetry Dashboard',
    type: 'Personal Project',
    stack: ['Python', 'Dash', 'FastF1', 'GitHub Actions', 'Render'],
    description:
      'A telemetry comparison dashboard for Formula 1 data. Select drivers and sessions to compare speed, throttle, braking and more side by side. Deployed live on Render. Every push to main triggers a GitHub Actions workflow that installs dependencies and runs the test suite — Render auto-deploys only after CI passes. Branch protection is enforced; direct pushes to main are blocked and PRs require CI to pass before merging.',
  },
  {
    title: 'Homeward Development Website',
    type: 'Professional Project',
    stack: ['TypeScript', 'WordPress'],
    description:
      'Company website for Homeward Development, a real estate firm. Designed and built as the primary digital storefront for their active property portfolio.',
  },
  {
    title: 'Homeward Application ERP',
    type: 'Professional Project',
    stack: ['Glide', 'No-code'],
    description:
      'A company-wide mobile ERP application built with Glide, used daily by the full team. Centralises property tracking, construction progress, contractor data and geolocation — replacing manual spreadsheet workflows.',
  },
  {
    title: 'Legal Document Automation Pipeline',
    type: 'Professional Project',
    stack: ['Python', 'Google Apps Script', 'Automation'],
    description:
      'An end-to-end automation pipeline built for Tilderist. Once a user completed a form, the system automatically triggered a workflow that processed the input and generated the corresponding legal document — improving webapp reliability and response speed for end users.',
  },
  {
    title: 'Legal Compliance Web Scraper',
    type: 'Professional Project',
    stack: ['Python', 'Web Scraping'],
    description:
      'A Python web scraper designed and deployed for Tilderist to identify potential clients whose websites were missing legally required documentation. Generated a qualified lead pipeline and delivered direct business value.',
  },
  {
    title: 'Todos API',
    type: 'Academic Project',
    stack: ['Ruby on Rails', 'Swagger', 'HTTPie'],
    description:
      'A RESTful API for managing to-do lists, built with Ruby on Rails. Tested and documented using HTTPie and Swagger.',
  },
  {
    title: 'CollaboraMate',
    type: 'Academic Project',
    stack: ['Ruby on Rails'],
    description:
      'A Rails platform where people can find and chat with others who share similar hobbies, interests, or courses — facilitating the formation of workgroups and enhancing collaboration.',
  },
]

const typeBadgeClass: Record<string, string> = {
  'Personal Project': 'badge--personal',
  'Professional Project': 'badge--professional',
  'Academic Project': 'badge--academic',
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I have built</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map(project => (
            <div key={project.title} className="project__card">
              <div className="project__header">
                <h3 className="project__title">{project.title}</h3>
                <span className={`badge ${typeBadgeClass[project.type]}`}>{project.type}</span>
              </div>
              <p className="project__description">{project.description}</p>
              <div className="project__stack">
                {project.stack.map(tech => (
                  <span key={tech} className="project__tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
