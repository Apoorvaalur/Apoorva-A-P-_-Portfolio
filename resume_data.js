/**
 * Apoorva A P - Portfolio Data Model
 * Extracted from Official Resume & Formatted for DeveloperFolio Glassmorphism Theme
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Apoorva A P",
    title: "Software Engineer & Distributed Systems Enthusiast",
    subtitle: "Computer Science Engineering Graduate • Full-Stack Web Developer • Cloud Systems Researcher",
    email: "apoorvaalur22@gmail.com",
    phone: "+91 8050230100",
    location: "Shivamogga, Karnataka, India",
    linkedin: "https://linkedin.com/in/apoorva-a-p",
    github: "https://github.com/apoorva-a-p",
    status: "Available for Software Engineering Roles",
    summary: `Computer Science Engineering graduate with a strong foundation in Data Structures, Algorithms, Object-Oriented Programming, and Operating Systems. Hands-on experience developing and testing full-stack web applications through academic and enterprise internships. Quick learner with strong problem-solving and debugging skills, adaptable to fast-paced collaborative environments, and committed to writing clean, efficient code.`
  },

  stats: [
    { label: "Engineering CGPA", value: "7.5 / 10", note: "PESITM, 2022-2026" },
    { label: "Research Publications", value: "1", note: "IJMSERH Journal (2025)" },
    { label: "Community Reach", value: "300+", note: "Developers Reached" },
    { label: "Technical Events Hosted", value: "10+", note: "Tech & Cultural Symposia" }
  ],

  skills: {
    languages: [
      { name: "Python", level: 85, icon: "python", tag: "Backend & Scripting" },
      { name: "JavaScript (ES6+)", level: 90, icon: "javascript", tag: "Full-Stack Web" },
      { name: "C", level: 80, icon: "c", tag: "Systems & Algorithms" },
      { name: "PHP", level: 85, icon: "php", tag: "Backend & REST APIs" },
      { name: "SQL", level: 88, icon: "database", tag: "Relational Queries" },
      { name: "Java", level: 82, icon: "java", tag: "OOP & CloudSim" }
    ],
    webTech: [
      { name: "React.js", level: 88, icon: "react", tag: "Component Architecture" },
      { name: "HTML5", level: 95, icon: "html5", tag: "Semantic Markup" },
      { name: "CSS3 / Modern CSS", level: 90, icon: "css3", tag: "Glassmorphism & Flex/Grid" },
      { name: "REST APIs", level: 85, icon: "api", tag: "Integration & Architecture" },
      { name: "Role-Based Access Control", level: 88, icon: "shield", tag: "Security & Auth" }
    ],
    databasesAndTools: [
      { name: "MySQL", level: 88, icon: "mysql", tag: "Schema Design & Indexing" },
      { name: "HeidiSQL", level: 85, icon: "heidisql", tag: "Database Administration" },
      { name: "Git & GitHub", level: 90, icon: "github", tag: "Version Control & Agile CI" },
      { name: "CloudSim Plus", level: 85, icon: "cloud", tag: "Distributed Simulation" },
      { name: "XAMPP", level: 85, icon: "server", tag: "Local Web Stack" },
      { name: "VS Code & IntelliJ IDEA", level: 92, icon: "terminal", tag: "Primary Dev Environments" }
    ],
    coreEngineering: [
      { name: "Data Structures & Algorithms", level: 88, tag: "CS Fundamentals" },
      { name: "Object-Oriented Programming", level: 92, tag: "Clean Architecture" },
      { name: "Operating Systems & Concurrency", level: 84, tag: "Kernel & Resource Scheduling" },
      { name: "Edge-Case Testing & Debugging", level: 90, tag: "QA & Reproducible Bug Reports" }
    ]
  },

  experience: [
    {
      id: "swizosoft",
      role: "Web System Engineering Intern",
      company: "Swizosoft (OPC) Private Limited",
      location: "Uttar Karnataka, India",
      period: "Feb 2026 – May 2026",
      type: "Internship",
      featuredBadge: "React.js & Agile Systems",
      highlights: [
        "Designed and developed scalable, responsive UI components using React.js, testing each component for edge cases and cross-browser issues before shipping production-ready features for enterprise-grade, client-facing web applications.",
        "Participated in agile sprints and structured code reviews, flagging defects with clear, reproducible write-ups and tracking them through GitHub to resolution.",
        "Identified and resolved interface bottlenecks and functional defects in distributed web systems through systematic, detail-driven testing, enhancing responsiveness and streamlining user workflows throughout the application."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "CSS3", "Agile Sprints", "GitHub Reviews", "Systematic QA"]
    },
    {
      id: "surena",
      role: "Web Development Intern",
      company: "Surena Management Solutions (OPC) Pvt. Ltd.",
      location: "Shivamogga, India",
      period: "May 2024 – July 2024",
      type: "Internship",
      featuredBadge: "Backend & Database Architecture",
      highlights: [
        "Built and enhanced web application modules using PHP, JavaScript, and SQL, writing maintainable, well-structured code and testing it against defined cases within an agile team workflow while adhering to industry standards.",
        "Integrated and tested REST APIs and managed relational database schema via HeidiSQL, applying OOP design principles to structure and modularize backend logic effectively.",
        "Debugged and optimized SQL queries, root-causing data inconsistencies and documenting fixes clearly to improve data retrieval consistency and performance across multi-tiered application modules."
      ],
      techStack: ["PHP", "JavaScript", "SQL", "REST APIs", "HeidiSQL", "OOP Patterns", "Query Optimization"]
    }
  ],

  projects: [
    {
      id: "cloudsim-aco-pso",
      title: "Cascading ACO–PSO Based Virtual Machine Allocation in Cloud Data Centers",
      period: "June 2025 – Nov 2025",
      type: "Distributed Systems & Cloud Research",
      tagline: "Cascading Metaheuristic Optimization Framework for Hyperscale VM Scheduling",
      stack: ["Java", "CloudSim Plus", "Git/GitHub", "Distributed Computing", "Algorithm Optimization"],
      summary: "Engineered a pioneering hybrid scheduling model combining Ant Colony Optimization (ACO) with Particle Swarm Optimization (PSO) to address multi-objective VM provisioning challenges in hyperscale cloud environments.",
      bullets: [
        "Designed a cascading Ant Colony Optimization–Particle Swarm Optimization scheduling model for distributed cloud infrastructure, significantly reducing VM deployment latency and maximizing physical server resource utilization at scale.",
        "Built a fault-tolerant distributed simulation framework in CloudSim Plus, modeling VM scheduling across large-scale data centers with real-time load balancing and network overhead reduction.",
        "Conducted rigorous benchmarking and comparative testing across multiple optimization configurations, systematically logging edge cases and results to evaluate energy efficiency, throughput, and performance tuning."
      ],
      metrics: [
        { label: "Deployment Latency", value: "Substantial Reduction" },
        { label: "Resource Utilization", value: "Optimized Balance" },
        { label: "Simulation Platform", value: "CloudSim Plus Framework" },
        { label: "Peer-Reviewed Paper", value: "IJMSERH Vol 13, Issue 4" }
      ],
      badge: "Published Research Project"
    },
    {
      id: "placement-portal",
      title: "Multi-Tiered Placement Portal with Role-Based Access Control",
      period: "Mar 2024 – May 2024",
      type: "Full-Stack Enterprise Web Application",
      tagline: "Academic Recruitment & Career Management Pipeline with Automated Real-Time Dispatch",
      stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP", "RBAC Architecture"],
      summary: "Developed a secure, end-to-end recruitment management system connecting university students and corporate placement officers with automated workflow orchestration.",
      bullets: [
        "Implemented secure authentication and role-based access control (RBAC) using OOP design patterns in a multi-tiered web application system, testing across multiple user roles and edge cases to ensure scalability, maintainability, and performance.",
        "Designed and tested role-specific dashboards for administrators and students, optimizing application workflows and form pipelines to significantly reduce user friction and processing bottlenecks.",
        "Developed an automated email notification module to keep students and administrators informed on application status and interview updates in real time, reducing manual follow-ups significantly.",
        "Manually tested registration, application, and dashboard flows, surfacing edge cases and writing clear, reproducible bug reports."
      ],
      metrics: [
        { label: "Architecture", value: "3-Tier MVC with RBAC" },
        { label: "Manual Follow-ups", value: "Reduced ~80%" },
        { label: "User Portals", value: "Dual: Student & Admin" },
        { label: "Database Engine", value: "Relational MySQL (Indexed)" }
      ],
      badge: "Featured Academic Project"
    }
  ],

  publications: [
    {
      title: "Cascading ACO–PSO Based Virtual Machine Allocation in Cloud Data Centers",
      journal: "International Journal of Multidisciplinary and Scientific Emerging Research (IJMSERH)",
      volume: "Volume 13, Issue 4",
      date: "October – December 2025",
      domain: "Distributed Cloud Computing & Evolutionary Computing",
      abstract: "Addresses the critical challenge of efficient virtual machine placement in dynamic cloud data centers by fusing Ant Colony Optimization for global space exploration with Particle Swarm Optimization for rapid local exploitation, reducing energy consumption and network delay.",
      tags: ["CloudSim Plus", "Virtual Machine Allocation", "ACO", "PSO", "Green Computing", "Distributed Systems"]
    }
  ],

  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy Graduate",
      category: "Cloud Computing",
      date: "Certified Graduate",
      description: "Comprehensive training in cloud architecture, security, compute instances (EC2), networking (VPC), storage solutions (S3, EBS), and AWS well-architected framework principles.",
      badgeColor: "#ff9900"
    },
    {
      title: "Build Responsive Websites with HTML & CSS",
      issuer: "Udemy",
      category: "Frontend Web Development",
      date: "Certified",
      description: "Mastery of responsive design, CSS Flexbox, Grid systems, media queries, accessibility standards, cross-browser compatibility, and modern UI engineering.",
      badgeColor: "#0ea5e9"
    }
  ],

  education: {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "PES Institute of Technology and Management (PESITM)",
    location: "Shivamogga, Karnataka, India",
    duration: "2022 – 2026",
    grade: "CGPA: 7.5 / 10",
    keyCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Concurrency",
      "Computer Networks",
      "Software Engineering & Testing"
    ]
  },

  leadership: [
    {
      role: "Contributor",
      organization: "Peer Developer Network",
      scope: "3 Student Organizations • 300+ Developers Reached",
      highlights: [
        "Contributed to developer communities across 3 student organizations through collaborative events and student engagement.",
        "Organized hackathons, resource-awareness drives, and technical masterclasses.",
        "Delivered technical talks to 500+ students on leveraging free developer tools, open-source platforms, and learning resources."
      ],
      impactMetric: "300+ Developers Reached"
    },
    {
      role: "Technical Coordinator & Event Host",
      organization: "Department of Computer Science & Engineering, PESITM",
      scope: "10+ Technical & Cultural Events",
      highlights: [
        "Coordinated and hosted 10+ departmental technical competitions, coding hackathons, and cultural flagship events.",
        "Managed stage operations, technical logistics, and participant engagement with high audience turnout."
      ],
      impactMetric: "10+ Events Orchestrated"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
