import type {
  NavItem,
  Project,
  SkillCategory,
  Experience,
  Education,
  Achievement,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Event Management System",
    description:
      "A comprehensive Java OOP application featuring multi-role access for Admins, Organizers, and Hosts. Supports event creation, scheduling, attendance tracking, and role-based dashboards.",
    tech: ["Java", "OOP", "Swing", "JDBC"],
    category: "Java",
    icon: "🗓️",
  },
  {
    id: 2,
    title: "Online Marketplace",
    description:
      "Feature-rich Java GUI marketplace supporting product listings, transaction tracking, buyer/seller roles, and full inventory management with a clean graphical interface.",
    tech: ["Java", "GUI", "Swing", "File I/O"],
    category: "Java",
    icon: "🛒",
  },
  {
    id: 3,
    title: "2D Wave Defense Game",
    description:
      "Engaging Java-based 2D game with sprite animation, wave-based enemy mechanics, collision detection, and progressive difficulty scaling.",
    tech: ["Java", "Game Dev", "2D Graphics", "OOP"],
    category: "Java",
    icon: "🎮",
  },
  {
    id: 4,
    title: "Online Shopping Cart",
    description:
      "DSA-focused shopping cart implementation demonstrating advanced data structures including linked lists, stacks, and queues for cart and order management.",
    tech: ["Java", "DSA", "Data Structures", "Algorithms"],
    category: "Java",
    icon: "📦",
  },
  {
    id: 5,
    title: "Cafe Management System",
    description:
      "Complete database-driven cafe management solution handling orders, inventory, staff records, and daily reporting with SQL backend integration.",
    tech: ["SQL", "MySQL", "Database", "ER Design"],
    category: "Web",
    icon: "☕",
  },
  {
    id: 6,
    title: "Mini Operating System",
    description:
      "Educational OS implementation covering core concepts including process scheduling, memory management, file systems, and inter-process communication.",
    tech: ["C++", "OS Concepts", "Assembly", "Systems"],
    category: "Java",
    icon: "💻",
  },
  {
    id: 7,
    title: "Digital Voting Machine",
    description:
      "Computer Architecture and Logic Design project implementing a fully functional digital voting system using hardware logic and simulation.",
    tech: ["CALD", "Logic Design", "EMU8086", "Assembly"],
    category: "Java",
    icon: "🗳️",
  },
  {
    id: 8,
    title: "Software Design Tool",
    description:
      "A Figma-based platform for software architecture visualization and system design, enabling teams to collaboratively draft UML diagrams and architecture blueprints.",
    tech: ["Figma", "UI/UX", "System Design", "Prototyping"],
    category: "Design",
    icon: "🎨",
  },
  {
    id: 9,
    title: "Autonomous Vehicles Research",
    description:
      "In-depth research and presentation project exploring autonomous vehicle systems, sensor fusion, machine learning applications, and ethical considerations in self-driving technology.",
    tech: ["Research", "AI/ML", "Presentation", "Documentation"],
    category: "Research",
    icon: "🚗",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "⚡",
    skills: [
      { name: "Java" },
      { name: "C++" },
      { name: "Python" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [{ name: "SQL" }, { name: "MySQL" }],
  },
  {
    category: "Design",
    icon: "🎨",
    skills: [{ name: "Figma" }, { name: "UI/UX Design" }],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "AutoCAD" },
      { name: "EMU8086" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "NexSoft Solutions",
    role: "Full Stack Web Developer Intern",
    period: "Current",
    current: true,
    responsibilities: [
      "Building responsive, modern frontend interfaces with React and Next.js",
      "Contributing to full-stack feature development across the product lifecycle",
      "Implementing pixel-perfect UI designs from Figma specifications",
      "Collaborating with cross-functional teams in an Agile environment",
    ],
  },
  {
    company: "Alkhidmat Foundation",
    role: "Intern",
    period: "2025",
    current: false,
    responsibilities: [
      "Conducted research and prepared comprehensive documentation reports",
      "Assisted in organizing community outreach programs and initiatives",
      "Collaborated with team members on administrative and operational tasks",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "BS Software Engineering",
    institution: "National University of Science and Technology (NUST)",
    status: "Currently Enrolled",
    year: "2024 — Present",
  },
  {
    degree: "FSC (Pre-Engineering)",
    institution: "Board of Intermediate Education",
    status: "Completed",
    achievement: "3rd Position Holder",
    year: " ",
  },
  {
    degree: "Matriculation (SSC)",
    institution: "Board of Secondary Education",
    status: "Completed",
    achievement: "3rd Position Holder",
    year: " ",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "🥉",
    title: "3rd Position — Matric Board",
    description:
      "Achieved 3rd position in the Board of Secondary Education examination, demonstrating outstanding academic performance.",
  },
  {
    icon: "🥉",
    title: "3rd Position — FSC Board",
    description:
      "Secured 3rd position in the Board of Intermediate Education examination in the Pre-Engineering stream.",
  },
  {
    icon: "💻",
    title: "Full-Stack Developer Intern",
    description:
      "Selected as a Full Stack Web Developer Intern at NexSoft Solutions, working on real-world production projects.",
  },
  {
    icon: "🎓",
    title: "NUST Software Engineering",
    description:
      "Currently enrolled at one of Pakistan's most prestigious institutions — National University of Science and Technology.",
  },
  {
    icon: "🚀",
    title: "9+ Engineering Projects",
    description:
      "Designed and developed over 9 software engineering projects spanning Java, Web, Design, and Research domains.",
  },
];
