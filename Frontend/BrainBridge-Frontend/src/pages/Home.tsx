import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Dummy featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      languages: ['React', 'Node.js', 'MongoDB'],
      views: 1250,
      likes: 89,
      author: 'John Doe',
      createdAt: '2025-12-10'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      languages: ['Vue.js', 'Python', 'PostgreSQL'],
      views: 980,
      likes: 67,
      author: 'Jane Smith',
      createdAt: '2025-12-08'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with API integration',
      languages: ['React', 'TypeScript', 'REST API'],
      views: 750,
      likes: 45,
      author: 'Mike Johnson',
      createdAt: '2025-12-05'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BrainBridge</h1>
          <p className="hero-subtitle">
            Share your code, collaborate with developers, and build amazing projects together
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/read" className="btn btn-outline">Browse Projects</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose BrainBridge?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast code sharing and collaboration</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Collaborative</h3>
              <p>Work together with developers worldwide</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>AI-Powered</h3>
              <p>Get AI assistance for your coding projects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Track your project's performance and engagement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <span className="project-author">by {project.author}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-languages">
                  {project.languages.map((lang, idx) => (
                    <span key={idx} className="language-tag">{lang}</span>
                  ))}
                </div>
                <div className="project-stats">
                  <span>👁️ {project.views} views</span>
                  <span>❤️ {project.likes} likes</span>
                  <span>📅 {project.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/read" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

