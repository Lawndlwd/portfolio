import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "LevoBnB",
      category: "Web Applecation",
      img: "../images/image.png",
      url: "https://levo-bnb.vercel.app/",
      github: "https://github.com/Lawndlwd/LevoBnb",
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
          title: "LevoBnB",
          img: "../images/image.png",
        },
        {
          id: uuidv4(),
          title: "LevoBnB",
          img: "../images/image-1.png",
        },
        {
          id: uuidv4(),
          title: "LevoBnB",
          img: "../images/image-3.png",
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
          details: "- Search for places to stay.",
        },
        {
          id: uuidv4(),
          details: "- Search by availability time to stay.",
        },
        {
          id: uuidv4(),
          details: "- Authenticate signin with Google Auth2",
        },
        {
          id: uuidv4(),
          details: "- Book a house with Stripe payment.",
        },
        {
          id: uuidv4(),
          details:
            "- Admin section to add new houses and upload images to cloudinary cloud",
        },
        {
          id: uuidv4(),
          details: "- Use Vercel for Deployment",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Gravity PWA",
      category: "Web 3.0 Application",
      img: "images/pwa.png",
      publishDate: "Nov 04, 2021",
      url: "https://mobile.gravity.earth",
      tag: "UI / Frontend",
      clientTitle: "Gravity",
      objectivesTitle: "Objective",
      objectivesDetails: "Digital identities for financial inclusion",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/pwa.png",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/pwa-1.png",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/pwa-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Gravity",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Supply chain with Blockchain and Decentralized Apps",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://gravity.earth",
        },
      ],
      technologies: [
        "TypeScript",
        "VueJS",
        "TailwindCSS",
        "Tezos Blockchain",
        "Tahoe storages",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            " A decentralized  Vue PWA client based on Gravity SDK, in order to create wallets & issue credentials and receive credentials for end users",
        },
        {
          id: uuidv4(),
          details:
            "used in pilot with Kenya Red Cross projects with big success",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a8bc8cccdy",
      title: "Gravity Portal",
      category: "Web Application",
      img: "images/portal.png",
      url: "https://staging.portal.gravity.earth/",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "Gravity",
      objectivesTitle: "Objective",
      objectivesDetails: "Digital identities for financial inclusion",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "portal",
          img: "../images/portal.png",
        },
        {
          id: uuidv4(),
          title: "portal",
          img: "../images/portal-1.png",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/portal-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Gravity",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Supply chain with Blockchain and Decentralized Apps",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://gravity.earth",
        },
      ],
      technologies: [
        "TypeScript",
        "VueJS",
        "TailwindCSS",
        "Tezos Blockchain",
        "Tahoe storages",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "- Gravity desktop interface represent Gravity ecosystem using governance stack & Gravity Agent(wrapper of SDK with p2p connections)  for organization to interact with their client. ",
        },
        {
          id: uuidv4(),
          details:
            "- used in pilot with Kenya Red Cross projects with big success",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "LAMA",
      category: "Web Application",
      img: "images/image-4.png",
      publishDate: "Nov 04, 2021",
      clientTitle: "About",
      url: "https://staging.les-lama.wns.wilders.dev/landing",
      github: "https://github.com/Lawndlwd/Lama-wns",
      tag: "FullStack",
      objectivesTitle: "Objective",
      objectivesDetails:
        "A Course or Blog like site based on classes reach out to their students and post extra recourses and videos & maybe challenges to those specific students.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "portal",
          img: "../images/image-2.png",
        },
        {
          id: uuidv4(),
          title: "portal",
          img: "../images/image-4.png",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/image-2.png",
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
          details:
            "Build the backend with Express, Typescript, Mongoose and GraphQl",
        },
        {
          id: uuidv4(),
          details:
            "  Design the data schema for our database and create Entities and Resolvers",
        },
        {
          id: uuidv4(),
          details: "And Write unit test for each resolver",
        },
        {
          id: uuidv4(),
          details:
            "Build the client with React, Typescript, TailwindCss and Apollo client",
        },
        {
          id: uuidv4(),
          details: "starting by design the mock-up,",
        },
        {
          id: uuidv4(),
          details: "  and write our backlog for each functionality",
        },
        {
          id: uuidv4(),
          details: "As user I can :   ",
        },
        {
          id: uuidv4(),
          details: "1 - sign up & sign in to the application by email.",
        },
        {
          id: uuidv4(),
          details: " 2 - list classes on the platform with possiblity to join.",
        },
        {
          id: uuidv4(),
          details:
            "3 - I'm able to create new class and invite students to it by giving the invite code.",
        },
        {
          id: uuidv4(),
          details:
            "4 - create a course in created class with `Tiptap` rich text editor. ",
        },
        {
          id: uuidv4(),
          details: " 5 - I'm able to comment on the courses and tag people",
        },
      ],
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Self-taught Front-end developer focused on developing accessible, well tested and responsive web applications, as well as improving my skills within the JavaScript ecosystem, working with current web technologies such as Vue, Typescript, React, Nuxt.js & Node.js to create feature-rich applications.",
    },
    {
      id: uuidv4(),
      bio: "Proficient with design tools such as Figma, as well as basic UI/UX principles and prototyping. I've always been interested in solving problems, programming, coding and Designing apps was the best way for me to keep my interests growing in the right way.",
    },
    {
      id: uuidv4(),
      bio: "I love to do Typescript Vue or Nuxt application!!",
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
