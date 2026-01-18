import Card from '../components/Card';
import SteppingUpSVG from '../assets/undraw_stepping-up_i0i7.svg';
import MindMapSVG from '../assets/undraw_mind-map_i9bv.svg';
import PresentationSVG from '../assets/undraw_hr-presentation_uunk.svg';
import SharingKnowledgeSVG from '../assets/undraw_sharing-knowledge_2jx3.svg';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Project Management',
      description: 'Organize and track your projects from conception to completion. Set milestones, assign tasks, and monitor progress in real-time.',
      icon: SteppingUpSVG,
      items: ['Task assignment', 'Progress tracking', 'Milestone management', 'Deadline reminders'],
    },
    {
      title: 'Mind Mapping & Ideation',
      description: 'Visualize ideas and connections with intuitive mind mapping tools. Brainstorm, organize thoughts, and turn concepts into actionable plans.',
      icon: MindMapSVG,
      items: ['Visual ideation', 'Connection mapping', 'Idea organization', 'Concept development'],
    },
    {
      title: 'Team Collaboration',
      description: 'Work seamlessly with team members across institutions. Share resources, communicate effectively, and achieve common goals.',
      icon: PresentationSVG,
      items: ['Real-time collaboration', 'Team workspaces', 'File sharing', 'Communication tools'],
    },
    {
      title: 'Knowledge Sharing',
      description: 'Share insights, best practices, and learnings with the community. Build a repository of knowledge that benefits everyone.',
      icon: SharingKnowledgeSVG,
      items: ['Document sharing', 'Knowledge base', 'Discussion forums', 'Resource library'],
    },
  ];

  const additionalFeatures = [
    {
      title: 'Analytics Dashboard',
      description: 'Track project performance, team productivity, and engagement metrics with comprehensive analytics.',
    },
    {
      title: 'Security & Privacy',
      description: 'Enterprise-grade security ensures your data and projects are protected with encryption and access controls.',
    },
    {
      title: 'Integration Ready',
      description: 'Connect with your existing tools and workflows through our API and integration capabilities.',
    },
    {
      title: 'Mobile Access',
      description: 'Access BrainBridge from anywhere with our responsive design and mobile-friendly interface.',
    },
  ];

  return (
    <div className="features-page">
      <div className="container">
        <div className="features-header">
          <h1>Features</h1>
          <p>
            Everything you need to manage projects, collaborate effectively, and drive innovation.
          </p>
        </div>

        <div className="features-main">
          {features.map((feature, idx) => (
            <Card key={idx} hover className="feature-main-card">
              <div className="feature-main-content">
                <div className="feature-main-text">
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                  <ul className="feature-list">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="feature-main-illustration">
                  <img src={feature.icon} alt={feature.title} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="features-additional">
          <h2>Additional Features</h2>
          <div className="features-grid">
            {additionalFeatures.map((feature, idx) => (
              <Card key={idx} hover className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
