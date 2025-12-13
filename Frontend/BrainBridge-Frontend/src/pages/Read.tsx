import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css';

const Read = () => {
  // Dummy projects list - will be replaced with API call later
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      languages: ['React', 'Node.js', 'MongoDB'],
      views: 1250,
      likes: 89,
      comments: 12,
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
      comments: 8,
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
      comments: 5,
      author: 'Mike Johnson',
      createdAt: '2025-12-05'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Track and analyze social media performance',
      languages: ['Python', 'Django', 'Chart.js'],
      views: 620,
      likes: 38,
      comments: 4,
      author: 'Sarah Williams',
      createdAt: '2025-12-03'
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'Find recipes based on available ingredients',
      languages: ['React Native', 'Firebase', 'Spoonacular API'],
      views: 540,
      likes: 32,
      comments: 6,
      author: 'David Brown',
      createdAt: '2025-12-01'
    },
    {
      id: 6,
      title: 'Budget Tracker',
      description: 'Personal finance management application',
      languages: ['Angular', 'Node.js', 'MySQL'],
      views: 480,
      likes: 28,
      comments: 3,
      author: 'Emily Davis',
      createdAt: '2025-11-28'
    }
  ];

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.languages.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const allLanguages = Array.from(new Set(projects.flatMap(p => p.languages)));

  return (
    <div className="read-page">
      <div className="container">
        <div className="page-header">
          <h1>Browse Projects</h1>
          <Link to="/projects/create" className="btn btn-primary">
            + Create New Project
          </Link>
        </div>

        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-tabs">
            <button
              className={filter === 'all' ? 'filter-tab active' : 'filter-tab'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {allLanguages.map(lang => (
              <button
                key={lang}
                className={filter === lang ? 'filter-tab active' : 'filter-tab'}
                onClick={() => setFilter(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
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
                <span>👁️ {project.views}</span>
                <span>❤️ {project.likes}</span>
                <span>💬 {project.comments}</span>
                <span>📅 {project.createdAt}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Read;

