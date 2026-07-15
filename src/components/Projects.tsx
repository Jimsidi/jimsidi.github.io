const projects = [
  {
    title: 'Two-Sided Marketplace Platform',
    type: 'Personal Project',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'Tailwind CSS'],
    description:
      'A two-sided marketplace connecting property owners with vetted professionals across Greece — covering property management, maintenance, and renovation. Professional identity is hidden until post-match, positioning the platform as the essential connector. Built with Next.js 15 App Router, Supabase for auth and database with Row Level Security, and deployed on Vercel.',
  },
  {
    title: 'Dental Practice Management App',
    type: 'Professional Project',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Google Calendar API', 'Vercel'],
    description:
      'A private client project built for a dental practice to streamline daily operations. Features full patient management, appointment booking with Google Calendar integration, automated cleaning reminders, and appointment cancellation handling. Built with Next.js 15 Server Actions, Supabase with Row Level Security, and deployed on Vercel.',
  },
  {
    title: 'Personal Portfolio',
    type: 'Personal Project',
    repo: 'https://github.com/Jimsidi/jimsidi.github.io',
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    description:
      'This portfolio website — built with React and TypeScript, deployed automatically via a CI/CD pipeline with GitHub Actions to GitHub Pages.',
  },
  {
    title: 'Snip — URL Shortener',
    type: 'Personal Project',
    repo: 'https://github.com/Jimsidi/snip-url-shortener',
    stack: ['Python', 'FastAPI', 'Docker', 'GitHub Actions', 'Render', 'SQLite'],
    description:
      'A minimal, production-ready URL shortener with custom short codes and click analytics. Fully Dockerized with a multi-stage build, pushed to Docker Hub, and deployed on Render. CI/CD pipeline runs pytest on every push to main, builds and pushes the Docker image, then triggers an auto-deploy on Render.',
  },
  {
    title: 'Secure Note API — DevSecOps Demo',
    type: 'Personal Project',
    repo: 'https://github.com/Jimsidi/secure-note-api',
    stack: [
      'Python',
      'FastAPI',
      'Docker',
      'GitHub Actions',
      'Bandit',
      'Semgrep',
      'Trivy',
      'OWASP ZAP',
    ],
    description:
      'A production-grade DevSecOps demo integrating security at every stage of the CI/CD pipeline. Automated security pipeline covers unit tests, SAST (Bandit + Semgrep), secret scanning (Gitleaks), dependency auditing (pip-audit), container scanning (Trivy), and live attack simulation with OWASP ZAP (119/119 passing). During development the pipeline caught and fixed 4 real CVEs including high severity Starlette vulnerabilities.',
  },
  {
    title: 'F1 Telemetry Dashboard',
    type: 'Personal Project',
    repo: 'https://github.com/Jimsidi/f1-telemetry-dashboard',
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
              <div className="project__footer">
                <div className="project__stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="project__tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {'repo' in project && project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project__repo"
                    aria-label="View source code"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
