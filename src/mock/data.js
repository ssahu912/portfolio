import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shubham Sahu | Research Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website, please scroll down to know more about me and my work', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi I'm",
  name: 'Shubham Sahu',
  subtitle: "I'm the developer you are looking for",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.png',
  paragraphOne:
    "I'm a Research Engineer working for Siemens in Bangalore, KA. I am passionate about Machine learning and implementing AI solutions.",
  paragraphTwo:
    'Working in the IT industry for past 3 years implementing technological solutions for businesses in the manufacturing and knowledge management domain.  ',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
