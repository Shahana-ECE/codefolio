
import { useState } from 'react';

function Builder() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [about, setAbout] = useState('');
  const [skills, setSkills] = useState('');
  const [template, setTemplate] = useState('modern');

  const [projects, setProjects] = useState([
    { title: '', description: '', github: '' }
  ]);

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0 18px',
    border: '1px solid #d5d5e5',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '15px'
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: '', description: '', github: '' }
    ]);
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const downloadPortfolio = () => {
    const safe = (value) =>
      String(value).replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char]);

    const skillList = skills.split(',').map(s => s.trim()).filter(Boolean);

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${safe(name)} - Portfolio</title>
<style>
body {
  font-family: Arial, sans-serif;
  background: ${template === 'modern' ? '#f0efff' : '#ffffff'};
  color: ${template === 'modern' ? '#252344' : '#222222'};
  padding: 35px;
  line-height: 1.7;
}

main {
  max-width: 850px;
  margin: auto;
  background: ${template === 'modern' ? '#ffffff' : '#f7f7f7'};
  padding: 35px;
  border-radius: ${template === 'modern' ? '20px' : '0px'};
  border: ${template === 'classic' ? '1px solid #cccccc' : 'none'};
}

h1 {
  color: ${template === 'modern' ? '#6255d9' : '#222222'};
  text-align: ${template === 'modern' ? 'center' : 'left'};
  font-size: 36px;
}

h2, h3 {
  color: ${template === 'modern' ? '#6255d9' : '#333333'};
}

.project, .skill {
  background: ${template === 'modern' ? '#f1f0ff' : '#eeeeee'};
  padding: 14px;
  margin: 10px 0;
  border-radius: ${template === 'modern' ? '10px' : '0px'};
}

a {
  color: #6255d9;
}
</style>
</head>
<body>
<main>
<h1>${safe(name || 'Your Name')}</h1>
<h2>${safe(role || 'Your Professional Role')}</h2>
<h3>About Me</h3>
<p>${safe(about)}</p>
<h3>My Skills</h3>
${skillList.map(s => `<span class="skill">${safe(s)}</span>`).join(' ')}
<h3>My Projects</h3>
${projects.map(p => `
<div class="project">
<h3>${safe(p.title)}</h3>
<p>${safe(p.description)}</p>
${p.github ? `<a href="${safe(p.github)}">View on GitHub</a>` : ''}
</div>
`).join('')}
</main>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MyPortfolio.html';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '35px auto',
      padding: '25px',
      fontFamily: 'Arial, sans-serif',
      color: '#252344'
    }}>
      <h1 style={{ textAlign: 'center', color: '#6255d9' }}>
        CodeFolio Builder
      </h1>
      <p style={{ textAlign: 'center' }}>
        Create your own developer portfolio with ease.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px'
      }}>
        <section style={{
          padding: '22px',
          background: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.07)'
        }}>
          <h2>Personal Details</h2>

          <label>Your Name</label>
          <input style={inputStyle} value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name" />

          <label>Your Role</label>
          <input style={inputStyle} value={role}
            onChange={e => setRole(e.target.value)}
            placeholder="e.g. Web Developer" />

          <label>About Me</label>
          <textarea style={{ ...inputStyle, minHeight: '90px' }}
            value={about}
            onChange={e => setAbout(e.target.value)}
            placeholder="Write a short introduction" />

          <label>Skills (separate with commas)</label>
          <input style={inputStyle} value={skills}
            onChange={e => setSkills(e.target.value)}
            placeholder="HTML, CSS, JavaScript, React" />

          <h2>My Projects</h2>

          {projects.map((project, index) => (
            <div key={index} style={{
              background: '#f5f4ff',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '15px'
            }}>
              <h3>Project {index + 1}</h3>

              <input style={inputStyle}
                value={project.title}
                onChange={e => updateProject(index, 'title', e.target.value)}
                placeholder="Project title" />

              <textarea style={{ ...inputStyle, minHeight: '65px' }}
                value={project.description}
                onChange={e => updateProject(index, 'description', e.target.value)}
                placeholder="Project description" />

              <input style={inputStyle}
                value={project.github}
                onChange={e => updateProject(index, 'github', e.target.value)}
                placeholder="GitHub repository URL" />
            </div>
          ))}

          <button type="button" onClick={addProject}
            style={{
              padding: '12px 18px',
              background: '#eeeaff',
              color: '#5546c8',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
            + Add Another Project
          </button>

          <h2>Choose Template</h2>
          <select value={template}
            onChange={e => setTemplate(e.target.value)}
            style={inputStyle}>
            <option value="modern">Modern Template</option>
            <option value="classic">Classic Template</option>
          </select>

          <button onClick={downloadPortfolio}
            style={{
              width: '100%',
              padding: '14px',
              background: '#6255d9',
              color: 'white',
              border: 'none',
              borderRadius: '9px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
            Download My Portfolio
          </button>
        </section>

        <section style={{
          padding: '25px',
          background: template === 'modern' ? '#f1f0ff' : '#ffffff',
          border: '1px solid #e2e0f5',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
        }}>
          <h2>Live Preview</h2>

          <div style={{
            textAlign: template === 'modern' ? 'center' : 'left',
            padding: '15px'
          }}>
            <h1 style={{ color: '#6255d9' }}>
              {name || 'Your Name'}
            </h1>
            <h3>{role || 'Your Professional Role'}</h3>

            <hr />

            <h3>About Me</h3>
            <p>{about || 'Your introduction will appear here.'}</p>

            <h3>My Skills</h3>
            <p>{skills || 'Your skills will appear here.'}</p>

            <h3>My Projects</h3>
            {projects.map((project, index) => (
              <div key={index} style={{
                background: template === 'modern' ? '#ffffff' : '#f5f5f5',
                padding: '12px',
                borderRadius: '10px',
                margin: '12px 0',
                textAlign: 'left'
              }}>
                <h4>{project.title || 'Your Project Title'}</h4>
                <p>{project.description || 'Your project description will appear here.'}</p>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Builder;
