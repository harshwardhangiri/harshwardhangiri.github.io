const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .section-title, .timeline article, .experience-grid article').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

const github = 'https://github.com/harshwardhangiri';
const linkedin = 'https://www.linkedin.com/in/harshwardhan-giri-goswami';
const instagram = 'https://www.instagram.com/harshwardhangirigoswami/';
const youtube = 'https://www.youtube.com/@harshwardhangirigoswami5376';

const socialStyles = document.createElement('style');
socialStyles.textContent = `
  .project-link{display:inline-block;margin-top:22px;color:#29351f;font:500 10px 'DM Mono';letter-spacing:.7px;text-decoration:none;border-bottom:1px solid #29351f;padding-bottom:4px}.project-link:hover{color:#a65f21;border-color:#a65f21}.social-bar{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-top:47px;padding-top:18px;border-top:1px solid rgba(241,240,232,.45)}.social-bar span,.social-bar a{font:500 10px 'DM Mono';letter-spacing:.7px}.social-bar span{color:#d6dacb;margin-right:8px}.social-bar a{color:#f1f0e8;text-decoration:none;border-bottom:1px solid rgba(241,240,232,.7);padding-bottom:4px}.social-bar a:hover{color:#e0a866;border-color:#e0a866}@media(max-width:760px){.social-bar{gap:13px;margin-top:36px}.social-bar span{flex-basis:100%;margin-bottom:3px}}
`;
document.head.append(socialStyles);

document.querySelectorAll('.project').forEach((article) => {
  const content = article.querySelector('.project-content');
  if (!content) return;
  const repo = article.dataset.repo || github;
  const label = article.dataset.repoLabel;
  const link = document.createElement('a');
  link.className = 'project-link';
  if (label) {
    link.classList.add('private');
    link.textContent = label + ' · CODE AVAILABLE ON REQUEST';
    link.href = github;
  } else {
    link.href = repo;
    link.textContent = 'VIEW ON GITHUB ↗';
  }
  link.target = '_blank';
  link.rel = 'noreferrer';
  content.append(link);
});

const socialBar = document.createElement('div');
socialBar.className = 'social-bar';
socialBar.innerHTML = `
  <span>FOLLOW MY WORK</span>
  <a href="${github}" target="_blank" rel="noreferrer">GITHUB ↗</a>
  <a href="${linkedin}" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
  <a href="${instagram}" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
  <a href="${youtube}" target="_blank" rel="noreferrer">YOUTUBE ↗</a>
`;
document.querySelector('.contact .wrap').append(socialBar);
