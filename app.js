document.addEventListener("DOMContentLoaded", () => {
  buildBulletLibrary();
  buildLinter();
  buildPrompts();
  buildInterview();
  initTemplates();
  initNavHighlight();
});

// ── BULLET LIBRARY ────────────────────────────────────────────────

function buildBulletLibrary() {
  const categories = [
    { key: "csCore",      label: "CS Core" },
    { key: "csElectives", label: "CS Electives" },
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

// ── INTERVIEW PREP ────────────────────────────────────────────────

function buildInterview() {
  const iv = DATA.interview;
  const tabs = [
    { key: "how",   label: "How It Works" },
    { key: "stars", label: "STAR Method" },
    { key: "qa",    label: "Common Q&A" },
    { key: "ask",   label: "Questions to Ask" },
    { key: "body",  label: "Body Language" },
    { key: "after", label: "After the Interview" }
  ];

  const tabNav = document.getElementById("iv-tab-nav");
  const panels = document.getElementById("iv-tab-panels");
  if (!tabNav || !panels) return;

  // Stats block - always visible, above tabs
  const statsBlock = document.createElement("div");
  statsBlock.className = "iv-stats-block";
  const statsTitle = document.createElement("h3");
  statsTitle.className = "iv-section-title";
  statsTitle.textContent = "My Application Stats - From the Field";
  statsBlock.appendChild(statsTitle);
  const tableWrap = document.createElement("div");
  tableWrap.className = "stat-table-wrap";
  const table = document.createElement("table");
  table.className = "stat-table";
  table.innerHTML = `
    <thead><tr><th>Term</th><th>Apps&nbsp;Sent</th><th>Interviews</th><th>Result</th></tr></thead>
    <tbody>${iv.howItWorks.stats.map(r =>
      `<tr><td>${escapeHtml(r.term)}</td><td>${escapeHtml(r.apps)}</td><td>${escapeHtml(r.interviews)}</td><td>${escapeHtml(r.result)}</td></tr>`
    ).join("")}</tbody>`;
  tableWrap.appendChild(table);
  statsBlock.appendChild(tableWrap);
  tabNav.insertAdjacentElement("beforebegin", statsBlock);

  tabs.forEach((tab, idx) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (idx === 0 ? " active" : "");
    btn.textContent = tab.label;
    btn.dataset.ivTab = tab.key;
    btn.addEventListener("click", () => switchIvTab(tab.key));
    tabNav.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "tab-panel" + (idx === 0 ? " active" : "");
    panel.id = "iv-panel-" + tab.key;

    if (tab.key === "how")   panel.appendChild(buildIvHow(iv));
    if (tab.key === "stars") panel.appendChild(buildIvStars(iv));
    if (tab.key === "qa")    panel.appendChild(buildIvQA(iv));
    if (tab.key === "ask")   panel.appendChild(buildIvAsk(iv));
    if (tab.key === "body")  panel.appendChild(buildIvBody(iv));
    if (tab.key === "after") panel.appendChild(buildIvAfter(iv));

    panels.appendChild(panel);
  });
}

function switchIvTab(key) {
  document.querySelectorAll("[data-iv-tab]").forEach(b => {
    b.classList.toggle("active", b.dataset.ivTab === key);
  });
  document.querySelectorAll("[id^='iv-panel-']").forEach(p => {
    p.classList.toggle("active", p.id === "iv-panel-" + key);
  });
}

function buildIvHow(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  const disc = document.createElement("div");
  disc.className = "iv-disclaimer";
  disc.textContent = iv.disclaimer;
  wrap.appendChild(disc);

  const tlTitle = document.createElement("h3");
  tlTitle.className = "iv-section-title";
  tlTitle.textContent = "The Match Process";
  wrap.appendChild(tlTitle);

  const tl = document.createElement("div");
  tl.className = "process-timeline";
  iv.howItWorks.process.forEach(step => {
    const s = document.createElement("div");
    s.className = "process-step";
    s.innerHTML = `
      <div class="process-step-num">${escapeHtml(step.num)}</div>
      <div>
        <div class="process-step-phase">${escapeHtml(step.phase)}</div>
        <div class="process-step-detail">${escapeHtml(step.detail)}</div>
      </div>`;
    tl.appendChild(s);
  });
  wrap.appendChild(tl);


  if (iv.howItWorks.ftf) {
    const ftf = document.createElement("div");
    ftf.className = "from-the-field";
    ftf.innerHTML = `<span class="ftf-label">From the Field</span> ${escapeHtml(iv.howItWorks.ftf)}`;
    wrap.appendChild(ftf);
  }

  const rulesTitle = document.createElement("h3");
  rulesTitle.className = "iv-section-title";
  rulesTitle.textContent = "Rules of the Match";
  wrap.appendChild(rulesTitle);

  const ruleList = document.createElement("div");
  ruleList.className = "rule-list";
  iv.howItWorks.rules.forEach(rule => {
    const item = document.createElement("div");
    item.className = `rule-item rule-${rule.type}`;
    item.innerHTML = `<span class="rule-tag">${escapeHtml(rule.type.toUpperCase())}</span> ${escapeHtml(rule.text)}`;
    ruleList.appendChild(item);
  });
  wrap.appendChild(ruleList);

  return wrap;
}

function buildIvStars(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  const src = document.createElement("p");
  src.className = "iv-section-caption";
  src.textContent = iv.stars.source;
  wrap.appendChild(src);

  const grid = document.createElement("div");
  grid.className = "stars-grid";
  iv.stars.steps.forEach(step => {
    const s = document.createElement("div");
    s.className = "stars-step";
    s.innerHTML = `
      <div class="stars-letter">${escapeHtml(step.letter)}</div>
      <div class="stars-label">${escapeHtml(step.label)}</div>
      <div class="stars-desc">${escapeHtml(step.desc)}</div>`;
    grid.appendChild(s);
  });
  wrap.appendChild(grid);

  const exTitle = document.createElement("h3");
  exTitle.className = "iv-section-title";
  exTitle.textContent = iv.stars.example.title;
  wrap.appendChild(exTitle);

  const ex = iv.stars.example;
  const exBox = document.createElement("div");
  exBox.className = "stars-example";
  if (ex.question) {
    const qRow = document.createElement("div");
    qRow.className = "stars-example-row stars-example-question";
    qRow.innerHTML = `<span class="stars-example-label">Question</span><span class="stars-example-text" style="font-style:italic">${escapeHtml(ex.question)}</span>`;
    exBox.appendChild(qRow);
  }
  ["situation", "task", "action", "result"].forEach(key => {
    const row = document.createElement("div");
    row.className = "stars-example-row";
    row.innerHTML = `<span class="stars-example-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span><span class="stars-example-text">${escapeHtml(ex[key])}</span>`;
    exBox.appendChild(row);
  });
  wrap.appendChild(exBox);

  const tipsTitle = document.createElement("h3");
  tipsTitle.className = "iv-section-title";
  tipsTitle.textContent = "Tips";
  wrap.appendChild(tipsTitle);

  const tipsList = document.createElement("ul");
  tipsList.className = "iv-bullet-list";
  iv.stars.tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
  wrap.appendChild(tipsList);

  return wrap;
}

function buildIvQA(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  iv.commonQuestions.forEach(q => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `
      <div class="accordion-header-left">
        <span class="accordion-course">${escapeHtml(q.q)}</span>
        <span class="accordion-target">${escapeHtml(q.type)}</span>
      </div>
      <span class="accordion-chevron">&#9660;</span>`;
    header.addEventListener("click", () => item.classList.toggle("open"));

    const body = document.createElement("div");
    body.className = "accordion-body";
    body.innerHTML = `
      <div class="iv-qa-why"><strong>Why they ask:</strong> ${escapeHtml(q.why)}</div>
      <div class="iv-qa-approach"><strong>How to answer:</strong> ${escapeHtml(q.approach)}</div>
      ${q.ftf ? `<div class="from-the-field"><span class="ftf-label">From the Field</span> ${escapeHtml(q.ftf)}</div>` : ""}`;

    item.appendChild(header);
    item.appendChild(body);
    wrap.appendChild(item);
  });

  return wrap;
}

