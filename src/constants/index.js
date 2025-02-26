import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  digiraptor,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  oyen,
  paychex,
  vi,
  jofan,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "feedbacks",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Paychex",
    icon: paychex,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Collaborated with a cross-functional Agile team to develop a cloud-native tax computation and payroll application, replacing the legacy COBOL-based system with modern technologies like Spring Boot and MongoDB.",
      "Designed and implemented RESTful APIs for critical tax processing workflows, ensuring scalability and reliability through best practices in Java development.",
      "Leveraged CI/CD pipelines with Gradle to automate build, testing, and deployment, enabling continuous delivery of application features.",
      "Integrated Kafka and RabbitMQ to facilitate real-time communication and asynchronous processing across distributed microservices.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Oyen Pet Insurance",
    icon: oyen,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "Digiraptor",
    icon: digiraptor,
    iconBg: "#383E56",
    date: "Sept 2022 - Dec 2022",
    points: [
      "Mastered PHP and MySQL to architect and develop dynamic webpages, enhancing the internal management system",
      "Led the initiative to deploy a comprehensive web system showcasing staff profiles and project timelines, improving intra-company visibility and project tracking",
      "Pioneered the integration of Google Chart JS for data visualization, which streamlined the interpretation of complex company records and increased reporting efficiency",
    ],
  },
  {
    title: "Embedded Systems Engineer Intern",
    company_name: "Vector InfoTech",
    icon: vi,
    iconBg: "#E6DEDD",
    date: "July 2021 - Sept 2021",
    points: [
      "Programmed multiple features on a microcontroller board using MPLab (LED, switch, etc.)",
      "Implemented timers, interrupts, and displayed the output of sensor programs with UART",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Jordan for his outstanding performance during his three-month internship as a software engineer on my team.",
    name: "Jo Fan Pang",
    designation: "CFO",
    company: "Acme Co",
    image: jofan,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
];

const projects = [
  {
    name: "Dynamic Algorithm Visualizer",
    description:
      "Developed an interactive tool for visualizing different algorithms like sorting, graph traversal and dynamic programming, using React for front-end development and Tailwind CSS for styling",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Web Portfolio",
    description:
      "Engineered an interactive 3D web portfolio, leveraging Three.js, Framer Motion and Tailwind CSS to showcase professional work with rich, engaging visuals that enhances user engagement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Big Data Analysis",
    description:
      "Developed a comprehensive data pipeline to clean and analyze over 80 million tuples from the MyAnimeList dataset using PostgreSQL and MongoDB.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
