import { useParams, Link } from 'react-router-dom';

export function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="page-container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/">&larr; Back to Catalog</Link>
      </nav>
      <div className="detail-placeholder">
        <h1>Recipe Details</h1>
        <p>Viewing details for recipe ID: <code>{id}</code></p>
      </div>
    </section>
  );
}
