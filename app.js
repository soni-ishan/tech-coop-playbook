document.addEventListener("DOMContentLoaded", () => {
  buildBulletLibrary();
  buildLinter();
  buildPrompts();
  buildCoverLetter();
  initTemplates();
});

// ── BULLET LIBRARY ────────────────────────────────────────────────

function buildBulletLibrary() {
  const categories = [
    { key: "csCore",      label: "CS Core" },
    { key: "csElectives", label: "CS Electives" },
    { key: "mathStat",    label: "Math / Stat" },
    { key: "survivalJobs",label: "Survival Jobs" }
  ];

  const tabNav   = document.getElementById("tab-nav");
  const tabPanels = document.getElementById("tab-panels");

  categories.forEach((cat, idx) => {
    // Tab button
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (idx === 0 ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.tab = cat.key;
    btn.addEventListener("click", () => switchTab(cat.key));
    tabNav.appendChild(btn);

    // Panel
    const panel = document.createElement("div");
    panel.className = "tab-panel" + (idx === 0 ? " active" : "");
    panel.id = "panel-" + cat.key;

    const courses = DATA.bullets[cat.key] || [];
    courses.forEach(course => {
      panel.appendChild(buildAccordion(course));
    });

    tabPanels.appendChild(panel);
  });
}

function switchTab(key) {
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === key);
  });
  document.querySelectorAll(".tab-panel").forEach(p => {
    p.classList.toggle("active", p.id === "panel-" + key);
  });
}

function buildAccordion(course) {
  const item = document.createElement("div");
  item.className = "accordion-item";

  const header = document.createElement("div");
  header.className = "accordion-header";
  header.innerHTML = `
    <div class="accordion-header-left">
      <span class="accordion-course">${course.course}</span>
      <span class="accordion-target">${course.target}</span>
    </div>
    <span class="accordion-chevron">&#9660;</span>
  `;
  header.addEventListener("click", () => {
    item.classList.toggle("open");
  });

  const body = document.createElement("div");
  body.className = "accordion-body";

  course.angles.forEach(angle => {
    const group = document.createElement("div");
    group.className = "angle-group";
    group.innerHTML = `<div class="angle-label">${angle.name}</div>`;

    const list = document.createElement("ul");
    list.className = "bullet-list";

    angle.bullets.forEach(text => {
      const li = document.createElement("li");
      li.className = "bullet-item";
      li.innerHTML = `
        <span class="bullet-text">${escapeHtml(text)}</span>
        <button class="copy-btn" aria-label="Copy bullet">Copy</button>
      `;
      li.querySelector(".copy-btn").addEventListener("click", (e) => {
        copyText(text, e.currentTarget);
      });
      list.appendChild(li);
    });

    group.appendChild(list);
    body.appendChild(group);
  });

  item.appendChild(header);
  item.appendChild(body);
  return item;
}

// ── LINTER ────────────────────────────────────────────────────────

function buildLinter() {
  const container  = document.getElementById("linter-items");
  const countEl    = document.getElementById("linter-count");
  const barEl      = document.getElementById("linter-bar");

  const groups = [
    { key: "fatal",    title: "Fatal Error",  cls: "linter-fatal" },
    { key: "warnings", title: "Warning",      cls: "linter-warn" },
    { key: "style",    title: "Style Check",  cls: "linter-style" }
  ];

  const total = groups.reduce((s, g) => s + (DATA.linter[g.key] || []).length, 0);
  let checked = 0;

  function updateProgress() {
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    countEl.textContent = `${checked} / ${total} checked`;
    barEl.style.width = pct + "%";
    barEl.classList.toggle("complete", checked === total);
  }

  groups.forEach(group => {
    const items = DATA.linter[group.key] || [];
    if (!items.length) return;

    const section = document.createElement("div");
    section.className = "linter-group " + group.cls;

    section.innerHTML = `
      <div class="linter-group-header">
        <span class="linter-group-title">${group.title}</span>
      </div>
      <div class="linter-items"></div>
    `;

    const list = section.querySelector(".linter-items");

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "linter-item";
      div.innerHTML = `
        <input type="checkbox" class="linter-checkbox" id="check-${Math.random().toString(36).slice(2)}">
        <span class="linter-item-tag">${item.tag}</span>
        <span class="linter-item-text">${escapeHtml(item.text)}</span>
      `;

      const cb = div.querySelector("input");
      div.addEventListener("click", (e) => {
        if (e.target !== cb) cb.checked = !cb.checked;
        div.classList.toggle("checked", cb.checked);
        checked += cb.checked ? 1 : -1;
        updateProgress();
      });

      list.appendChild(div);
    });

    container.appendChild(section);
  });

  updateProgress();
}