function buildIvAsk(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  iv.questionsToAsk.forEach(cat => {
    const section = document.createElement("div");
    section.className = "ask-category";

    const titleEl = document.createElement("div");
    titleEl.className = "ask-category-title";
    titleEl.textContent = cat.category;
    section.appendChild(titleEl);

    const noteEl = document.createElement("p");
    noteEl.className = "ask-category-note";
    noteEl.textContent = cat.note;
    section.appendChild(noteEl);

    const list = document.createElement("ul");
    list.className = "iv-bullet-list";
    cat.questions.forEach(q => {
      const li = document.createElement("li");
      li.className = "ask-question-item";
      li.textContent = q;
      list.appendChild(li);
    });
    section.appendChild(list);
    wrap.appendChild(section);
  });

  return wrap;
}

function buildIvBody(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  const src = document.createElement("p");
  src.className = "iv-section-caption";
  src.textContent = iv.bodyLanguage.source;
  wrap.appendChild(src);

  const grid = document.createElement("div");
  grid.className = "body-tip-grid";

  [["inPerson", "In-Person"], ["virtual", "Virtual"]].forEach(([key, label]) => {
    const col = document.createElement("div");
    col.className = "body-tip-card";

    const h3 = document.createElement("h3");
    h3.textContent = label;
    col.appendChild(h3);

    const list = document.createElement("ul");
    list.className = "iv-bullet-list";
    iv.bodyLanguage[key].forEach(tip => {
      const li = document.createElement("li");
      li.textContent = tip;
      list.appendChild(li);
    });
    col.appendChild(list);
    grid.appendChild(col);
  });
  wrap.appendChild(grid);

  const vlTitle = document.createElement("h3");
  vlTitle.className = "iv-section-title";
  vlTitle.textContent = "Recommended Videos";
  wrap.appendChild(vlTitle);

  const vl = document.createElement("div");
  vl.className = "video-links";
  iv.bodyLanguage.videoLinks.forEach(v => {
    const a = document.createElement("a");
    a.href = v.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "video-link";
    a.innerHTML = `<strong>${escapeHtml(v.title)}</strong><span class="video-source">${escapeHtml(v.source)}</span>`;
    vl.appendChild(a);
  });
  wrap.appendChild(vl);

  return wrap;
}

