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
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    numpy,
    aws,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Database Management",
      icon: web,
    },
    {
      title: "Data Pipeline Development",
      icon: mobile,
    },
    {
      title: "Data Analytics & Machine Learning",
      icon: backend,
    },
    {
      title: "Data Visualization",
      icon: creator,
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
      name: "Numpy",
      icon: numpy,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Biology Graduate",
      company_name: "University of Florida",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "June 2014 - May 2019",
      points: [
        "Graduated with a Bachelor's degree in Biology with an academic scholarship from the number one public univeristy in the nation.",
        "Member of Pi Lambda Phi Fraternity: an organization based upon the elimination of prejudice and the creation of opportunity for everyone.",
        "Research Assistant at the Florida Museum of Natural Sciences at Dickinson Hall: Performed CT scans of 10-25 million-year-old specimens and used collected data to create 3-D imaging models of internal and external structures in order to identify, characterize, and scientifically name individuals",
        "Utilized micro-tomography and image alignment techniques to classify spore and pollen fragments allowing the determination of the likely origin and characteristics of collected specimens.",
        "Crafted 3-D physical models of CT scans using 3-D printing technology and corresponding techniques.",
      ],
    },
    {
      title: "Office Manager",
      company_name: "Ditz Medical & Laser Aesthetics Center",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "Jun 2020 - Present",
      points: [
        "Opened and managed a successful multi-million dollar medical spa through the covid pandemic to the present.",
        "Charged with inventory/procedural management, financial billing and maintenance of positive monthly ROIs, and headed marketing efforts through various forms of social media, web page design, and intercompany cooperation.",
        "Developed sensitized qualitative and quantitative analyses to drive strategy, including operating models and restructuring.",
        "Experienced in leading teams of different personal and professional backgrounds as well as consulting with high end clients in regard to high budget sales, sometimes leading to days with over $40k in sales.",
      ],
    },
    {
      title: "Data Analytics & Data Science Boot Camp Graduate",
      company_name: "University of Central Florida",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Obtained proficiency in the maintenance and development of data warehouses through the usage of ETL/ELT data pipelines.",
        "Developed extensive analytical abilities through a statistical and model based approach in addition to analytical skills previously developed during my Biological Science education at the University of Florida.",
        "Diverse knowledge of many machine learning techniques using different ML libraries including TensorFlow, Keras, PyTorch, and scikit-learn.",
        "Extracurricular development of deep learning techniques including Natural Language Processing, Speech Recognition, Time Series Analysis, Generative Models, Autonomous Robotics, and Environmental Monitoring.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Current Works",
      company_name: "Frank Ditz",
      icon: meta,
      iconBg: "#b3cee5",
      date: "Present Day",
      points: [
        "Developing and maintaining web applications using React.js, TailwindCSS, HTML, CSS, & other JS libraries such as D3.js.",
        "Studying up on and practicing deep learning techniques for the advancement of AI, including making and improving the functionality of my own personal AI.",
        "Researching company works and making information based predictions as to their short to middle term goals.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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