function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Dimitris Sidiropoulos</span>
        <span className="footer__copy">© {year} — Built with React & TypeScript</span>
      </div>
    </footer>
  )
}

export default Footer