function buildIvAfter(iv) {
  const wrap = document.createElement("div");
  wrap.className = "iv-section";

  const src = document.createElement("p");
  src.className = "iv-section-caption";
  src.textContent = iv.afterInterview.source;
  wrap.appendChild(src);

  iv.afterInterview.steps.forEach((step, i) => {
    const s = document.createElement("div");
    s.className = "after-section";
    s.innerHTML = `
      <div class="after-num">${i + 1}</div>
      <div>
        <div class="after-title">${escapeHtml(step.title)}</div>
        <div class="after-detail">${escapeHtml(step.detail)}</div>
      </div>`;
    wrap.appendChild(s);
  });

  const note = document.createElement("div");
  note.className = "from-the-field";
  note.innerHTML = `<span class="ftf-label">How Rankings Work</span> ${escapeHtml(iv.afterInterview.rankingNote)}`;
  wrap.appendChild(note);

  return wrap;
}

// ── NAV HIGHLIGHT ─────────────────────────────────────────────────

function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionToNav = {
    templates: "#templates",
    bullets:   "#templates",
    linter:    "#templates",
    interview: "#interview",
    prompts:   "#prompts",
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const navHref = sectionToNav[entry.target.id];
        if (!navHref) return;
        navLinks.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === navHref);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(s => obs.observe(s));

  const footer = document.querySelector("footer");
  if (footer) {
    const footerObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        navLinks.forEach(a => a.classList.remove("active"));
      }
    }, { threshold: 0.1 });
    footerObs.observe(footer);
  }
}

// ── UTILITIES ─────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
