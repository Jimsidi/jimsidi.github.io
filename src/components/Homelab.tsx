const services = [
  {
    name: 'Nginx Proxy Manager',
    url: 'npm.home',
    description: 'Reverse proxy with SSL termination for all internal services.',
    status: 'running',
  },
  {
    name: 'Gitea',
    url: 'gitea.home',
    description: 'Self-hosted Git server for private repositories and version control.',
    status: 'running',
  },
  {
    name: 'Grafana',
    url: 'grafana.home',
    description: 'Infrastructure dashboards and visualization for metrics.',
    status: 'running',
  },
  {
    name: 'Prometheus',
    url: 'prometheus.home',
    description: 'Metrics collection and alerting for all running services.',
    status: 'running',
  },
  {
    name: 'Portainer',
    url: 'portainer.home',
    description: 'Docker container management UI for the Ubuntu Server VM.',
    status: 'running',
  },
  {
    name: 'Uptime Kuma',
    url: 'uptime.home',
    description: 'Self-hosted uptime monitoring and status page for all services.',
    status: 'running',
  },
  {
    name: 'Pi-hole',
    url: 'pihole.home',
    description: 'Network-wide ad blocking and local DNS server. Planned for the Ubuntu Server VM.',
    status: 'planned',
  },
]

const hardware = [
  { label: 'CPU', value: 'AMD Ryzen 3 2200G (4c/4t)' },
  { label: 'RAM', value: '32GB Crucial DDR4 (2x16GB)' },
  { label: 'Motherboard', value: 'ASRock AB350m Pro4' },
  { label: 'OS Drive', value: '240GB Kingston M.2' },
  { label: 'Storage', value: '1TB Samsung 870 Evo + 120GB Kingston SSD' },
  { label: 'PSU', value: 'Corsair CX450M 450W' },
]

const stack = [
  { label: 'Hypervisor', value: 'Proxmox VE' },
  { label: 'VMs', value: 'Ubuntu Server, Windows Server 2022' },
  { label: 'Containers', value: 'Docker (via Portainer)' },
  { label: 'Reverse Proxy', value: 'Nginx Proxy Manager' },
  { label: 'Monitoring', value: 'Grafana + Prometheus' },
  { label: 'Security', value: 'SSH key auth, hardened config' },
]

function Homelab() {
  return (
    <section id="homelab">
      <div className="container">
        <p className="section-label">Self-hosted infrastructure</p>
        <h2 className="section-title">Homelab</h2>

        <p className="homelab__intro">
          A personal homelab running on bare metal with Proxmox as the hypervisor, hosting an Ubuntu
          Server VM running Docker containers and a Windows Server 2022 VM. All services are
          accessible via internal DNS and reverse proxied through Nginx Proxy Manager.
        </p>

        <div className="homelab__grid">
          <div className="homelab__col">
            <h3 className="homelab__col-title">Services</h3>
            <div className="homelab__services">
              {services.map(service => (
                <div key={service.name} className="homelab__service">
                  <div className="homelab__service-header">
                    <span className="homelab__service-name">{service.name}</span>
                    <span
                      className={`homelab__service-status homelab__service-status--${service.status}`}
                    >
                      <span className="homelab__status-dot" />
                      {service.status}
                    </span>
                  </div>
                  <p className="homelab__service-desc">{service.description}</p>
                  <span className="homelab__service-url">{service.url}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="homelab__col">
            <h3 className="homelab__col-title">Stack</h3>
            <div className="homelab__details">
              {stack.map(item => (
                <div key={item.label} className="homelab__detail-item">
                  <span className="homelab__detail-label">{item.label}</span>
                  <span className="homelab__detail-value">{item.value}</span>
                </div>
              ))}
            </div>

            <h3 className="homelab__col-title" style={{ marginTop: '1.5rem' }}>
              Hardware
            </h3>
            <div className="homelab__details">
              {hardware.map(item => (
                <div key={item.label} className="homelab__detail-item">
                  <span className="homelab__detail-label">{item.label}</span>
                  <span className="homelab__detail-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homelab
