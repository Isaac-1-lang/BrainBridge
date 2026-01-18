import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Card from '../components/Card';
import SteppingUpSVG from '../assets/undraw_stepping-up_i0i7.svg';
import MindMapSVG from '../assets/undraw_mind-map_i9bv.svg';
import PresentationSVG from '../assets/undraw_hr-presentation_uunk.svg';
import SharingKnowledgeSVG from '../assets/undraw_sharing-knowledge_2jx3.svg';
import klabLogo from '../assets/klabLogo.png';
import githubLogo from '../assets/GitHub-logo.png';
import norrskenLogo from '../assets/66911f85f3709b75ac8707ca_Norrsken_OG.png';
import './Home.css';
import rcaLogo from "../assets/images.png"

const Home = () => {
  // Sample projects data
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
    },
    {
      id: 7,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing',
      languages: ['Python', 'TensorFlow', 'Flask'],
      views: 890,
      likes: 72,
      comments: 15,
      author: 'Alex Chen',
      createdAt: '2025-12-09'
    },
    {
      id: 8,
      title: 'Music Streaming App',
      description: 'Modern music streaming platform with recommendations',
      languages: ['React', 'Express.js', 'PostgreSQL'],
      views: 1100,
      likes: 95,
      comments: 20,
      author: 'Maria Garcia',
      createdAt: '2025-12-07'
    }
  ];

  const [filter, setFilter] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredProjects = () => {
    let filtered = [...projects];

    // Apply filter
    if (filter === 'recent') {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (filter === 'popular') {
      filtered.sort((a, b) => b.views - a.views);
    } else if (filter === 'trending') {
      filtered.sort((a, b) => b.likes - a.likes);
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();
  const features = [
    {
      title: 'Project Management',
      description: 'Organize and track your projects with ease',
      icon: SteppingUpSVG,
    },
    {
      title: 'Mind Mapping',
      description: 'Visualize ideas and connections',
      icon: MindMapSVG,
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly',
      icon: PresentationSVG,
    },
    {
      title: 'Knowledge Sharing',
      description: 'Share insights and learn from peers',
      icon: SharingKnowledgeSVG,
    },
  ];

  const partners = [
    {
      name: 'kLab',
      logo: klabLogo,
    },
    {
      name: 'GitHub',
      logo: githubLogo,
    },
    {
      name: 'Norrsken',
      logo: norrskenLogo,
    },
    {
      name: 'Rwanda Coding Academy',
      logo: rcaLogo,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bridge Ideas to Innovation
            </h1>
            <p className="hero-description">
              Connect educational institutions and tech hubs through a powerful 
              platform for project management, collaboration, and knowledge sharing.
            </p>
            <div className="hero-actions">
              <Link to="/register">
                <Button size="lg" variant="primary">
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <img src={SteppingUpSVG} alt="Stepping up" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Powerful Features</h2>
            <p>Everything you need to manage projects and collaborate effectively</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <Card key={idx} hover className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Browse Section */}
      <section className="projects-browse-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Projects</h2>
            <p>Discover innovative projects from our community</p>
          </div>

          <div className="projects-browse-controls">
            <div className="projects-search">
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="projects-search-input"
              />
            </div>

            <div className="projects-filter-tabs">
              <button
                className={`filter-tab ${filter === 'recent' ? 'active' : ''}`}
                onClick={() => setFilter('recent')}
              >
                Recent
              </button>
              <button
                className={`filter-tab ${filter === 'popular' ? 'active' : ''}`}
                onClick={() => setFilter('popular')}
              >
                Popular
              </button>
              <button
                className={`filter-tab ${filter === 'trending' ? 'active' : ''}`}
                onClick={() => setFilter('trending')}
              >
                Trending
              </button>
            </div>
          </div>

          <div className="projects-browse-grid">
            {filteredProjects.map((project) => (
              <Card key={project.id} hover className="project-browse-card">
                <div className="project-browse-header">
                  <h3>
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <span className="project-browse-author">by {project.author}</span>
                </div>
                <p className="project-browse-description">{project.description}</p>
                <div className="project-browse-languages">
                  {project.languages.map((lang, idx) => (
                    <span key={idx} className="language-tag">{lang}</span>
                  ))}
                </div>
                <div className="project-browse-stats">
                  <span className="stat-item">👁️ {project.views}</span>
                  <span className="stat-item">❤️ {project.likes}</span>
                  <span className="stat-item">💬 {project.comments}</span>
                  <span className="stat-item">📅 {project.createdAt}</span>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-no-results">
              <p>No projects found matching your criteria.</p>
            </div>
          )}

          <div className="projects-browse-cta">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted by Leading Institutions</h2>
            <p>Join the growing network of educational institutions and tech hubs</p>
          </div>
          <div className="partners-grid">
            {partners.map((partner, idx) => (
              <div key={idx} className="partner-item">
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <Card className="cta-card">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join BrainBridge today and transform how you collaborate on projects</p>
              <div className="cta-actions">
                <Link to="/register">
                  <Button size="lg" variant="primary">
                    Sign Up Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
