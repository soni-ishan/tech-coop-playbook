# Tech Co-op Playbook

An interactive resource for Computer Science co-op students at the University of Regina.

**Live site:** [soni-ishan.github.io/tech-coop-playbook](https://soni-ishan.github.io/tech-coop-playbook)

## What's inside

- **Resume templates:** two LaTeX templates (projects-first and experience-first) based on Jake's Resume
- **Bullet library:** copy-ready resume bullets for CS courses, adapted to specific job targets
- **Pre-flight linter:** checklist before submitting to Career Connect
- **Interview prep:** how the UofR co-op match process works, STAR method, common questions, what to ask
- **AI prompts:** structured prompts for resume critique, tailoring, mock interviews, and company research

## Project structure

```
/
├── index.html          # Single-page app (all sections)
├── style.css           # Styles
├── app.js              # Rendering logic (bullet library, linter, interview builder)
├── content/
│   └── data.js         # All content as structured JS objects
└── templates/
    ├── starter.tex     # Level 0 - projects-first layout
    └── veteran.tex     # Level 50 - experience-first layout
```

## Running locally

No build step. Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
# or
python -m http.server
```

## Deploying

GitHub Pages: Settings → Pages → Deploy from branch `main`, folder `/`.

## Feedback

This is a personal project built from one person's experience across 4 UofR co-op terms. The content is opinionated by design - it reflects what worked, not a consensus view.

If you spot a broken link, factual error, or layout bug, open an issue. If you've done a co-op term and want to flag something that's inaccurate or suggest a bullet, open an issue with the details and I'll consider it.

I'm not actively looking for pull requests on content, but I'll read them.

## Credits

**Resume templates:** Based on [Jake's Resume](https://github.com/jakegut/resume) by [@jakegut](https://github.com/jakegut), itself based on [sb2nov/resume](https://github.com/sb2nov/resume). MIT License. Adapted with section reordering and co-op-specific guidance for UofR students.

**Interview content:** Draws on materials from the University of Regina Centre for Experiential & Service Learning (CESL), the Regina Open Door Society Employment Readiness Program, the Government of Canada Job Bank, and the University of Saskatchewan Student Employment & Career Centre (SECC). All interpretation is personal and not an official publication of any of these organizations.

---

*"Use this as a framework, not a guarantee. Good luck."*
