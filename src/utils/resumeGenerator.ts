import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, INTERNSHIP_DATA, EDUCATION_DATA, CERTIFICATION_DATA } from '../data/portfolioData';

/**
 * Generates and triggers download of Ajay's official developer resume
 */
export function downloadResumeFile() {
  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ajay - Software Developer Resume</title>
  <style>
    @page { margin: 15mm; size: A4; }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #1e293b;
      line-height: 1.45;
      margin: 0;
      padding: 24px;
      background: #ffffff;
    }
    .header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    h1 {
      margin: 0 0 4px 0;
      font-size: 26px;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 6px;
    }
    .contact-line {
      font-size: 12px;
      color: #475569;
    }
    .section {
      margin-bottom: 16px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 8px;
    }
    .item {
      margin-bottom: 10px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
    }
    .item-sub {
      font-size: 12px;
      color: #2563eb;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .item-desc {
      font-size: 11.5px;
      color: #334155;
      margin: 0;
      padding-left: 16px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      row-gap: 5px;
      font-size: 11.5px;
    }
    .skill-category {
      font-weight: 600;
      color: #0f172a;
    }
    .skill-items {
      color: #334155;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${PERSONAL_INFO.name}</h1>
    <div class="title">${PERSONAL_INFO.professionalTitle}</div>
    <div class="contact-line">
      ${PERSONAL_INFO.location} &nbsp;|&nbsp;
      ${PERSONAL_INFO.email} &nbsp;|&nbsp;
      Easwari Engineering College, Chennai
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p style="font-size: 11.5px; color: #334155; margin: 0;">
      Computer Science Engineering student at Easwari Engineering College with a strong technical foundation in full-stack development, artificial intelligence, relational and NoSQL databases, and object-oriented programming. Proven experience building practical software applications including an AI-powered mood analysis platform and hotel operations POS system.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-header">
        <span>${EDUCATION_DATA.institution}</span>
        <span>${EDUCATION_DATA.academicYear} (Graduating ${EDUCATION_DATA.expectedGraduation})</span>
      </div>
      <div class="item-sub">${EDUCATION_DATA.degree} in ${EDUCATION_DATA.department} · ${EDUCATION_DATA.location}</div>
      <div style="font-size: 11px; color: #475569;">
        <strong>Relevant Coursework:</strong> ${EDUCATION_DATA.relevantCoursework.slice(0, 6).join(', ')}.
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-category">Programming:</div>
      <div class="skill-items">C, C++, Python, Java, JavaScript, TypeScript</div>
      <div class="skill-category">Frontend:</div>
      <div class="skill-items">React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
      <div class="skill-category">Backend & Frameworks:</div>
      <div class="skill-items">Node.js, Express.js, Spring Boot, REST APIs</div>
      <div class="skill-category">Databases:</div>
      <div class="skill-items">MySQL, MongoDB, Firebase, Cloud Firestore</div>
      <div class="skill-category">Tools & Platforms:</div>
      <div class="skill-items">Git, GitHub, VS Code, Google AI Studio, Firebase Console</div>
      <div class="skill-category">Core Competencies:</div>
      <div class="skill-items">Data Structures & Algorithms, Natural Language Processing, System Design</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Experience</div>
    <div class="item">
      <div class="item-header">
        <span>${INTERNSHIP_DATA.organization}</span>
        <span>${INTERNSHIP_DATA.duration}</span>
      </div>
      <div class="item-sub">${INTERNSHIP_DATA.position} — ${INTERNSHIP_DATA.status}</div>
      <ul class="item-desc">
        ${INTERNSHIP_DATA.responsibilities.map(r => `<li>${r}</li>`).join('')}
        ${INTERNSHIP_DATA.tasksCompleted.slice(0, 2).map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Key Projects</div>
    ${PROJECTS_DATA.map(p => `
      <div class="item">
        <div class="item-header">
          <span>${p.title}</span>
          <span>${p.technologies.slice(0, 4).join(', ')}</span>
        </div>
        <div class="item-sub">${p.subtitle}</div>
        <ul class="item-desc">
          <li>${p.overview}</li>
          ${p.keyFeatures.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    ${CERTIFICATION_DATA.map(c => `
      <div class="item">
        <div class="item-header">
          <span>${c.title} — ${c.technology}</span>
          <span>${c.completionDate}</span>
        </div>
        <div class="item-sub">${c.category} · Status: ${c.status}</div>
        <div style="font-size: 11px; color: #475569;">
          Key topics: ${c.highlights.join('; ')}
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  const blob = new Blob([resumeHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Ajay_Resume_Software_Developer.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
