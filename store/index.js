import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "LAMA",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "FullStack",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "A Course or Blog like site based on classes reach out to their students and post extra recourses and videos & maybe challenges to those specific students.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Kabul Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Kabul Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Kabul Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Wild Code School",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Teaching Web Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://wildcodeschool.com",
        },
      ],
      technologies: [
        "Typescript",
        "React.js",
        "TailwindCSS",
        "Node",
        "ExpressJS",
        "GraphQl",
        "Docker",
        "MongoDB",
        "Github Actions for CI/CD",
        "GCP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "111.",
        },
        {
          id: uuidv4(),
          details: "2",
        },
        {
          id: uuidv4(),
          details: "33",
        },
        {
          id: uuidv4(),
          details: "3",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "LevoBnB",
      category: "Web Applecation",
      img: "images/mobile-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "Create a copy of Airbnb with googleMap API.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "Algolia",
        "Cloudinary",
        "Google Maps & Places API",
        "Stripe",
        "Vercel",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "111.",
        },
        {
          id: uuidv4(),
          details: "2",
        },
        {
          id: uuidv4(),
          details: "33",
        },
        {
          id: uuidv4(),
          details: "3",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Project Management UI",
      category: "UI/UX Design",
      img: "images/ui-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "111.",
        },
        {
          id: uuidv4(),
          details: "2",
        },
        {
          id: uuidv4(),
          details: "33",
        },
        {
          id: uuidv4(),
          details: "3",
        },
      ],
    },
  ],
  clientsHeading: "Some of the brands I worked with",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    },
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Lawndlwd",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/levend-mohammad/",
    },
    {
      id: uuidv4(),
      name: "Medium",
      icon: "book",
      url: "https://medium.com/@lwdlwd95",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
