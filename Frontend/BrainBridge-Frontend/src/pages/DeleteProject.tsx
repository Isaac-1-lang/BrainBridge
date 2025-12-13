import { useParams, useNavigate, Link } from 'react-router-dom';
import './DeleteProject.css';

const DeleteProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dummy project data - will be replaced with API call later
  const project = {
    id: id || '1',
    title: 'E-Commerce Platform',
    author: 'John Doe'
  };

  const handleDelete = () => {
    console.log('Deleting project:', id);
    alert('Project deleted successfully! (Dummy action - will integrate with backend later)');
    navigate('/read');
  };

  return (
    <div className="delete-project-page">
      <div className="container">
        <div className="delete-card">
          <h1>Delete Project</h1>
          <div className="warning-box">
            <div className="warning-icon">⚠️</div>
            <h2>Are you sure you want to delete this project?</h2>
            <p>This action cannot be undone. All project data, comments, and analytics will be permanently deleted.</p>
          </div>

          <div className="project-info">
            <h3>Project Details</h3>
            <p><strong>Title:</strong> {project.title}</p>
            <p><strong>Author:</strong> {project.author}</p>
            <p><strong>Project ID:</strong> {project.id}</p>
          </div>

          <div className="delete-actions">
            <button onClick={handleDelete} className="btn btn-danger btn-large">
              Yes, Delete Project
            </button>
            <Link to={`/projects/${id}`} className="btn btn-secondary btn-large">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;

