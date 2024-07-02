/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import SpringBootIcon from "./assets/images/spring-boot.svg";
import JavaIcon from "./assets/images/java.svg";
import SecurityIcon from "./assets/images/security.svg";
import SQLServerIcon from "./assets/images/microsoft-sql-server-logo-svgrepo-com.svg";
import OracleIcon from "./assets/images/oracle.png";
import AWSIcon from "./assets/images/aws.svg";
import TDDIcon from "./assets/images/TDD.png";
import AngularIcon from "./assets/images/angular.svg";
import LinuxIcon from "./assets/images/Ubuntu.svg";
import DockerIcon from "./assets/images/docker.svg";
import SpringCloudIcon from "./assets/images/spring-cloud.png";
import HibernateIcon from "./assets/images/hibernate.svg";
import FlaywayIcon from "./assets/images/flyway.png";
import IonicIcon from "./assets/images/ionic.svg";
import RocketIcon from "./assets/images/rocket.svg";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kennedy Oliveira",
  title: "Hi all, I'm Kennedy",
  subTitle: emoji(
    "Hello, I'm Kennedy, an enthusiastic Software Engineer 🚀 with 9 years experience in Java, SpringBoot, REST API and SQL. Passionate about creating efficient systems, I align with the latest trends and frameworks. My approach in IT combines innovation, technical knowledge, and a focus on business goals."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qnOZfp52LjEDZYk79O88MRz3cmDQYPQC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kennedyrocha",
  linkedin: "https://www.linkedin.com/in/kennedy-oliveira-rocha/",
  gmail: "kennedy_snp@hotmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Java Developer | Software Engineer | Spring | Angular | AWS",
  skills: [
    emoji(
      "⚡ Proficiency in coding complex applications with Java, Angular, Spring Boot, Docker, and AWS for efficient, reliable functionality"
    ),
    emoji("⚡  Expertise in SQL databases integration, management, and migration, utilizing Flyway for effective data integrity and Entity control with Hibernate"),
    emoji(
      "⚡ Skilled in AWS services for cloud application maintenance as EC2, Pipelines and S3"
    ),
    emoji(
        "⚡ Development of a comprehensive automated test suite using JUnit, Mock, and Mockito for quality assurance and reliability"
      )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java Development",
      customIcon: JavaIcon
    },
    {
      skillName: "Spring FrameWork",
      customIcon: SpringBootIcon
    },
    {
        skillName: "Spring Security",
        customIcon: SecurityIcon
    },
    {
        skillName: "Test Driven Development",
        customIcon: TDDIcon
    },
    {
        skillName: "Spring MicroServices",
        customIcon: SpringCloudIcon
    },
    {
        skillName: "CI / CD",
        customIcon: RocketIcon
    },
    {
        skillName: "Hibernate and JPA",
        customIcon: HibernateIcon
    },
    {
        skillName: "Ionic Framework",
        customIcon: IonicIcon
    },
    {
        skillName: "Angular Framework",
        customIcon: AngularIcon
    },
    {
        skillName: "AWS Services",
        customIcon: AWSIcon
    },
    {
        skillName: "Linux Server",
        customIcon: LinuxIcon
    },
    {
        skillName: "Docker",
        customIcon: DockerIcon
    },
    {
        skillName: "SQL Server",
        customIcon: SQLServerIcon
    },
    {
        skillName: "Oracle Database",
        customIcon: OracleIcon
    },
    {
        skillName: "Flyway SQL Migration",
        customIcon: FlaywayIcon
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "State University of Mato Grosso",
      logo: require("./assets/images/unemat.png"),
      subHeader: "Bachelor's Degree in Information Systems",
      duration: "July 2016 - December 2022",
      desc: "Participated in the research of computer systems."
    },
    {
      schoolName: "Scientific Research - Mathematics",
      logo: require("./assets/images/impa.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2014 - October 2015",
      desc: "Scientific Research in the field of Mathematics",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL Databases",
      progressPercentage: "90%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Inter Bank",
      companylogo: require("./assets/images/inter.jpg"),
      date: "June 2024 – Present",
      desc: "Java Software Engineer - Outsourcing from Stafanini Group.",
      descBullets: [
        "Java Development",
        "Spring Boot",
        "Microservices",
        "Test-Driven Development"
      ]
    },
    {
      role: "Software Engineer - outsourcing SBM TECHNOLOGY",
      company: "IFood",
      companylogo: require("./assets/images/ifood.png"),
      date: "January 2024 – June 2024",
      desc: "Software engineer and Lead developer, I spearheaded the creation of a sophisticated bot application for Slack, designed to automate internal processes at IFood. This project showcases my proficiency in leveraging advanced technologies and software engineering practices to deliver seamless and efficient solutions. My key contributions and responsibilities included:",
      descBullets: [
        "Bot Development for Slack: Led the design, development, and deployment of a bot application for Slack, utilizing Java, Spring Boot, Docker, Microservices, and PostgreSQL to automate and streamline internal IFood processes.",
        "Software Development: Demonstrated expertise in coding and maintaining complex applications with Java, Spring Boot, Docker, and Kuberbates to ensure efficient and reliable functionality.",
        "Database Management & Migration: Managed and integrated PostgreSQL databases, ensuring data integrity and effective migration through Flyway and Hibernate.",
        "Automated Testing & Mocking: Engineered a detailed automated testing framework with JUnit, Mock, and Mockito to guarantee high standards of quality assurance and system reliability."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "SBM TECHNOLOGY",
      companylogo: require("./assets/images/sbm.jpg"),
      date: "March 2023 – June 2024",
      desc: "As a software engineer and lead developer of the project I work on, I play a crucial role in developing and maintaining innovative solutions. My work involves using cutting-edge technologies and software engineering practices to create, optimize, and scale robust applications. My key contributions and responsibilities",
      descBullets: [
        "Software Development: Proficiency in coding complex applications with Java, Angular, Spring Boot, Docker, and AWS for efficient, reliable functionality.",
        "Database Management & Migration",
        "Cloud Computing.",
        "Automated Testing & Mocking.",
        "Performance Optimization"
      ]
    },
    {
      role: "Software Engineer",
      company: "Bordulis Imóveis Selecionados",
      companylogo: require("./assets/images/bordulis.png"),
      date: "July 2022 – February 2022",
      desc: "Software Development for Property Management, using technologies: SpringBoot, Angular, MySQL, AWS:",
      descBullets: [
        "Designing and implementing efficient, responsive user interfaces using Angular;",
        "Developing backend services and APIs using SpringBoot for robust system integration, Hibernate, REST Api;",
        "Developing and maintaining MySQL databases to ensure data integrity and performance",
        "Development of System Integration with Facebook Marketplace, Olx and Others"
      ]
    },
    {
      role: "Software Developer",
      company: "Unimed Norte do Mato Grosso",
      companylogo: require("./assets/images/unimed.jpg"),
      date: "July 2022 – February 2022",
      desc: "Software Development and Database Management Specialization in Software Development: Proficient in creating robust applications using Java, Docker, Hibernate, SpringBoot, and Angular. Demonstrated experience in efficient software solution development, applying industry best practices and focusing on high-quality outcomes;",
      descBullets: [
        "Database Management and Integration: Advanced skill in working with a diverse range of database management systems. Significant experience in data modeling, performance optimization, and conducting complex migrations and integrations, especially between SQL Server and Oracle;",
        "Expertise in System Integrations: Developed and implemented effective integrations using SpringBoot REST APIs, facilitating communication between different platforms and systems, ensuring data consistency and efficiency;",
        "Advanced SQL Abilities: Competent in using SQL Server and PL/SQL to develop custom scripts and data-driven solutions, optimizing application performance and supporting critical business processes."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
