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
