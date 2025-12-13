import { useParams, Link, useNavigate } from 'react-router-dom';
import './ReadProject.css';

const ReadProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dummy project data - will be replaced with API call later
  const project = {
    id: id || '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product management, shopping cart, payment integration, and order tracking.',
    programmingLanguages: ['React', 'Node.js', 'MongoDB', 'Express'],
    author: {
      id: 1,
      username: 'johndoe',
      name: 'John Doe'
    },
    views: 1250,
    likes: 89,
    commentCount: 12,
    isPublic: true,
    createdAt: '2025-12-10',
    updatedAt: '2025-12-12'
  };

  // Dummy comments
  const comments = [
    {
      id: 1,
      content: 'Great project! I love the clean architecture.',
      author: 'Jane Smith',
      createdAt: '2025-12-11',
      isEdited: false
    },
    {
      id: 2,
      content: 'Could you add more documentation?',
      author: 'Mike Johnson',
      createdAt: '2025-12-11',
      isEdited: false
    },
    {
      id: 3,
      content: 'This is exactly what I was looking for!',
      author: 'Sarah Williams',
      createdAt: '2025-12-12',
      isEdited: true
    }
  ];

  const handleLike = () => {
    alert('Liked! (Dummy action - will integrate with backend later)');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      alert('Project deleted! (Dummy action - will integrate with backend later)');
      navigate('/read');
    }
  };

  return (
    <div className="read-project-page">
      <div className="container">
        <div className="project-header">
          <div>
            <h1>{project.title}</h1>
            <div className="project-meta">
              <span>by <Link to={`/users/${project.author.id}`}>{project.author.name}</Link></span>
              <span>•</span>
              <span>{project.createdAt}</span>
              {project.updatedAt !== project.createdAt && (
                <>
                  <span>•</span>
                  <span>Updated {project.updatedAt}</span>
                </>
              )}
            </div>
          </div>
          <div className="project-actions">
            <button onClick={handleLike} className="btn btn-outline">
              ❤️ {project.likes}
            </button>
            <Link to={`/projects/${id}/edit`} className="btn btn-secondary">
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div className="project-content">
          <div className="project-main">
            <div className="card">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>

            <div className="card">
              <h2>Programming Languages</h2>
              <div className="language-tags">
                {project.programmingLanguages.map((lang, idx) => (
                  <span key={idx} className="language-tag">{lang}</span>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Project Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">{project.views}</span>
                  <span className="stat-label">Views</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{project.likes}</span>
                  <span className="stat-label">Likes</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{project.commentCount}</span>
                  <span className="stat-label">Comments</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-sidebar">
            <div className="card">
              <h3>Author</h3>
              <div className="author-info">
                <div className="author-avatar">👤</div>
                <div>
                  <Link to={`/users/${project.author.id}`} className="author-name">
                    {project.author.name}
                  </Link>
                  <p className="author-username">@{project.author.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="comments-section">
          <div className="card">
            <h2>Comments ({comments.length})</h2>
            
            <div className="comment-form">
              <textarea
                placeholder="Write a comment..."
                rows={3}
                className="comment-input"
              />
              <button className="btn btn-primary">Post Comment</button>
            </div>

            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <strong>{comment.author}</strong>
                    <span className="comment-date">{comment.createdAt}</span>
                    {comment.isEdited && <span className="edited-badge">(edited)</span>}
                  </div>
                  <p className="comment-content">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadProject;

