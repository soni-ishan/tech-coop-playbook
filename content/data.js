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
      { text: "Single-column layout. No columns, text boxes, or graphics (ATS parsers reject them).", tag: "ATS" }
    ],
    warnings: [
      { text: '"References available upon request" removed. It wastes space; recruiters ask later.', tag: "CONTENT" },
      { text: "Phone number included. Required by the University Co-op Office.", tag: "CONTACT" },
      { text: "LinkedIn and GitHub are clickable hyperlinks, not plain text URLs.", tag: "LINKS" },
      { text: "Full street address removed. City, Province is sufficient.", tag: "PRIVACY" },
      { text: "Relevant Coursework tweaked for this specific role, not a static list.", tag: "TAILORING" },
      { text: "Final spell check complete. Typos are an immediate rejection.", tag: "QUALITY" }
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
    }
  ]
};
