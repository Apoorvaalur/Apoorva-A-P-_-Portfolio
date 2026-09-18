/**
 * Apoorva A P - DeveloperFolio Interactive Script
 * High-performance vanilla JavaScript for Glassmorphism & Motion Interactives
 */

document.addEventListener('DOMContentLoaded', () => {
  // Safe reference to PORTFOLIO_DATA
  const data = window.PORTFOLIO_DATA || {};

  /* ==========================================================================
     1. SCROLL PROGRESS BAR & STICKY NAVBAR
     ========================================================================== */
  const scrollProgressBar = document.getElementById('scroll-progress');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (totalScroll / windowHeight) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    if (mainNav) {
      if (totalScroll > 40) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }

    // Scroll-spy active link detection
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (totalScroll >= sectionTop && totalScroll < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER TOGGLE
     ========================================================================== */
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navMenu = document.getElementById('nav-links');

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
    2b. SMOOTH SCROLL ON NAV CLICK (No Shutter Effect)
    ========================================================================== */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.getElementById(href.slice(1));
        if (!targetEl) return;
        // Use scrollIntoView — respects CSS scroll-padding-top on <html>
        // which is set to header-height + 1rem, giving correct offset for all sections.
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ==========================================================================
     3. TYPEWRITER EFFECT IN HERO SECTION
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter-text');
  const titles = [
    "Computer Science Engineer",
    "Full-Stack Web Developer",
    "Cloud & Distributed Systems Researcher",
    "React.js & Agile Software Engineer",
    "Database & API Architect"
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeWriterStep() {
    const currentText = titles[titleIndex];
    if (typewriterElement) {
      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
      } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2200; // Pause at end of text
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 400; // Pause before typing new text
      }
    }
    setTimeout(typeWriterStep, typingSpeed);
  }
  typeWriterStep();

  /* ==========================================================================
     4. 3D CARD TILT & SPECULAR GLARE PHYSICS
     ========================================================================== */
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'none';
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const leftX = mouseX - bounds.width / 2;
      const topY = mouseY - bounds.height / 2;

      const percentX = (mouseX / bounds.width) * 100;
      const percentY = (mouseY / bounds.height) * 100;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);

      const rotateX = (topY / (bounds.height / 2)) * -6; // Max 6 deg
      const rotateY = (leftX / (bounds.width / 2)) * 6;  // Max 6 deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });

  /* ==========================================================================
     5. DEVELOPER CODE TERMINAL INTERACTIVES
     ========================================================================== */
  const terminalScreen = document.getElementById('terminal-screen');
  const terminalTabBtns = document.querySelectorAll('.terminal-tab-btn');
  const terminalCmdBtns = document.querySelectorAll('.cmd-btn');
  const terminalCopyBtn = document.getElementById('terminal-code-copy');

  const terminalSnippets = {
    config: `<pre><code class="code-line"><span class="code-keyword">const</span> <span class="code-prop">engineer</span> = {
  <span class="code-prop">name</span>: <span class="code-string">"Apoorva A P"</span>,
  <span class="code-prop">role</span>: <span class="code-string">"Software Engineer"</span>,
  <span class="code-prop">education</span>: {
    <span class="code-prop">degree</span>: <span class="code-string">"B.E. Computer Science & Engg"</span>,
    <span class="code-prop">institute</span>: <span class="code-string">"PESITM Shivamogga"</span>,
    <span class="code-prop">cgpa</span>: <span class="code-num">7.5</span>,
    <span class="code-prop">timeline</span>: <span class="code-string">"2022 - 2026"</span>
  },
  <span class="code-prop">coreStack</span>: [<span class="code-string">"React.js"</span>, <span class="code-string">"Python"</span>, <span class="code-string">"JavaScript"</span>, <span class="code-string">"PHP"</span>, <span class="code-string">"MySQL"</span>, <span class="code-string">"Java"</span>],
  <span class="code-prop">researchDomain</span>: <span class="code-string">"Cascading ACO-PSO Cloud VM Scheduling"</span>,
  <span class="code-prop">publication</span>: <span class="code-string">"IJMSERH Vol 13, Issue 4 (2025)"</span>,
  <span class="code-prop">community</span>: <span class="code-string">"Founder @ Peer Developer Network (500+ mentored)"</span>,
  <span class="code-prop">contactReady</span>: <span class="code-keyword">true</span>
};

<span class="code-comment">// Run simulation benchmarks or inspect profiles below:</span>
<span class="code-fn">console</span>.log(<span class="code-string">\`System ready. Initializing \${engineer.name}'s workspace...\`</span>);</code></pre>`,

    cloud: `<pre><code class="code-line">{
  <span class="code-prop">"simulationFramework"</span>: <span class="code-string">"CloudSim Plus 6.0"</span>,
  <span class="code-prop">"algorithm"</span>: <span class="code-string">"Cascading ACO-PSO Hybrid"</span>,
  <span class="code-prop">"datacenterParams"</span>: {
    <span class="code-prop">"hostNodes"</span>: <span class="code-num">128</span>,
    <span class="code-prop">"vmRequests"</span>: <span class="code-num">1024</span>,
    <span class="code-prop">"schedulingObjectives"</span>: [<span class="code-string">"LatencyMinimization"</span>, <span class="code-string">"EnergyEfficiency"</span>, <span class="code-string">"LoadBalancing"</span>]
  },
  <span class="code-prop">"benchmarkResults"</span>: {
    <span class="code-prop">"latencyImprovement"</span>: <span class="code-string">"Substantial reduction vs baseline FCFS/Round-Robin"</span>,
    <span class="code-prop">"energyConservation"</span>: <span class="code-string">"Measurable reduction in idle host energy draw"</span>,
    <span class="code-prop">"status"</span>: <span class="code-string">"Published in IJMSERH Oct-Dec 2025"</span>
  }
}</code></pre>`,

    system: `<pre><code class="code-line"><span class="code-comment"># Environment Configuration: Apoorva A P Workstation</span>
<span class="code-prop">NODE_ENV</span>=<span class="code-string">production</span>
<span class="code-prop">CLIENT_FRAMEWORK</span>=<span class="code-string">React.js, HTML5, CSS3 Glassmorphism</span>
<span class="code-prop">BACKEND_LAYER</span>=<span class="code-string">PHP, RESTful API Modules</span>
<span class="code-prop">DATABASE_SERVER</span>=<span class="code-string">MySQL, HeidiSQL Admin</span>
<span class="code-prop">VCS_TOOL</span>=<span class="code-string">Git, GitHub Agile Workflows</span>
<span class="code-prop">SIMULATION_ENGINE</span>=<span class="code-string">CloudSim Plus, OpenJDK 17</span>
<span class="code-prop">SECURITY_MODEL</span>=<span class="code-string">Role-Based Access Control (RBAC)</span>
<span class="code-prop">INTERNSHIP_CURRENT</span>=<span class="code-string">Swizosoft (OPC) Private Limited (Feb-May 2026)</span>
<span class="code-prop">LOCATION</span>=<span class="code-string">Shivamogga, Karnataka, India</span></code></pre>`
  };

  terminalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      terminalTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      if (terminalSnippets[tab] && terminalScreen) {
        terminalScreen.innerHTML = terminalSnippets[tab];
      }
    });
  });

  terminalCmdBtns.forEach(cmdBtn => {
    cmdBtn.addEventListener('click', () => {
      const cmd = cmdBtn.getAttribute('data-cmd');
      if (cmd === 'skills') {
        const skillsSnippet = `<pre><code class="code-line"><span class="code-comment">// $ cat skills.json</span>
{
  <span class="code-prop">"languages"</span>: [<span class="code-string">"Python"</span>, <span class="code-string">"JavaScript"</span>, <span class="code-string">"PHP"</span>, <span class="code-string">"SQL"</span>, <span class="code-string">"C"</span>, <span class="code-string">"Java"</span>],
  <span class="code-prop">"frontend"</span>: [<span class="code-string">"React.js"</span>, <span class="code-string">"HTML5"</span>, <span class="code-string">"CSS3 Glassmorphism"</span>, <span class="code-string">"DOM APIs"</span>],
  <span class="code-prop">"backend_db"</span>: [<span class="code-string">"PHP"</span>, <span class="code-string">"MySQL"</span>, <span class="code-string">"REST APIs"</span>, <span class="code-string">"HeidiSQL"</span>, <span class="code-string">"XAMPP"</span>],
  <span class="code-prop">"systems"</span>: [<span class="code-string">"CloudSim Plus"</span>, <span class="code-string">"VM Scheduling"</span>, <span class="code-string">"RBAC Security"</span>, <span class="code-string">"Git"</span>]
}</code></pre>`;
        if (terminalScreen) terminalScreen.innerHTML = skillsSnippet;
        terminalTabBtns.forEach(b => b.classList.remove('active'));
      } else if (cmd === 'cloudsim') {
        const simSnippet = `<pre><code class="code-line"><span class="code-comment">// $ run cloudsim.sh --model=Cascading-ACO-PSO</span>
[INFO] Initializing CloudSim Plus distributed data center environment...
[INFO] Provisioning 128 Heterogeneous Physical Hosts...
[INFO] Generating 1024 Virtual Machine Allocation Requests...
[INFO] Stage 1: Ant Colony Optimization generating global pheromone trails...
[INFO] Stage 2: Particle Swarm velocity convergence optimizing local bounds...
[SUCCESS] Cascading convergence achieved — scheduling complete!
[METRICS] Deployment latency: substantially reduced vs baseline FCFS
[METRICS] Host energy: optimized allocation across physical servers
[STATUS] Published in IJMSERH (Oct-Dec 2025)</code></pre>`;
        if (terminalScreen) terminalScreen.innerHTML = simSnippet;
        terminalTabBtns.forEach(b => b.classList.remove('active'));
      } else if (cmd === 'contact') {
        const contactSnippet = `<pre><code class="code-line"><span class="code-comment">// $ whoami</span>
Apoorva A P
Software Engineer & Full-Stack Developer
Email: apoorvaalur22@gmail.com
Phone: +91 8050230100
LinkedIn: https://linkedin.com/in/apoorva-a-p
Location: Shivamogga, Karnataka, India
PESITM CSE (2022-2026) | CGPA: 7.5/10</code></pre>`;
        if (terminalScreen) terminalScreen.innerHTML = contactSnippet;
        terminalTabBtns.forEach(b => b.classList.remove('active'));
      }
      showToast("Executed terminal command");
    });
  });

  if (terminalCopyBtn && terminalScreen) {
    terminalCopyBtn.addEventListener('click', () => {
      const textToCopy = terminalScreen.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Terminal code copied to clipboard!");
      }).catch(() => {
        showToast("Code copied!");
      });
    });
  }

  /* ==========================================================================
     6. DYNAMIC SKILL TABS FILTER & RENDERING
     ========================================================================== */
  const skillsContainer = document.getElementById('skills-container');
  const skillTabBtns = document.querySelectorAll('.skill-tab-btn');

  // Full Skill Collection from Resume
  const allSkillsList = [
    // Languages
    { name: "Python", category: "languages", icon: "code", subtag: "Backend & Scripting", level: 85 },
    { name: "JavaScript (ES6+)", category: "languages", icon: "terminal", subtag: "Full-Stack Web & Logic", level: 90 },
    { name: "PHP", category: "languages", icon: "code", subtag: "Backend Modules & APIs", level: 85 },
    { name: "SQL", category: "languages", icon: "database", subtag: "Relational Queries & DDL/DML", level: 88 },
    { name: "C", category: "languages", icon: "cpu", subtag: "Systems & Algorithms", level: 80 },
    { name: "Java", category: "languages", icon: "cloud", subtag: "OOP & CloudSim Simulation", level: 82 },

    // Web Tech
    { name: "React.js", category: "webTech", icon: "layers", subtag: "Component Architecture", level: 88 },
    { name: "HTML5 & Semantic Web", category: "webTech", icon: "code", subtag: "Modern Web Standards", level: 95 },
    { name: "CSS3 & Glassmorphism", category: "webTech", icon: "layers", subtag: "Flexbox, Grid & Animations", level: 90 },
    { name: "REST APIs Integration", category: "webTech", icon: "server", subtag: "Client-Server Contract", level: 85 },
    { name: "Role-Based Access Control", category: "webTech", icon: "shield", subtag: "Authentication & Security", level: 88 },

    // Databases & Tools
    { name: "MySQL", category: "databasesAndTools", icon: "database", subtag: "Relational Schema & Indexing", level: 88 },
    { name: "HeidiSQL", category: "databasesAndTools", icon: "database", subtag: "Schema Management & Tuning", level: 85 },
    { name: "Git & GitHub", category: "databasesAndTools", icon: "github", subtag: "Version Control & Agile PRs", level: 90 },
    { name: "CloudSim Plus", category: "databasesAndTools", icon: "cloud", subtag: "Distributed Cloud Modeling", level: 85 },
    { name: "XAMPP", category: "databasesAndTools", icon: "server", subtag: "Local Full-Stack Server", level: 85 },
    { name: "VS Code & IntelliJ IDEA", category: "databasesAndTools", icon: "terminal", subtag: "Primary IDE Ecosystem", level: 92 },

    // Core Engineering
    { name: "Data Structures & Algorithms", category: "coreEngineering", icon: "cpu", subtag: "Trees, Graphs & DP", level: 88 },
    { name: "Object-Oriented Design (OOP)", category: "coreEngineering", icon: "layers", subtag: "Modularity & Design Patterns", level: 92 },
    { name: "Operating Systems & Concurrency", category: "coreEngineering", icon: "server", subtag: "Process Scheduling & Memory", level: 84 },
    { name: "Edge-Case Testing & QA", category: "coreEngineering", icon: "check-circle", subtag: "Defect Logging & Verification", level: 90 }
  ];

  function renderSkills(filterCategory = 'all') {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = '';

    const filtered = filterCategory === 'all'
      ? allSkillsList
      : allSkillsList.filter(s => s.category === filterCategory);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'glass-card skill-card reveal-on-scroll';
      card.setAttribute('data-category', skill.category);

      card.innerHTML = `
        <div class="skill-card-top">
          <div class="skill-info">
            <div class="skill-badge-icon">
              <svg><use href="#icon-${skill.icon}"></use></svg>
            </div>
            <div>
              <div class="skill-name">${skill.name}</div>
              <div class="skill-subtag">${skill.subtag}</div>
            </div>
          </div>
          <div class="skill-level-pct">${skill.level}%</div>
        </div>
        <div class="skill-progress-track">
          <div class="skill-progress-bar" style="width: ${skill.level}%;"></div>
        </div>
      `;

      skillsContainer.appendChild(card);
    });

    // Re-trigger scroll reveal for newly added skill cards
    observeElements();
  }

  skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderSkills(filter);
    });
  });

  // Initial render
  renderSkills('all');

  /* ==========================================================================
     7. PROJECT DEEP-DIVE MODALS
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentArea = document.getElementById('modal-content-area');
  const projectModalBtns = document.querySelectorAll('.project-modal-btn');

  const projectDetails = {
    cloudsim: {
      title: "Cascading ACO–PSO Based Virtual Machine Allocation in Cloud Data Centers",
      timeline: "June 2025 – Nov 2025 • Distributed Systems & Cloud Computing",
      tagline: "High-Performance VM Provisioning Framework Built in CloudSim Plus",
      abstract: `Addressing dynamic load spikes and resource wastage in large-scale cloud infrastructure through a cascading metaheuristic framework. Combines global pheromone exploration (Ant Colony Optimization) with swift velocity-based particle exploitation (Particle Swarm Optimization).`,
      keyHighlights: [
        "Formulated multi-objective fitness function balancing deployment latency, host active energy, and inter-VM communication overhead.",
        "Simulated 128 heterogeneous physical servers and 1,024 heterogeneous VM requests within CloudSim Plus.",
        "Systematic edge-case benchmarking demonstrated significant reduction in VM deployment latency and superior energy efficiency compared to standard First-Come-First-Serve (FCFS) and Genetic Algorithms (GA).",
        "Formally peer-reviewed and published in the International Journal of Multidisciplinary and Scientific Emerging Research (IJMSERH), Volume 13, Issue 4 (2025)."
      ],
      techStack: ["Java (OpenJDK 17)", "CloudSim Plus 6.0", "ACO Metaheuristics", "PSO Algorithm", "Git/GitHub", "Linux"],
      specs: [
        { label: "Deployment Latency", val: "Substantial Reduction" },
        { label: "Energy Conservation", val: "Measurable Idle Draw Reduction" },
        { label: "Host Overload Protection", val: "Proactive Load Balancing" },
        { label: "Simulation Platform", val: "CloudSim Plus" }
      ]
    },

    placement: {
      title: "Multi-Tiered Placement Portal with Role-Based Access Control",
      timeline: "Mar 2024 – May 2024 • Enterprise Academic Web Application",
      tagline: "Career Recruitment Pipeline & Real-Time Notification Architecture",
      abstract: `Engineered an end-to-end multi-tier web application streamlining university recruitment drives, student job applications, candidate shortlisting, and placement administration with strict role separation.`,
      keyHighlights: [
        "Architected secure authentication and Role-Based Access Control (RBAC) ensuring students and placement officers access isolated, authorized endpoints and data pipelines.",
        "Designed and implemented intuitive role-specific dashboards with responsive CSS3 and JavaScript, streamlining resume uploads and application status tracking.",
        "Built an automated real-time email notification dispatcher in PHP to alert students and administrators on application milestones and interview invitations, significantly reducing manual follow-up overhead.",
        "Conducted extensive edge-case testing for concurrent registrations, unauthorized session escalations, and form input edge conditions, logging reproducible bug reports."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL", "HeidiSQL", "XAMPP"],
      specs: [
        { label: "Architecture", val: "3-Tier MVC with RBAC" },
        { label: "Security", val: "Role-Based Data Isolation" },
        { label: "Notification Dispatch", val: "Automated Real-Time Email" },
        { label: "Manual Follow-ups", val: "Significantly Reduced" }
      ]
    }
  };

  function openProjectModal(projectId) {
    const proj = projectDetails[projectId];
    if (!proj || !modalContentArea || !projectModal) return;

    modalContentArea.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="section-tag" style="margin-bottom: 0.5rem;">Engineering Case Study</span>
        <h2 style="font-size: 1.65rem; margin-top: 0.5rem; margin-bottom: 0.35rem;">${proj.title}</h2>
        <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 1rem;">
          ${proj.timeline}
        </div>
      </div>

      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; color: #cbd5e1; margin-bottom: 0.4rem;">System Overview & Problem Statement</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${proj.abstract}</p>
      </div>

      <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Key Architecture & Technical Contributions</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem;">
        ${proj.keyHighlights.map(h => `
          <li style="position: relative; padding-left: 1.35rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            <span style="position: absolute; left: 0; top: 0; color: var(--accent-cyan); font-weight: bold;">▹</span>
            ${h}
          </li>
        `).join('')}
      </ul>

      <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Performance & Benchmark Metrics</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
        ${proj.specs.map(s => `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); padding: 0.85rem; border-radius: 8px;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">${s.label}</div>
            <div style="font-size: 0.95rem; font-weight: 600; color: #38bdf8;">${s.val}</div>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Technology Stack</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
        ${proj.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  projectModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project');
      openProjectModal(pid);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ==========================================================================
     8. RESUME SUMMARY MODAL
     ========================================================================== */
  const openResumeBtn = document.getElementById('open-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');

  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('open');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (resumeModalClose && resumeModal) {
    resumeModalClose.addEventListener('click', () => {
      resumeModal.classList.remove('open');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('open');
        resumeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     8b. CERTIFICATE PDF MODAL
     ========================================================================== */
  const certModal = document.getElementById('cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const certIframe = document.getElementById('cert-iframe');
  const viewCertBtn = document.getElementById('view-pub-details-btn');

  function openCertModal() {
    if (!certModal) return;
    // Lazy-load the PDF src only when the modal is opened
    if (certIframe && !certIframe.src.includes('.pdf')) {
      certIframe.src = 'Apoorva%20A%20P_Publication%20Certificate.pdf#toolbar=0&navpanes=0';
    }
    certModal.classList.add('open');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (viewCertBtn) {
    viewCertBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCertModal();
    });
  }

  if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertModal();
      if (resumeModal) {
        resumeModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });

  /* ==========================================================================
     9. TOAST NOTIFICATION UTILITY & COPY EMAIL
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, duration = 3000) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="icon-svg" style="stroke: #C8A96A;"><use href="#icon-check-circle"></use></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  const copyEmailButtons = [
    document.getElementById('copy-email-btn'),
    document.getElementById('copy-email-btn-2')
  ];

  copyEmailButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const email = "apoorvaalur22@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      });
    }
  });

  /* ==========================================================================
     10. CONTACT FORM SUBMISSION (EMAILJS)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const btnSpan = submitBtn.querySelector('span');
      const originalText = btnSpan.innerText;
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      btnSpan.innerText = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';

      // Send form using EmailJS
      emailjs.sendForm('service_005deng', 'template_4e3phlg', contactForm)
        .then(() => {
          showToast('Message sent successfully!');
          contactForm.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          showToast('Failed to send message. Please try again.');
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          btnSpan.innerText = originalText;
          submitBtn.style.opacity = '1';
          submitBtn.style.cursor = 'pointer';
        });
    });
  }

  /* ==========================================================================
     11. BACK TO TOP BUTTON
     ========================================================================== */
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     12. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  function observeElements() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Animate skill progress bars if inside
          const bars = entry.target.querySelectorAll('.skill-progress-bar');
          bars.forEach(b => b.classList.add('animated'));
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  observeElements();

  /* ==========================================================================
     13. RESUME DOWNLOAD (Force Save, No New Tab)
     ========================================================================== */
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(link.href);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const tempLink = document.createElement('a');
        tempLink.href = blobUrl;
        tempLink.download = link.getAttribute('download') || 'resume.pdf';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        window.URL.revokeObjectURL(blobUrl);
      } catch (err) {
        console.error('Download failed, falling back to normal navigation', err);
        window.location.href = link.href;
      }
    });
  });
});
