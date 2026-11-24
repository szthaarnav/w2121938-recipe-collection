import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="page-container not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Page Not Found</h1>
        <p>The culinary page or recipe route you requested does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Return to Catalog
        </Link>
      </div>
    </section>
  );
}
