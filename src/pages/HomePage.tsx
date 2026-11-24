import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="page-container">
      <div className="hero-banner">
        <h1>Discover & Share Culinary Recipes</h1>
        <p>Explore handcrafted recipes with rich ingredients, cook times, and step-by-step guidance.</p>
        <div className="hero-actions">
          <Link to="/recipes/add" className="btn btn-primary">
            + Create New Recipe
          </Link>
        </div>
      </div>
      <div className="catalog-placeholder">
        <h2>Recipe Catalog</h2>
        <p>Recipe cards grid and filters will load here in Phase 2 &amp; 3.</p>
      </div>
    </section>
  );
}
