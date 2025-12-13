import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProject.css';

const CreateProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    programmingLanguages: [] as string[],
    isPublic: true
  });
  const [currentLanguage, setCurrentLanguage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const addLanguage = () => {
    if (currentLanguage.trim() && !formData.programmingLanguages.includes(currentLanguage.trim())) {
      setFormData({
        ...formData,
        programmingLanguages: [...formData.programmingLanguages, currentLanguage.trim()]
      });
      setCurrentLanguage('');
    }
  };

  const removeLanguage = (lang: string) => {
    setFormData({
      ...formData,
      programmingLanguages: formData.programmingLanguages.filter(l => l !== lang)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project data:', formData);
    // Simulate project creation
    alert('Project created successfully! (Dummy data - will integrate with backend later)');
    navigate('/read');
  };

  return (
    <div className="create-project-page">
      <div className="container">
        <h1>Create New Project</h1>
        
        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="title">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows={6}
            />
          </div>

          <div className="form-group">
            <label>Programming Languages</label>
            <div className="language-input">
              <input
                type="text"
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                placeholder="Add a language (e.g., JavaScript, Python)"
              />
              <button type="button" onClick={addLanguage} className="btn btn-secondary">
                Add
              </button>
            </div>
            <div className="language-tags">
              {formData.programmingLanguages.map((lang, idx) => (
                <span key={idx} className="language-tag">
                  {lang}
                  <button
                    type="button"
                    onClick={() => removeLanguage(lang)}
                    className="tag-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isPublic"
                checked={formData.isPublic}
                onChange={handleChange}
              />
              Make this project public
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Create Project
            </button>
            <button
              type="button"
              onClick={() => navigate('/read')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;

