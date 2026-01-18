import Card from '../components/Card';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Active Projects', value: '12', change: '+3', trend: 'up' },
    { label: 'Team Members', value: '28', change: '+5', trend: 'up' },
    { label: 'Ideas Submitted', value: '45', change: '+12', trend: 'up' },
    { label: 'Tasks Completed', value: '89', change: '+15', trend: 'up' },
  ];

  const recentProjects = [
    { id: 1, name: 'AI Research Platform', progress: 75, status: 'In Progress' },
    { id: 2, name: 'Data Analytics Dashboard', progress: 45, status: 'In Progress' },
    { id: 3, name: 'Mobile App Prototype', progress: 100, status: 'Completed' },
  ];

  const recentActivity = [
    { type: 'project', action: 'created', item: 'AI Research Platform', time: '2 hours ago' },
    { type: 'team', action: 'joined', item: 'Design Team', time: '5 hours ago' },
    { type: 'idea', action: 'submitted', item: 'ML Model Optimization', time: '1 day ago' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <Card key={idx} hover className="stat-card">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change stat-change-${stat.trend}`}>
              {stat.change} this month
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content">
        {/* Recent Projects */}
        <Card className="projects-card">
          <div className="card-header">
            <h2>Recent Projects</h2>
          </div>
          <div className="projects-list">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="activity-card">
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'project' && '📁'}
                  {activity.type === 'team' && '👥'}
                  {activity.type === 'idea' && '💡'}
                </div>
                <div className="activity-content">
                  <p>
                    <strong>{activity.action}</strong> {activity.item}
                  </p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Analytics Placeholder */}
      <Card className="analytics-card">
        <div className="card-header">
          <h2>Analytics Overview</h2>
        </div>
        <div className="analytics-placeholder">
          <div className="placeholder-content">
            <span className="placeholder-icon">📈</span>
            <p>Analytics charts and visualizations will appear here</p>
            <p className="placeholder-subtext">Connect your data sources to see detailed insights</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
