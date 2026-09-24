function asset(name) {
  return "assets/" + name;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function renderSite() {
  document.getElementById("hero-image").src = asset(PROJECTS[0].image);
  document.title = `${SITE.name} — ${SITE.tagline}`;
  document.getElementById("meta-description").content =
    `${SITE.name} — 3D sculpt and surface design for anatomy, creatures and vehicles.`;

  setHTML("hero-eyebrow", SITE.hero.eyebrow.join("<br>"));
  setHTML("hero-title", SITE.hero.title.join("<br>"));
  setHTML("hero-description", SITE.hero.description.join("<br>"));

  setHTML("about-title", SITE.about.title.join("<br>"));
  setHTML("about-copy", SITE.about.paragraphs.map(p => `<p>${p}</p>`).join(""));

  setHTML("services-list", SITE.services.join("<br>"));

  const email = document.getElementById("email");
  email.textContent = SITE.contact.email;
  email.href = `mailto:${SITE.contact.email}`;

  ["instagram", "behance", "linkedin"].forEach(key => {
    document.getElementById(key).href = SITE.contact[key];
  });

  setText("footer-name", SITE.name);
  setText("footer-tagline", SITE.tagline);
}

function renderProjects() {
  const grid = document.getElementById("project-grid");

  grid.innerHTML = PROJECTS.map((project, index) => `
    <a class="project-card" href="#case-study" data-project="${index}">
      <img src="${asset(project.image)}" alt="${project.title}">
      <span>${project.number}</span>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </a>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      showProject(Number(card.dataset.project));
    });
  });

  showProject(0);
}

function showProject(index) {
  const project = PROJECTS[index];
  if (!project) return;

  setText("case-number", project.number);
  setText("case-title", project.shortTitle);
  setHTML("case-tags", project.tags.map(tag => `<b>${tag}</b>`).join("<br>"));
  setText("case-description", project.description);

  const hero = document.getElementById("case-hero");
  hero.src = asset(project.image);
  hero.alt = project.title;

  document.getElementById("case-gallery").innerHTML =
    project.gallery.map(file =>
      `<img src="${asset(file)}" alt="${project.title}">`
    ).join("");
}

renderSite();
renderProjects();

// Gentle reveal animation.
const items = document.querySelectorAll(".project-card,.case,.about,.contact");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .08});

items.forEach(el => observer.observe(el));
