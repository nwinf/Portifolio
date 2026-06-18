const { createApp } = Vue;

createApp({
  data() {
    return {
      menuOpen: false,
      activeSection: "home",
      navLinks: [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "systems", label: "Systems" },
        { id: "work", label: "Work" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
      ],
      heroPills: ["Software Development", "Python", "SQL", "AI", "Cybersecurity"],
      skillGroups: [
        {
          title: "Frontend",
          items: ["JavaScript", "HTML", "CSS", "Vue.js", "Responsive UI", "Bootstrap", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Python", "Django", "Django REST Framework", "Flask", "FastAPI", "Java", "REST APIs"],
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Database Design", "SQL Query Optimization"],
        },
        {
          title: "Android Development",
          items: ["Java", "Android Studio", "UI/UX Design", "Mobile App Development"],
        },
        {
          title: "Data",
          items: ["Machine Learning", "Data Visualization", "SQL", "Pandas", "NumPy"],
        },
        {
          title: "Tools",
          items: ["Git", "GitHub", "Postman", "Linux"],
        },
        {
          title: "Cybersecurity",
          items: ["Network Security", "Ethical Hacking", "Vulnerability Assessment", "Security Best Practices"],  
        },
        {
          title: "System Administratin and Management",
          items: ["System Administration", "IT Support", "Documentation", "Process Improvement", "Windows Server"],
        },
        {
          title: "Soft Skills",
          items: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management", "Presentation Skills"],
        }
      ],
      experience: [
        {
          period: "Oct 2025 - Present",
          role: "Software Developer",
          org: "National Housing Corporation (NHC) - Internship, Dar es Salaam, Tanzania",
          badge: "Current",
          bullets: [
            "Developed and maintained internal web applications for staff workflows, reporting, and service delivery.",
            "Worked on public and internal systems, including the NHC website and the recruitment portal.",
            "Designed database structures and improved SQL queries for faster record retrieval.",
            "Collaborated with finance, administration, and IT teams to translate requirements into usable software.",
          ],
          tags: ["Django", "Python", "PostgreSQL", "RBAC", "REST APIs"],
        },
        {
          period: "Jul 2024 - Sep 2024",
          role: "IT Support",
          org: "Tanzania Revenue Authority (TRA) - Internship, Arusha, Tanzania",
          bullets: [
            "Supported internal systems and helped test data management modules used by revenue officers.",
            "Resolved hardware and software issues across multiple workstations to reduce downtime.",
            "Documented processes and user guides to support non-technical staff.",
          ],
          tags: ["IT Support", "QA", "Documentation", "Networking"],
        },
        {
          period: "Jul 2023 - Oct 2023",
          role: "Industrial Practical Trainee",
          org: "University of Dodoma (UDOM)",
          bullets: [
            "Built a lung cancer prediction system using Python and machine learning.",
            "Created a pharmacy inventory system with real-time stock tracking and alerts.",
            "Presented prototypes and technical documentation to supervisors.",
          ],
          tags: ["Python", "Machine Learning", "Java", "Database Design"],
        },
      ],
      projects: [
        {
          title: "NeuroPredict",
          badge: "Featured",
          featured: true,
          description:
            "End-to-end AI platform for brain cancer detection with a FastAPI backend, PDF reporting, and explainable outputs for clearer clinical review.",
          highlights: [
            "CNN model trained on thousands of MRI scans",
            "FastAPI backend for real-time prediction",
            "Explainable outputs for transparent clinical review",
          ],
          tags: ["Python", "TensorFlow", "FastAPI", "OpenCV", "PostgreSQL"],
          links: [{ label: "GitHub", href: "https://github.com/nwinf/NeuroPredict" }],
        },
        {
          title: "Hand Tracking Virtual Keyboard",
          description:
            "A real-time virtual keyboard powered by hand tracking, available as both a Python desktop app and a browser-based web app.",
          highlights: [
            "Hover your index finger over a key to highlight it",
            "Pinch to press keys with hand tracking",
            "Runs locally or in the browser via GitHub Pages",
          ],
          tags: ["Python", "OpenCV", "MediaPipe", "pynput", "Web App", "Desktop App"],
          links: [{ label: "GitHub", href: "https://github.com/nwinf/VirtualKeyboard" }],
        },
        {
          title: "Office Asset Registry",
          badge: "Featured",
          description:
            "Django-based asset management system for tracking requests, approvals, and hardware records across an office workflow.",
          highlights: [
            "Role-based access control for staff and administrators",
            "Request submission, approval, and tracking workflow",
            "Database-backed asset registry with search and reporting",
          ],
          tags: ["Python", "Django", "ORM", "SQL", "Frontend", "Backend"],
          links: [{ label: "GitHub", href: "https://github.com/nwinf/office_asset_registry" }],
        },
        {
          title: "Lung Cancer Prediction",
          description:
            "Machine learning project that predicts lung cancer risk from symptoms and demographic data using feature engineering and model tuning.",
          highlights: [
            "Data preprocessing and feature engineering for improved model accuracy",
            "Model selection and hyperparameter tuning for optimal performance",
            "Evaluation metrics and visualization of prediction results",
          ],
          tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
          links: [{ label: "GitHub", href: "https://github.com/nwinf/LungcancerPrediction" }],
        },
        {
          title: "Chatbot Flask App",
          description:
            "Conversational AI chatbot with NLP-powered intent recognition and context-aware response generation.",
          tags: ["Python", "Flask", "NLP", "REST API", "JavaScript"],
          links: [{ label: "GitHub", href: "https://github.com/nwinf/chatbot-flask" }],
        },
      ],
      education: [
        {
          period: "Oct 2022 - Oct 2025",
          title: "BSc. Computer Science",
          org: "University of Dodoma (UDOM)",
          result: "GPA: 3.9",
          note: "Final year project: NeuroPredict - AI-Powered Brain Cancer Prediction Application.",
        },
        {
          period: "Jul 2020 - May 2022",
          title: "ACSEE - PMC",
          org: "AfricAcademy - Arusha Science School",
          result: "Division: 1.9",
          note: "Activities included STEM workshops, community outreach, robotics, and sports.",
        },
        {
          period: "Jan 2016 - Nov 2019",
          title: "CSEE - Science",
          org: "St. Monica Moshono Girls' Secondary School",
          result: "Division: 1.7",
          note: "General Secretary, Science Lab Assistant, and sports team member.",
        },
      ],
      certifications: [
        {
          name: "SAL1",
          org: "TryHackMe",
          date: "In progress",
          note: "Cybersecurity certification currently in progress",
        },
        {
          name: "Cybersecurity Essentials",
          org: "Cisco",
          date: "Apr 2023",
          url: "https://www.credly.com/badges/13ff51f5-0c9d-47a2-b536-b5603a63d02d/linked_in_profile",
        },
        {
          name: "Introduction to Cybersecurity",
          org: "Cisco",
          date: "Mar 2023",
          url: "https://www.credly.com/badges/de5c5fe8-f655-4725-b1f3-6a8cdef33136/linked_in_profile",
        },
        {
          name: "Artificial Intelligence",
          org: "ICDL Africa",
          date: "Oct 2021",
          url: "https://profile.icdlafrica.org/86a95ab8-dbbf-40bb-b497-5f51200c6cce?record_view=true",
        },
        {
          name: "Internet of Things",
          org: "ICDL Africa",
          date: "Oct 2021",
          url: "https://profile.icdlafrica.org/1e13557f-4a7b-4e3a-9552-4036acb4992a"
        },
        {
          name: "Computer and Online Essentials",
          org: "ICDL Africa",
          date: "Jul 2021",
          url: "https://profile.icdlafrica.org/66888714-58b5-48ce-9ed0-0fd6d649a701?record_view=true",
        },
        {
          name: "Documents",
          org: "ICDL Africa",
          date: "Aug 2021",
          url: "https://profile.icdlafrica.org/bb319e00-3994-4e6b-aed5-e2d28937d843",
        },
      ],
      observer: null,
    };
  },

  mounted() {
    const sections = document.querySelectorAll(".section-anchor");

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.activeSection = visible.target.id;
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => this.observer.observe(section));
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.menuOpen = false;
    },
  },
}).mount("#app");
