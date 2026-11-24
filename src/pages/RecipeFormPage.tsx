import { useParams, Link } from 'react-router-dom';

export function RecipeFormPage() {
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);

  return (
    <section className="page-container form-page">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/">&larr; Back to Catalog</Link>
      </nav>
      <header className="form-header">
        <h1>{isEditMode ? 'Edit Recipe' : 'Add New Recipe'}</h1>
        <p>{isEditMode ? `Modifying recipe ID: ${id}` : 'Fill in the recipe specifications below.'}</p>
      </header>
      <div className="form-placeholder">
        <p>Controlled form inputs and client validation will be mounted here in Phase 5.</p>
      </div>
    </section>
  );
}
