/* =====================================================
   TECHINDEV — Main JS
   ===================================================== */

// ---- Navbar scroll ----
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ---- Mobile menu ----
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// ---- Counter animation ----
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

// ---- Intersection Observer (fade-in + counters) ----
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      e.target.querySelectorAll(".stat__number").forEach(animateCounter);
      io.unobserve(e.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section__header, .service-card, .portfolio-card, .about__card, .contact__layout, .hero__stats")
  .forEach((el) => { el.classList.add("fade-in"); io.observe(el); });

// ---- Render services ----
const servicesGrid = document.getElementById("servicesGrid");
SERVICES.forEach(({ icon, title, description, tags }) => {
  const el = document.createElement("div");
  el.className = "service-card fade-in";
  el.innerHTML = `
    <div class="service-card__icon">${icon}</div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="service-card__tags">${tags.map((t) => `<span>${t}</span>`).join("")}</div>
  `;
  servicesGrid.appendChild(el);
  io.observe(el);
});

// ---- Render portfolio ----
const portfolioGrid    = document.getElementById("portfolioGrid");
const portfolioFilters = document.getElementById("portfolioFilters");

const categories = ["Todos", ...new Set(PROJECTS.map((p) => p.category))];

categories.slice(1).forEach((cat) => {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.dataset.filter = cat;
  btn.textContent = cat;
  portfolioFilters.appendChild(btn);
});

function renderProjects(filter) {
  portfolioGrid.innerHTML = "";
  const filtered = filter === "all" || filter === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  if (filtered.length === 0) {
    portfolioGrid.innerHTML = `<div class="portfolio__empty"><p>Nenhum projeto nesta categoria ainda.</p></div>`;
    return;
  }

  filtered.forEach(({ title, category, description, tags, icon, image, link }) => {
    const card = document.createElement(link ? "a" : "div");
    card.className = "portfolio-card fade-in";
    if (link) { card.href = link; card.target = "_blank"; card.rel = "noopener noreferrer"; }

    const thumb = image
      ? `<img src="${image}" alt="${title}" loading="lazy" />`
      : `<span aria-hidden="true">${icon || "🔧"}</span>`;

    card.innerHTML = `
      <div class="portfolio-card__thumb">${thumb}</div>
      <div class="portfolio-card__body">
        <p class="portfolio-card__category">${category}</p>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="portfolio-card__tags">${tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    `;
    portfolioGrid.appendChild(card);
    io.observe(card);
  });
}

renderProjects("all");

portfolioFilters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  portfolioFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("filter-btn--active"));
  btn.classList.add("filter-btn--active");
  renderProjects(btn.dataset.filter);
});

// ---- Contact form ----
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, message } = contactForm.elements;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formFeedback.textContent = "Por favor, preencha os campos obrigatórios.";
    formFeedback.className = "form__feedback error";
    return;
  }

  // Placeholder: integre com Formspree, EmailJS ou backend próprio
  const mailto = `mailto:contato@techindev.com.br`
    + `?subject=Contato via site — ${encodeURIComponent(name.value)}`
    + `&body=${encodeURIComponent(message.value + "\n\n" + email.value)}`;
  window.location.href = mailto;

  formFeedback.textContent = "Abrindo seu cliente de e-mail...";
  formFeedback.className = "form__feedback success";
  setTimeout(() => { formFeedback.textContent = ""; contactForm.reset(); }, 4000);
});

// ---- Footer year ----
document.getElementById("footerYear").textContent = new Date().getFullYear();