// ── PROMPTS ───────────────────────────────────────────────────────

function buildPrompts() {
  const grid = document.getElementById("prompts-grid");

  DATA.prompts.forEach(prompt => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.innerHTML = `
      <h3>${escapeHtml(prompt.title)}</h3>
      <p>${escapeHtml(prompt.description)}</p>
      <div class="prompt-body">${escapeHtml(prompt.text)}</div>
      <div class="prompt-actions">
        <button class="btn btn-ghost btn-sm copy-btn">Copy Prompt</button>
      </div>
    `;
    card.querySelector(".copy-btn").addEventListener("click", (e) => {
      copyText(prompt.text, e.currentTarget);
    });
    grid.appendChild(card);
  });
}

// ── COVER LETTER ──────────────────────────────────────────────────

function buildCoverLetter() {
  const form    = document.getElementById("cl-form");
  const preview = document.getElementById("cl-preview");
  const copyBtn = document.getElementById("cl-copy");

  const values = {};
  DATA.coverLetter.fields.forEach(field => {
    values[field.id] = "";

    const group = document.createElement("div");
    group.className = "field-group";
    group.innerHTML = `
      <label for="cl-${field.id}">${escapeHtml(field.label)}</label>
      <input type="text" id="cl-${field.id}" placeholder="${escapeHtml(field.placeholder)}">
    `;

    const input = group.querySelector("input");
    input.addEventListener("input", () => {
      values[field.id] = input.value.trim();
      updatePreview();
    });

    form.appendChild(group);
  });

  function updatePreview() {
    const f = values;
    const company     = f.company     || "[Company Name]";
    const story       = f.story       || "[how you discovered them]";
    const mission     = f.mission     || "[company mission]";
    const requirement = f.requirement || "[specific requirement from JD]";
    const skill       = f.skill       || "[your matching project or course experience]";
    const result      = f.result      || "[result or metric]";

    preview.textContent =
`Dear Hiring Team at ${company},

I first discovered ${company} when I ${story}. I was immediately drawn to your mission to ${mission}, because it aligns directly with my drive to build software that makes a measurable difference. I am excited to apply for this Co-op role because it sits at the intersection of my technical skills and this mission.

In your job description, you mention a need for ${requirement}. During my time as a CS student at the University of Regina, I tackled a similar challenge when I ${skill}, which resulted in ${result}. I am confident I can bring this same rigour to ${company} and contribute to your team from day one.

I would welcome the opportunity to discuss how my background can contribute to your engineering team. Thank you for your time and consideration.`;
  }

  updatePreview();

  copyBtn.addEventListener("click", () => {
    copyText(preview.textContent, copyBtn);
  });
}

// ── TEMPLATES ─────────────────────────────────────────────────────

function initTemplates() {
  document.querySelectorAll(".copy-tex-btn").forEach(btn => {
    const target = btn.dataset.target;
    btn.addEventListener("click", () => {
      const pre = document.getElementById(target);
      if (pre) copyText(pre.textContent, btn);
    });
  });
}

// ── UTILITIES ─────────────────────────────────────────────────────

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1800);
  }).catch(() => {
    // Fallback for browsers without clipboard API
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    btn.textContent = "Copied!";
    setTimeout(() => { btn.textContent = btn.dataset.original || "Copy"; }, 1800);
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
