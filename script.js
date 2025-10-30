// ---------- Default configuration ----------
const defaultConfig = {
  developer_name: "Patan Saheel Akther",
  job_title: "Frontend Developer",
  bio_text: "I create clean, accessible web experiences with modern technologies. Passionate about user interface design and performance optimization.",
  email_address: "patansaheel666@gmail.com",
  portfolio_url: "+91 8074862287",
  portfolio_tel: "+918074862287",
  linkedin_url: "https://www.linkedin.com/in/saheel-patan-76012b232/?skipRedirect=true%3FskipRedirect%3Dtrue",
  github_url: "https://github.com/Saheel08",
  primary_color: "#4f46e5",
  secondary_color: "#7c3aed",
  accent_color: "#1a202c",
  background_color: "#667eea",
  text_color: "#4a5568",
  resume_file: "patanSaheelResume.pdf"
};

// ---------- DOM helpers ----------
function updateProfileInitial(p) {
  const profileEl = document.getElementById('profile-initial');

}


function applyColors(config) {
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const textColor = config.text_color || defaultConfig.text_color;

  document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${secondaryColor} 100%)`;

  // Replace or inject custom color style
  const existing = document.getElementById('custom-colors');
  if (existing) existing.remove();
  const style = document.createElement('style');
  style.id = 'custom-colors';
  style.textContent = `
    .name { background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; }
    .profile-image { background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) !important; }
    .btn-primary { background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) !important; box-shadow: 0 4px 15px ${primaryColor}40 !important; color: white !important; }
    .card-icon, .contact-icon { color: ${primaryColor} !important; }
    .tech-tag, .skill-item { background: ${primaryColor}1A !important; color: ${primaryColor} !important; }
    .project-item, .experience-item { border-left-color: ${primaryColor} !important; }
    .experience-role { color: ${primaryColor} !important; }
  `;
  document.head.appendChild(style);

  // Accent/text
  document.querySelectorAll('.card-title, .project-title, .skill-name, .experience-company').forEach(el => el.style.color = accentColor);
  document.querySelectorAll('.title, .project-description, .experience-description, .bio').forEach(el => el.style.color = textColor);
}

function applyConfigToDOM(config) {
  const name = config.developer_name || defaultConfig.developer_name;
  const job = config.job_title || defaultConfig.job_title;
  const bio = config.bio_text || defaultConfig.bio_text;
  const email = config.email_address || defaultConfig.email_address;
  const portfolioText = config.portfolio_url || defaultConfig.portfolio_url;
  const tel = config.portfolio_tel || defaultConfig.portfolio_tel;
  const linkedin = config.linkedin_url || defaultConfig.linkedin_url;
  const github = config.github_url || defaultConfig.github_url;
  const resume = config.resume_file || defaultConfig.resume_file;

  const developerNameEl = document.getElementById('developer-name');
  const jobTitleEl = document.getElementById('job-title');
  const bioTextEl = document.getElementById('bio-text');
  const emailTextEl = document.getElementById('email-text');
  const portfolioTextEl = document.getElementById('portfolio-text');

  if (developerNameEl) developerNameEl.textContent = name;
  if (jobTitleEl) jobTitleEl.textContent = job;
  if (bioTextEl) bioTextEl.textContent = bio;
  if (emailTextEl) emailTextEl.textContent = email;
  if (portfolioTextEl) portfolioTextEl.textContent = portfolioText;

  updateProfileInitial(name);
  applyColors(config);

  // links
  const emailLink = document.getElementById('email-link');
  const portfolioLink = document.getElementById('portfolio-link');
  const linkedinLink = document.getElementById('linkedin-link');
  const githubLink = document.getElementById('github-link');
  const downloadResume = document.getElementById('download-resume');

  if (emailLink) emailLink.setAttribute('href', `mailto:${email}`);
  if (portfolioLink) portfolioLink.setAttribute('href', `tel:${tel}`);
  if (linkedinLink) linkedinLink.setAttribute('href', linkedin);
  if (githubLink) githubLink.setAttribute('href', github);
  if (downloadResume) {
    downloadResume.setAttribute('href', resume);
    downloadResume.setAttribute('download', resume);
  }
}

// Smooth scroll for "Get In Touch" button
function attachUIBehavior() {
  const heroBtn = document.getElementById('hero-getin-btn');
  const contactCard = document.getElementById('contact-card');

  if (heroBtn && contactCard) {
    heroBtn.addEventListener('click', () => {
      // Use scrollIntoView - no header offset required since header is not fixed in this layout
      contactCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// Element SDK mapping (if used in the editor)
function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => { if (window.elementSdk) window.elementSdk.setConfig({ primary_color: value }); }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => { if (window.elementSdk) window.elementSdk.setConfig({ secondary_color: value }); }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => { if (window.elementSdk) window.elementSdk.setConfig({ accent_color: value }); }
      },
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => { if (window.elementSdk) window.elementSdk.setConfig({ background_color: value }); }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => { if (window.elementSdk) window.elementSdk.setConfig({ text_color: value }); }
      }
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["developer_name", config.developer_name || defaultConfig.developer_name],
    ["job_title", config.job_title || defaultConfig.job_title],
    ["bio_text", config.bio_text || defaultConfig.bio_text],
    ["email_address", config.email_address || defaultConfig.email_address],
    ["portfolio_url", config.portfolio_url || defaultConfig.portfolio_url]
  ]);
}

// Init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  applyConfigToDOM(defaultConfig);
  attachUIBehavior();

  if (window.elementSdk && typeof window.elementSdk.init === 'function') {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: (cfg) => {
        const newCfg = Object.assign({}, defaultConfig, cfg);
        applyConfigToDOM(newCfg);
      },
      mapToCapabilities,
      mapToEditPanelValues
    });
  }
});
