import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <section className="page-container login-page">
      <header className="login-header">
        <h1>Simulated Login</h1>
        <p>Authenticate as an administrator or chef to manage recipes.</p>
      </header>
      <div className="login-placeholder">
        <p>Simulated token authentication form will be mounted here in Phase 6.</p>
        <Link to="/" className="btn btn-secondary">Return to Catalog</Link>
      </div>
    </section>
  );
}
