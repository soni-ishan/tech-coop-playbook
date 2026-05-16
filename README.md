🚧 **STATUS: PENDING MAJOR REFACTOR** 🚧

Major changes are incoming. The current resume templates in this repository are outdated and honestly, not very nice by current standards. I considered taking this repository private, but it will remain public to preserve links from past posts. Expect a massive overhaul to the layouts and framework soon. Proceed with the current builds at your own risk.

💻 The Tech Co-op Playbook
===============================

A "Mad Libs" style resume and career document generator, structured like a software project.

> **⚠️ compilation_error:** Do not submit resumes with `[brackets]`. You MUST replace variables with your own data. Submitting a template as-is will result in a runtime error (Rejection).

🚀 The Workflow
---------------

Treat your job search like a dev cycle.

### 1\. `npm install` (Setup)

Navigate to `/build_targets`.

-   **Level 0 User:** Open `/Level_0_Starter` for a basic template.

-   **Level 50 User:** Open `/Level_50_Veteran` for advanced layouts.

### 2\. `import { experience } from 'source_code'`

Open the `/source_code` directory to find your "functions" (bullet points).

-   **`CS_Core.md`**: Logic & structure variables (Algorithms, Data Structs).

-   **`CS_Electives.md`**: Specialized tech variables (AI, Web, Networks).

-   **`Math_Stat.md`**: Quant & analytical variables.

-   **`Survival_Jobs.md`**: Retail & service industry translation layers.

*Copy the best "functions" that match your history.*

### 3\. `npm run build` (Compile)

Paste the bullets into your template. **CRITICAL STEP:** Fill in the `[brackets]` with your specific metrics, tools, and project names.

-   Bad: "Built a website."

-   Good: "Architected `[Project Name]` using `[React/Vue]` to solve `[User Problem]`, reducing load times by `[X]%`."

### 4\. `npm test` (Linting)

Run your document against the checklists in `/linters`.

-   **`RESUME_LINTER.md`**: The pre-flight checklist. Checks for fatal errors (file names, cover sheets) and warnings (typos, bad formatting).

-   **`COVER_LETTER_GENERATOR.md`**: A "Hook" based template generator.

📂 Project Structure
--------------------

```
/
├── README.md               # You are here. The Documentation.
├── /source_code            # The "Mad Libs" Translators (Raw Bullet Points)
│   ├── CS_Core.md          # Core CS skills
│   ├── CS_Electives.md     # Specialized tech
│   ├── Math_Stat.md        # Math/Stats skills
│   └── Survival_Jobs.md    # Turning "Cashier" into "Client Success"
│
├── /build_targets          # The Templates (Output formats)
│   ├── Level_0_Starter     # Clean, simple formats for first-years
│   └── Level_50_Veteran    # Dense, skilled formats for seniors
│
├── /linters                # The Quality Control
│   ├── RESUME_LINTER.md          # The Checklist
│   └── COVER_LETTER_GENERATOR.md # The Cover Letter Template
│
└── /docs                   # Reference Manuals & Extra Tools
    ├── Resume_Refiner.md         # Advanced AI Prompts (The "Cold Email" Architect, etc.)
    ├── Personal_Notes.md         # Raw advice & "Unpopular Opinions"
    └── CONTRIBUTING.md           # How to contribute to this repo

```

### 📚 About /docs (Reference Material)

This folder contains the "Man Pages" for your career.

-   **Resume_Refiner.md:** Contains advanced LLM prompts for rewriting bullet points and drafting cold emails.

-   **Personal_Notes.md:** The raw, unfiltered advice that inspired this framework.

🛡️ sudo /whoami (Disclaimer)
-----------------------------

**I am not a Career Services Officer.**

I am a Computer Science undergraduate who has successfully landed **4 Co-op terms**. I built this repository to patch the gap between "Generic University Advice" and "What Actually Gets You Hired."

This framework is inspired by:

1.  **Personal Experience:** Tactics that survived real technical interviews.

2.  **Official Resources:** Guidelines provided by the U of R CESL Office.

3.  **Community Feedback:** Struggles shared by peers who couldn't translate "Coursework" into "Experience."

**Use this as a framework, not a guarantee.** Your mileage may vary. Good luck.
