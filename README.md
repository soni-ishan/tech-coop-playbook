# Tech Co-op Playbook v2.0

An interactive website for CS co-op students at the University of Regina.
A Mad Libs-style resume framework: pick a template, grab bullets from the library, fill in the brackets.

**Live site:** deploy via GitHub Pages (Settings → Pages → Deploy from branch `main`, root `/`).

## Structure

```
/
├── index.html          # The website (single page, all sections)
├── style.css           # Styles
├── app.js              # Interactivity (accordion, copy, linter, cover letter preview)
├── content/
│   └── data.js         # All bullets, linter items, and prompts as structured JS
└── templates/
    ├── starter.tex     # Jake's Resume template — Level 0 (projects-first)
    └── veteran.tex     # Jake's Resume template — Level 50 (experience-first)
```

## Contributing

**Adding a bullet:** edit `content/data.js`. Find the right category (`csCore`, `csElectives`, `mathStat`, `survivalJobs`), find the course, add a string to an angle's `bullets` array. Use `[brackets]` for variables.

**Adding a course:** add a new object to the right category array in `data.js` following the existing shape:
`{ course, target, angles: [{ name, bullets: [] }] }`.

**Adding a survival job:** add to the `survivalJobs` array in `data.js`.

**Fixing a template:** edit `templates/starter.tex` or `templates/veteran.tex` directly.

## Template credit

LaTeX templates based on [Jake's Resume](https://github.com/jakegut/resume) by [@jakegut](https://github.com/jakegut),
itself based on [sb2nov/resume](https://github.com/sb2nov/resume). MIT License.

---

*"Use this as a framework, not a guarantee. Good luck."*
