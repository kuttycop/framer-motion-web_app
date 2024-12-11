 import Chatty from "../assets/projects/chatty.jpg" 
 import CryptoPlace from "../assets/projects/Cryptoplace.jpg";
import project3 from "../assets/trans4.jpeg";
import project4 from "../assets/favicon1.webp";

import geekjs from "../assets/certificates/geekjs.png"
import geek from "../assets/certificates/geek.png"
import guvi from "../assets/certificates/guvi.png"
import guvifull from "../assets/certificates/guvifull.png"
import Python from "../assets/certificates/python.png"

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 6 months of hands-on experience, I have honed my skills in front-end technologies like React, html, css and javascript, as well as back-end technologies like Node.js, express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications. With 6 months of professional experience, I have worked with a variety of technologies, including React, Node.js, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun/2024 - Aug/2024",
    role: "Web Developer",
    company: "Rinex Technology",
    description: `developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB","Express.js"],
  },
  {
    year: "Aug/2024 - Sep/2024",
    role: "Frontend Developer",
    company: "Grapple Tech",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mongoDB","Tailwind css","Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "CryptoPlace",
    image: CryptoPlace,
    description:
      "A fully functional Crypto Tracking website with features like Crypto market cap, chart, and Current market possition.",
      href:"https://cryptoplacevite.netlify.app/",
      gitsrc:"https://github.com/kuttycop/ReactPortfolio",
    technologies: ["React", "Node.js", "CoinGeoko API", "MongoDB"],
  },
  {
    title: "Chatty",
    image: Chatty,
    description:
      "An application for Real-time-chatting with you loved one and , with features such as user authentication, toeast-notifications, and uploading profile picturs.",
      href:"https://chatty-app-jko5.onrender.com/login",
      gitsrc:"https://github.com/kuttycop/fullstack-cht-app",
    technologies: ["React.js", "Node.js", "Express.js", "mongoDb","Socket.io"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    href:"https://kuttycop.github.io/ReactPortfolio/",
    gitsrc:"https://github.com/kuttycop/ReactPortfolio",
    technologies: ["React", "Tailwind.css","Framer-motion"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CERTTIFICATES=[
  {
    title:"Javascript",
    image:geekjs,
    issuser:"Geekster",
    issusDate:"17-Jul-2024"
  },
  {
    title:"Fullstack With Python Programming",
    image:guvifull,
    issuser:"Guvi",
    issusDate:"14-Sep-2023"
  },
  {
    title:"Git & Github",
    image:geek,
    issuser:"Geekster",
    issusDate:"17-July-2024"
  },
  {
    title:"Javascript",
    image:guvi,
    issuser:"Guvi",
    issusDate:"14-sep-2024"
  },
  {
    title:"Python",
    image:Python,
    issuser:"Infosys Springbord",
    issusDate:"17-Nov-2022"
  },
]

export const CONTACT = {
  address: "767 4th cross, Hosur, IN",
  phoneNo: "6385751023",
  email: "kuttycop562003@gmail.com",
};