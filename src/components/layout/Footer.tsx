export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-brand">Recipe Vault &bull; 5COSC034C Coursework</p>
          <p className="footer-meta">
            Candidate ID: <strong>w2121938</strong> &bull; &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
