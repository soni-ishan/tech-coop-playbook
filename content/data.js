const DATA = {
  bullets: {
    csCore: [
      {
        course: "CS 110/115: Intro to Programming & OOP",
        target: "Software Developer / Engineer",
        angles: [
          {
            name: "The Architect (OOP Focus)",
            bullets: [
              "Architected a [Type of Application, e.g., Text-Based RPG] using [Language, e.g., C++], implementing [OOP Concept 1] and [OOP Concept 2] to manage [Complex Game State/Inventory System].",
              "Designed a modular [System Name] class hierarchy, encapsulating data to ensure system security and reduce code redundancy by [approx %]."
            ]
          },
          {
            name: "The Logic Builder (Problem Solving)",
            bullets: [
              "Developed modular scripts to solve [Specific Logic Puzzle], focusing on code reusability and reducing runtime through [Optimization Technique]."
            ]
          }
        ]
      },
      {
        course: "CS 201/301: Digital Systems & Architecture",
        target: "Embedded / Systems Engineer",
        angles: [
          {
            name: "The Hardware Interface",
            bullets: [
              "Programmed in [Assembly Language] to interact directly with hardware registers, optimizing [Specific Task] for execution speed.",
              "Designed and simulated digital logic circuits for a [Component, e.g., 4-bit ALU], analyzing gate-level latency and propagation delays."
            ]
          },
          {
            name: "The Systems Analyst",
            bullets: [
              "Analyzed CPU Pipelining and Cache Memory performance to optimize [Code/Algorithm] for [Specific Architecture] constraints."
            ]
          }
        ]
      },
      {
        course: "CS 210/340: Data Structures & Algorithms",
        target: "Software Engineer / Interview Prep",
        angles: [
          {
            name: "The Optimizer (Efficiency Focus)",
            bullets: [
              "Implemented and compared [Sorting Algorithm A] vs. [Sorting Algorithm B] for a dataset of [Number] elements, analyzing Big-O complexity to optimize runtime.",
              "Applied Dynamic Programming to solve the [Classic Problem, e.g., Knapsack], reducing time complexity from O(2^n) to O(n*W)."
            ]
          },
          {
            name: "The Graph Theory Specialist (CS 340)",
            bullets: [
              "Constructed a Graph-based data model to represent [Network/Map Context], implementing [Algorithm, e.g., Dijkstra's/A*] for optimal pathfinding.",
              "Utilized [Data Structure, e.g., Hash Maps/BSTs] to build a high-performance [System Name] for rapid data retrieval."
            ]
          }
        ]
      },
      {
        course: "CS 215: Web & Database Programming",
        target: "Full Stack / Backend Developer",
        angles: [
          {
            name: "The Full Stack Developer",
            bullets: [
              "Integrated a [Database, e.g., MySQL] backend with a [Frontend Stack, e.g., HTML/CSS/JS] interface to create a persistent [System Name, e.g., Inventory Manager].",
              "Implemented user authentication and session management for [App Name], ensuring secure access control for [Number] simulated users."
            ]
          },
          {
            name: "The Backend Engineer (SQL Focus)",
            bullets: [
              "Designed a normalized Relational Database Schema for [Project Name], writing complex SQL JOINs to generate analytics reports on [Data Point]."
            ]
          }
        ]
      },
      {
        course: "CS 335: Computer Networks",
        target: "Network / Infrastructure Engineer",
        angles: [
          {
            name: "The Protocol Engineer (App & Transport Layers)",
            bullets: [
              "Analyzed HTTP and DNS protocols to optimize [Web App Performance], diagnosing latency issues using [Tool, e.g., Wireshark].",
              "Implemented a client-server chat application using [TCP/UDP Sockets], handling congestion control and reliable data transfer."
            ]
          },
          {
            name: "The Network Architect (Network & Link Layers)",
            bullets: [
              "Simulated IP Addressing and Subnetting schemes to design a scalable network architecture for [Scenario, e.g., Campus Network].",
              "Implemented Routing Algorithms (e.g., Distance Vector) to optimize packet forwarding paths in a simulated [Topology Type]."
            ]
          }
        ]
      },
      {
        course: "CS 350: Programming Language Concepts",
        target: "Compiler / Language Engineer",
        angles: [
          {
            name: "The Compiler Designer",
            bullets: [
              "Designed a Context-Free Grammar (BNF) and Abstract Syntax Tree for a [Custom Language/DSL], implementing a lexical analyzer to parse input.",
              "Implemented a Recursive Descent Parser to validate code structure, handling syntax errors and ambiguity for [Language Feature]."
            ]
          },
          {
            name: "The Functional Programmer",
            bullets: [
              "Developed functional programs using [Language, e.g., Scheme/Haskell], utilizing Higher-Order Functions and Recursion to solve [Problem] without mutable state."
            ]
          }
        ]
      },
      {
        course: "CS 372: Software Engineering Methodology",
        target: "Software Engineer / Project Lead",
        angles: [
          {
            name: "The Technical Project Manager",
            bullets: [
              "Led a team of [Number] developers to build [App Name], utilizing Agile/Scrum methodologies to manage [Number] sprints and deliverables.",
              "Designed comprehensive UML diagrams and requirements documentation for [Project Name], ensuring alignment between client needs and technical implementation."
            ]
          }
        ]
      }
    ],

    csElectives: [
      {
        course: "CS 207: Building Interactive Gadgets",
        target: "Embedded Systems / IoT Engineer",
        angles: [
          {
            name: "The IoT Builder",
            bullets: [
              "Prototyped an IoT device using [Hardware, e.g., Arduino Uno R4], integrating sensors to monitor [Metric] and transmit data via [Protocol].",
              "Programmed microcontrollers in C/C++ to control physical actuators based on real-time environmental data from [Sensor Type]."
            ]
          }
        ]
      },
      {
        course: "CS 320/421: Artificial Intelligence (Intro & Adv)",
        target: "ML Engineer / Data Scientist",
        angles: [
          {
            name: "The Agent Builder",
            bullets: [
              "Implemented Search Algorithms (e.g., Minimax, Alpha-Beta Pruning) to develop an autonomous agent capable of solving [Game/Environment] with optimal efficiency.",
              "Applied Constraint Satisfaction Problems (CSP) logic to solve [Scheduling/Logistics Challenge] without brute-force."
            ]
          },
          {
            name: "The Deep Learning Engineer",
            bullets: [
              "Engineered a Neural Network using [Framework, e.g., PyTorch/TensorFlow] to classify [Dataset Name], achieving [X]% accuracy through hyperparameter tuning."
            ]
          }
        ]
      },
      {
        course: "CS 412: Algorithm Analysis",
        target: "Software Engineer / R&D",
        angles: [
          {
            name: "The Theorist",
            bullets: [
              "Proved the correctness and efficiency of [Complex Algorithm] using mathematical induction, analyzing worst-case and average-case time complexity.",
              "Designed NP-Complete approximation algorithms for [Optimization Problem], balancing computational cost with solution accuracy."
            ]
          }
        ]
      },
      {
        course: "CS 425: Image Processing",
        target: "Computer Vision Engineer",
        angles: [
          {
            name: "The Vision Engineer",
            bullets: [
              "Developed an image processing pipeline using [Library, e.g., OpenCV] and Python to detect [Objects/Features] in real-time video feeds.",
              "Implemented Edge Detection (Sobel/Canny) and Image Segmentation algorithms to analyze [Type of Imagery] for automated classification."
            ]
          }
        ]
      },
      {
        course: "CS 428: Human Computer Communications",
        target: "UI/UX Engineer / Frontend Dev",
        angles: [
          {
            name: "The UX Designer",
            bullets: [
              "Conducted User Centered Design workshops to prototype an interface for [Target Audience], iterating designs based on [Number] rounds of usability testing.",
              "Designed an accessible UI for [App Name] adhering to WCAG standards, ensuring compatibility with assistive technologies."
            ]
          }
        ]
      },
      {
        course: "CS 458: Virtual & Augmented Reality",
        target: "VR/AR Developer / Game Dev",
        angles: [
          {
            name: "The Immersive Builder",
            bullets: [
              "Built an immersive [VR/AR Experience] using [Engine, e.g., Unity/Unreal], implementing physics-based interactions and spatial audio.",
              "Designed intuitive 3D user interfaces for [Application Context], optimizing rendering performance to maintain high framerates."
            ]
          }
        ]
      },
      {
        course: "CS 476: Software Development Project (Capstone)",
        target: "Full Stack Developer / Software Engineer",
        angles: [
          {
            name: "The Product Owner",
            bullets: [
              "Co-developed [App Name], a full-stack production application for [Real World Client/Problem], handling the entire SDLC from requirements gathering to deployment.",
              "Integrated [Specific APIs] and [Database] to support [Core Feature], ensuring scalability for [Number] concurrent users.",
              "Implemented CI/CD pipelines using [Tool, e.g., GitHub Actions] to automate testing and deployment workflows."
            ]
          }
        ]
      },
      {
        course: "CS 490DJ: Topics in Cybersecurity",
        target: "Cyber Analyst / Security Engineer",
        angles: [
          {
            name: "The Security Analyst",
            bullets: [
              "Conducted Vulnerability Assessments on [Target System], identifying potential vectors for SQL Injection and XSS attacks.",
              "Implemented cryptographic protocols (AES/RSA) to secure data transmission in a [Application Name] prototype.",
              "Analyzed network traffic logs to identify [Attack Pattern] signatures, proposing mitigation strategies for enterprise infrastructure."
            ]
          }
        ]
      }
    ],

    mathStat: [
      {
        course: "MATH 110/111: Calculus I & II",
        target: "Data Science / Engineering",
        angles: [
          {
            name: "The Optimizer (Modeling Focus)",
            bullets: [
              "Applied Calculus-based optimization techniques to model [Real World Scenario, e.g., fluid rates], determining critical points for maximum efficiency.",
              "Analyzed rates of change in [System Name] using derivatives and integrals to predict future states of the system with [Level of Accuracy]."
            ]
          }
        ]
      },
      {
        course: "MATH 122: Linear Algebra",
        target: "Data Science / ML / Graphics",
        angles: [
          {
            name: "The Data Scientist (Matrix Focus)",
            bullets: [
              "Utilized matrix operations and eigenvalues to transform and analyze multidimensional datasets related to [Topic].",
              "Modeled [System Name] using linear systems of equations, applying Gaussian elimination to determine system consistency."
            ]
          },
          {
            name: "The Graphics Engineer (Vector Focus)",
            bullets: [
              "Applied vector space theory to simulate [3D movement/Physics] in a theoretical environment, calculating projections and transformations for [Object]."
            ]
          }
        ]
      },
      {
        course: "STAT 160/252: Intro to Stats & Probability",
        target: "Data Analyst / QA Engineer",
        angles: [
          {
            name: "The Analyst (Inference Focus)",
            bullets: [
              "Conducted Hypothesis Testing (t-tests, Chi-square) on [Dataset Name] to determine statistical significance of [Variable A] on [Variable B].",
              "Applied Linear Regression models to a [Dataset], identifying correlations and forecasting future trends with [approx %] confidence."
            ]
          },
          {
            name: "The Quality Control Engineer (Probability Focus)",
            bullets: [
              "Utilized probability distributions (Normal, Binomial) to model risk and failure rates in a [Theoretical System], predicting uptime probability."
            ]
          }
        ]
      }
    ],

    survivalJobs: [
      {
        course: "Food Service: Server, Barista, Fast Food",
        target: "Data / FinTech / Engineering Roles",
        angles: [
          {
            name: "Target: Data / FinTech (Accuracy Focus)",
            bullets: [
              "Processed high-volume financial transactions during peak hours, maintaining 100% cash handling accuracy and reconciling end-of-day ledgers for [approx $ Amount].",
              "Managed inventory data for [Number] SKUs, utilizing [System Name] to track stock levels and predict supply needs."
            ]
          },
          {
            name: "Target: Developer / Engineering (Efficiency Focus)",
            bullets: [
              "Optimized service workflows in a high-pressure environment to reduce average customer wait times by [approx %].",
              "Prioritized concurrent tasks under strict time constraints, ensuring synchronized execution between front-of-house and back-of-house teams for [Number] guests."
            ]
          }
        ]
      },
      {
        course: "Retail & Sales: Cashier, Stock, Sales Associate",
        target: "Data Analyst / IT Support / Help Desk",
        angles: [
          {
            name: "Target: Data Analyst Roles",
            bullets: [
              "Analyzed daily sales trends to reorganize product displays, resulting in a [approx %] increase in upsell conversion rates.",
              "Maintained data integrity within the [POS/CRM System], processing returns and exchanges with strict adherence to policy."
            ]
          },
          {
            name: "Target: IT Support / Help Desk",
            bullets: [
              "Diagnosed and resolved user issues regarding [Product/Service], translating technical specifications into clear, accessible language for non-technical customers.",
              "Troubleshot point-of-sale hardware malfunctions during live operations, minimizing downtime to under [Timeframe]."
            ]
          }
        ]
      },
      {
        course: "General Labor: Warehouse, Construction",
        target: "Engineering / DevOps",
        angles: [
          {
            name: "Target: Engineering / DevOps",
            bullets: [
              "Executed project tasks in strict adherence to safety protocols and blueprint specifications, ensuring zero safety incidents over [Time Period].",
              "Collaborated within a [Number]-person team to meet strict project deadlines, coordinating hand-offs to maintain continuous workflow."
            ]
          }
        ]
      },
      {
        course: "Academic Tutor / Teaching Assistant",
        target: "Software Developer",
        angles: [
          {
            name: "Target: Software Developer",
            bullets: [
              "Deconstructed abstract concepts (e.g., [Concept]) into step-by-step logic, mirroring the process of algorithmic decomposition.",
              "Debugged student logic errors in real-time, identifying root misconceptions and implementing targeted learning strategies."
            ]
          }
        ]
      }
    ]
  },

  linter: {
    fatal: [
      { text: "Cover Sheet included: the mandatory Resume Cover Sheet for Career Connect.", tag: "UNIVERSITY" },
      { text: "File named exactly: Firstname_Lastname_JobTitle.pdf", tag: "FILE NAME" },
      { text: "Exported as PDF, not a Word document.", tag: "FORMAT" },
      { text: "Single-column layout. No columns, text boxes, or graphics (ATS parsers reject them).", tag: "ATS" },
      { text: "Portfolio complete: Cover Page, resume, and transcript all uploaded to Career Connect before the deadline.", tag: "CESL" }
    ],
    warnings: [
      { text: '"References available upon request" removed. It wastes space; recruiters ask later.', tag: "CONTENT" },
      { text: "Phone number included. Required by the University Co-op Office.", tag: "CONTACT" },
      { text: "LinkedIn and GitHub are clickable hyperlinks, not plain text URLs.", tag: "LINKS" },
      { text: "Full street address removed. City, Province is sufficient.", tag: "PRIVACY" },
      { text: "Relevant Coursework tweaked for this specific role, not a static list.", tag: "TAILORING" },
      { text: "Final spell check complete. Typos are an immediate rejection.", tag: "QUALITY" },
      { text: "Languages listed are specific, not generic. Write 'Python (Pandas, Flask)' not just 'Python'.", tag: "SPECIFICITY" },
      { text: "Applying outside your city? Add 'Relocating to [City]' in your header.", tag: "LOCATION" }
    ],
    style: [
      { text: "Length: 1 page maximum. Never exceed one page.", tag: "LENGTH" },
      { text: "Margins: 0.5–0.75 inches, narrow but readable.", tag: "MARGINS" },
      { text: "Font: Aptos, Calibri, or Roboto at 10–12pt. No Times New Roman.", tag: "FONT" },
      { text: "Subtle accent color on section headers (dark blue or dark green recommended).", tag: "COLOR" }
    ]
  },

  prompts: [
    {
      title: "The Roast",
      description: "Find the weakest spots in your resume. Run this before every application.",
      text: "Act as a strict Technical Recruiter for a [Target Role, e.g., Google Software Engineer]. Review the resume pasted below.\n\n1. Identify the 3 weakest bullet points and explain WHY they are weak.\n\n2. Point out any \"fluff\" words (e.g., \"passionate\", \"hard worker\") that I should delete.\n\n3. Rate the \"Evidence vs. Claims\" ratio. Do I prove my skills, or just list them? Be harsh and specific.\n\n[PASTE YOUR RESUME HERE]"
    },
    {
      title: "The Translator",
      description: "Tailor your resume to a specific job description without inventing facts.",
      text: "I am applying for this specific Job Description (JD):\n[PASTE JOB DESCRIPTION HERE]\n\nHere is my current resume:\n[PASTE RESUME HERE]\n\nTask: Rewrite my \"Projects\" and \"Professional Experience\" bullet points to strictly align with the keywords and priorities found in the JD.\n\nConstraint: Do not invent facts. Only rephrase my existing experience to match the terminology used in the JD. Highlight the specific keywords you inserted."
    },
    {
      title: "The Bullet Builder",
      description: "Turn a rough description of what you did into a polished Action + Task + Result bullet.",
      text: "I need to write a resume bullet point for my time as a [Job Title, e.g., Barista].\n\nWhat I actually did: [Describe in plain language what you did — messy is fine]\n\nTarget Role: I am applying for a [Target Role, e.g., Data Analyst internship].\n\nTask: Write 3 different options for this bullet point using the \"Action + Task + Result\" format. Focus on efficiency, accuracy, and measurable impact. Use strong action verbs."
    },
    {
      title: "The Cold Email Architect",
      description: "Generate a LinkedIn message that gets replies without begging for a job.",
      text: "I want to reach out to a [Role, e.g., Senior Developer] at [Company] via LinkedIn.\n\nMy Goal: I want to ask about their team's tech stack, NOT ask for a job directly.\n\nMy Background: I am a CS student at the University of Regina interested in [Specific Tech/Domain].\n\nTask: Draft a 50-word message that is polite, specific, and asks a smart technical question to start a real conversation. Do not sound desperate. Do not use a template greeting."
    },
    {
      title: "The Mock Interviewer",
      description: "Practice behavioral questions before your interview. Paste a job description and get realistic questions with coaching on what they're actually evaluating.",
      text: "I have an interview coming up for this role:\n[PASTE JOB DESCRIPTION HERE]\n\nMy background:\n[PASTE YOUR RESUME OR A BRIEF SUMMARY]\n\nTask:\n1. Generate 5 behavioral interview questions tailored to this specific role and org.\n2. For each question, explain in one sentence what the interviewer is actually trying to evaluate.\n3. After I answer each question, give me specific feedback: What landed? What was vague? What should I cut or add?\n\nStart with question 1 and wait for my answer before continuing."
    },
    {
      title: "The Company Research Brief",
      description: "Walk into any interview knowing more about the org than other candidates.",
      text: "I have an interview with [Organization Name] for a [Role Title] position.\n\nHelp me prepare a research brief with:\n1. What this organization does and who they serve (2–3 sentences).\n2. Any recent news, projects, or initiatives relevant to the role.\n3. 2–3 specific talking points I can use when asked ‘Why do you want to work here?’\n4. One smart question I could ask the interviewer based on the org’s actual work.\n\nKeep it factual. Flag anything you’re uncertain about so I can verify it before the interview."
    }
  ],

  interview: {
    disclaimer: "All interview content reflects Ishan’s personal experience across 4 UofR co-op terms (Government of Saskatchewan, SaskEnergy, SaskTel). Interview formats and technical depth vary by employer and role.",

    howItWorks: {
      process: [
        {
          num: "1",
          phase: "Applications Open",
          detail: "Submit your resume, cover letter (if required), and transcript through Career Connect before the posted deadline. Most postings open in January (Winter term) and September (Fall term)."
        },
        {
          num: "2",
          phase: "Interview Weeks",
          detail: "Employers review applications and invite shortlisted students for interviews — typically 1 to 2 rounds. Interviews are usually 30–45 minutes, mostly behavioral with light technical questions."
        },
        {
          num: "3",
          phase: "Rankings Submitted",
          detail: "After interviews close, both students and employers independently rank each other in Career Connect. You will not see the employer’s ranking; they will not see yours."
        },
        {
          num: "4",
          phase: "Match Day",
          detail: "CESL runs the matching algorithm. You receive your placement result. If matched, you have a short window to accept before it moves to the next student."
        },
        {
          num: "5",
          phase: "Post-Match",
          detail: "Accept your match in Career Connect, complete any remaining CESL admin, coordinate a start date with your employer, and prepare for your first day."
        }
      ],
      stats: [
        { term: "Term 1 — GoS (double term)", apps: "40–50", interviews: "2–3", result: "Matched #1 both rounds" },
        { term: "Term 2 — SaskEnergy", apps: "10–12", interviews: "1", result: "Matched #1" },
        { term: "Term 4 — SaskTel", apps: "4–5", interviews: "2", result: "Ranked #1 & #2, different teams" }
      ],
      ftf: "Co-op salary is not negotiable at UofR. The university sets a minimum hourly floor based on your year of study; the employer may choose to pay above it. Focus your energy on landing the match, not the rate.",
      rules: [
        { type: "fatal", text: "Miss the application deadline and you are out for the round. Set a calendar reminder the day postings open." },
        { type: "fatal", text: "Fail to submit your rankings in Career Connect by the deadline and you will not be matched, even if an employer ranked you #1." },
        { type: "warn", text: "Rank every employer you are genuinely willing to work for, in order of preference. A low rank is not a rejection — it just means the algorithm tries your top choice first." },
        { type: "info", text: "You can match to a position you ranked 3rd if your top two choices matched with other students. The algorithm is mutual: both sides must have ranked each other." }
      ]
    },

    stars: {
      source: "STARS framework sourced from: Government of Canada Job Bank, University of Saskatchewan SECC, and the Regina Open Door Society Employment Readiness Program.",
      steps: [
        { letter: "S", label: "Situation", desc: "Set the scene briefly. Where were you working? What was the context? Keep it to 1–2 sentences — don’t over-explain." },
        { letter: "T", label: "Task", desc: "What was your specific responsibility? Distinguish your role from the team’s role." },
        { letter: "A", label: "Action", desc: "What did YOU do? Use ‘I’, not ‘we’. Be specific about the decisions and steps you took. This is the most important part." },
        { letter: "R", label: "Result", desc: "What happened? Quantify wherever possible — hours saved, percentage improvement, number of users, dollar amount." },
        { letter: "S", label: "Skills", desc: "What skill did this demonstrate? Tie it back to the role you are applying for. Make the connection explicit." }
      ],
      example: {
        title: "Worked Example — Power Query Automation",
        situation: "At the Government of Saskatchewan, the team manually compiled vehicle charge data from multiple Excel files every week.",
        task: "I was asked to find a way to streamline the weekly reporting process.",
        action: "I built a Power Query pipeline that automatically pulled, transformed, and consolidated data from the source files into a single report with one refresh.",
        result: "Eliminated 10+ hours of manual processing per week, freeing the team to focus on analysis rather than data entry.",
        skills: "Data automation, Excel/Power Query, analytical thinking. Directly relevant to any analyst, developer, or operations role."
      },
      tips: [
        "Prepare 4–5 STARS stories before your interview. Most behavioral questions can be answered from the same pool of examples.",
        "Avoid saying ‘we’ without explaining your specific contribution — interviewers are evaluating you, not your team.",
        "No work experience? Course projects count. A database assignment is a real deliverable.",
        "If you blank on a quantifiable result, say: ‘The project was well-received by the team’ — vague but honest."
      ]
    },

    commonQuestions: [
      {
        q: "Tell me about yourself.",
        type: "Behavioral",
        why: "Interviewers use this to calibrate you quickly. They want a 60–90 second overview, not your life story. A rambling answer signals poor communication.",
        approach: "Use PAWS: Past (where you’ve studied/worked), Abilities (your top 2–3 technical skills), Why Here (specific reason you applied), Summary (one closing sentence). Keep it under 90 seconds.",
        ftf: "I opened every interview with a practiced version: ‘I’m a [year]-year CS student at UofR specializing in [X]. Last term I worked at [Org] on [brief project]. I applied here because [specific reason].’ Practiced it 10+ times before the interview."
      },
      {
        q: "What is your greatest strength?",
        type: "Behavioral",
        why: "They want self-awareness and the ability to communicate value clearly. A generic answer like ‘I’m a hard worker’ is a red flag.",
        approach: "Name one specific strength, anchor it with a concrete 2-sentence example, then tie it to what you’d bring to this role.",
        ftf: null
      },
      {
        q: "What is your greatest weakness?",
        type: "Behavioral",
        why: "They’re testing self-awareness and honesty. Saying ‘I work too hard’ fools no one. A real weakness with a growth plan is the correct answer.",
        approach: "Name a real but non-critical weakness, describe one concrete step you’ve taken to improve it, and briefly show recent progress. Do not pick a weakness that is core to the job.",
        ftf: null
      },
      {
        q: "Tell me about a time you worked in a team.",
        type: "Behavioral",
        why: "Co-op roles are team-based. They want evidence you can collaborate, handle disagreement, and still deliver.",
        approach: "Use STARS. Focus on your specific contribution, not the team’s. If there was friction, show how you helped resolve it. Course group projects count.",
        ftf: null
      },
      {
        q: "Tell me about a time you faced a conflict or disagreement.",
        type: "Behavioral",
        why: "They want emotional maturity and communication skills. Blaming others or saying ‘I’ve never had a conflict’ are both wrong answers.",
        approach: "Use STARS. Pick a conflict about a work or project decision, not a personality clash. Show you listened, communicated directly, and reached a resolution. Emphasize what you learned.",
        ftf: null
      },
      {
        q: "Why do you want to work here / in this role?",
        type: "Motivational",
        why: "Generic enthusiasm does not land. They want to see that you researched the organization and can articulate a specific connection.",
        approach: "Research the org before the interview: What do they build? What problems do they solve? Connect one specific thing about them to one specific thing about your background or goals. Avoid ‘great culture’ — you haven’t worked there yet.",
        ftf: "For SaskEnergy, I mentioned their specific infrastructure work and how it connected to my interest in systems that affect everyday life. That specificity stood out — most candidates answer this question generically."
      },
      {
        q: "On a scale of 1 to 5, how would you rate yourself on [technology X]?",
        type: "Technical",
        why: "They are calibrating your skill level to set expectations. Inflating your score will backfire on the job. Under-selling is unnecessary.",
        approach: "Be honest. A 3 with a clear explanation beats a 5 you cannot back up. Follow with what you’ve done with that tech and what you’re still learning. Example: ‘I’d say a 3 — I’ve used it for [project] but haven’t worked with [advanced feature] yet.’",
        ftf: "I was asked this at SaskTel about SQL. I said 3, explained I’d written complex JOINs in CS 215 but hadn’t used stored procedures in production. They appreciated the honesty."
      },
      {
        q: "Do you have experience with [technology X]? Give an example.",
        type: "Technical",
        why: "They want a specific example, not a yes/no. Even one course-project use is better than a vague claim.",
        approach: "If yes: give a one-sentence STARS example immediately. If no: be honest, then pivot — ‘I haven’t used it professionally, but I’ve worked with [related tech] and I’m comfortable picking up new tools. I’ve already started looking at it.’",
        ftf: null
      },
      {
        q: "Give an example of something you automated or improved.",
        type: "Technical",
        why: "Common in analyst, developer, and operations roles. They want evidence of initiative and technical problem-solving.",
        approach: "Use STARS. Quantify the before and after. Course projects that automated something count — a data pipeline, a script that replaced repetitive steps, a web scraper.",
        ftf: "This is the Power Query story. Eliminated 10+ hours of manual weekly processing. I used this answer across multiple interviews with different orgs — the principle translates even if they don’t know the specific tool."
      }
    ],

    questionsToAsk: [
      {
        category: "About the Day-to-Day",
        note: "Shows you’re thinking practically about the role, not just trying to get the position.",
        questions: [
          "What does a typical week look like for someone in this role?",
          "What would you want me to have accomplished by the end of my first month?",
          "What tools and languages does the team use day-to-day?"
        ]
      },
      {
        category: "About the Team",
        note: "Signals that you care about fit and collaboration, not just the position.",
        questions: [
          "How does the team typically onboard co-op students?",
          "How many people are on the team I’d be joining?",
          "Do co-op students get exposure to the full codebase, or is the work more task-specific?"
        ]
      },
      {
        category: "About the Organization",
        note: "Shows you researched the org and are thinking about impact.",
        questions: [
          "What is the team currently focused on building or improving this term?",
          "What do you find most interesting about working here?",
          "Are there any challenges the team is working through that a co-op student might help with?"
        ]
      },
      {
        category: "Active Listening — Bring Something Back",
        note: "Ask about something the interviewer mentioned earlier in the conversation. This is one of the strongest signals you can send — it shows you were genuinely paying attention. Only do this if it’s natural and genuine. Never force it.",
        questions: [
          "Earlier you mentioned [X] — could you tell me more about how that works?",
          "You brought up [Y] — is that something a co-op student would get involved in, or is it more senior-level work?",
          "I was interested in what you said about [Z] — is that a recent shift for the team?"
        ]
      }
    ],

    bodyLanguage: {
      source: "Tips adapted from: Regina Open Door Society Employment Readiness Program and Government of Canada interview preparation resources.",
      inPerson: [
        "Arrive 5–10 minutes early. Not 20. Not on time.",
        "Firm handshake — one pump, confident grip, eye contact.",
        "Sit up straight from the moment you walk in. Posture signals confidence before you say a word.",
        "Keep hands on the table or in your lap. Don’t fidget with a pen, ring, or zipper.",
        "Maintain natural eye contact — not a stare, but enough to show you’re engaged.",
        "Nod occasionally to show active listening.",
        "Smile when it’s natural — especially at the start and end.",
        "Don’t cross your arms. It reads as defensive."
      ],
      virtual: [
        "Log in 5 minutes early. Test camera and microphone the night before, not 2 minutes before.",
        "Light source in front of you, not behind. A window behind you turns you into a silhouette.",
        "Look at the camera when speaking, not at your own video feed.",
        "Clean, neutral background — or a plain virtual background tested in advance.",
        "Close every unneeded tab. Mute your phone. A notification mid-answer is memorable for the wrong reasons.",
        "If audio or video drops, say so immediately and calmly. How you handle it matters."
      ],
      videoLinks: [
        {
          title: "Body Language in Job Interviews",
          url: "https://www.youtube.com/watch?v=PCWVi5pAa30",
          source: "Recommended by RODS Employment Readiness Program"
        },
        {
          title: "Succeeding in the Job Interview",
          url: "https://www.youtube.com/watch?v=0rntPudFPGM",
          source: "Recommended by RODS Employment Readiness Program"
        }
      ]
    },

    afterInterview: {
      source: "Process reflects UofR CESL Career Connect match system.",
      steps: [
        {
          title: "Write a thank you email — yourself",
          detail: "Send a brief thank you within 24 hours. Write it yourself, in your own words, personalized to the specific conversation. Mention one thing you discussed. Do not use AI — a generic AI thank you is worse than no thank you at all. One short paragraph is enough."
        },
        {
          title: "Log your notes while they’re fresh",
          detail: "Write down the questions you were asked, your answers, what felt strong, and what you’d do differently. This becomes your prep material for the next interview."
        },
        {
          title: "Submit your rankings in Career Connect",
          detail: "Rank every employer you are genuinely willing to work for, in order of preference. Missing the ranking deadline means you will not be matched, even if the employer ranked you first."
        },
        {
          title: "Wait for Match Day",
          detail: "CESL will notify you of your result. If matched, accept in Career Connect within the window. If not matched, follow up with your CESL coordinator — there may be a second round."
        }
      ],
      rankingNote: "Both students and employers submit independent rankings. The algorithm finds mutual matches starting from each party’s top choice. You can match to a position you ranked 3rd if your top two choices matched with other students."
    }
  }
};
