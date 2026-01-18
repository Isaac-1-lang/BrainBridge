import Card from '../components/Card';
import SharingKnowledgeSVG from '../assets/undraw_sharing-knowledge_2jx3.svg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About BrainBridge</h1>
          <p className="about-intro">
            BrainBridge is a collaborative platform designed to connect educational 
            institutions and tech hubs, fostering innovation through seamless project 
            management and knowledge sharing.
          </p>
        </div>

        <div className="about-illustration">
          <img src={SharingKnowledgeSVG} alt="Sharing knowledge" />
        </div>

        <div className="about-content">
          <Card className="about-card">
            <h2>Our Mission</h2>
            <p>
              To bridge the gap between educational institutions and technology hubs, 
              creating an ecosystem where ideas flourish, projects thrive, and innovation 
              becomes the norm. We believe in the power of collaboration and the 
              transformative impact of shared knowledge.
            </p>
          </Card>

          <Card className="about-card">
            <h2>Who We Serve</h2>
            <div className="about-list">
              <div className="about-list-item">
                <strong>Educational Institutions</strong>
                <p>Provide your students and faculty with powerful tools to manage projects, collaborate, and track progress.</p>
              </div>
              <div className="about-list-item">
                <strong>Tech Hubs</strong>
                <p>Connect with educational partners, manage initiatives, and foster innovation through structured collaboration.</p>
              </div>
              <div className="about-list-item">
                <strong>Teams & Individuals</strong>
                <p>Join a community of innovators working on cutting-edge projects and ideas.</p>
              </div>
            </div>
          </Card>

          <Card className="about-card">
            <h2>What We Offer</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">📁</span>
                <div>
                  <h3>Project Management</h3>
                  <p>Organize, track, and manage projects with ease</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <div>
                  <h3>Idea Sharing</h3>
                  <p>Share and discover innovative ideas</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <div>
                  <h3>Team Collaboration</h3>
                  <p>Work together seamlessly across institutions</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h3>Analytics & Insights</h3>
                  <p>Track progress and measure impact</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
