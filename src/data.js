import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";
export const tidycal_links = {
  security_webouncer: "https://tidycal.com/starshipshield/webouncer",
  security_launchpad: "https://tidycal.com/starshipshield/security-launchpad",
  ptaas: "https://tidycal.com/starshipshield/ptaas",
};
export const case_study_list = [
  {
    name: "origin",
    video: false,
    hero: {
      cta_link: "/services/web-app-pentest",
      service_link: `/services/web-app-penetration-test`,
      cta: `Web Application Assessment`,
      title: `Here's a story about how we secured a local startup`,
      body: `Patrola is a startup helping citizens take part in cleaning and taking care of their city.`,
    },
    youtube: {
      link: "https://www.youtube.com/embed/QelSVeRmNUQ",
      title: "How Boostroom Evaded a Data Breach",
    },
    img: {
      link: "/images/success-story/testimonials/3.png",
      alt: "",
    },
    card: {
      title: "Nermin Ćatović",
      body: `
      <p class="p1 mb-7">
      I got referred to Omni Security via my good friend Faruk Bavčić. Their whole story reminded me of myself when I was starting my business. I wanted to try their services and help the team in some business lessons I learned throughout the years.
      </p> 
      <p class="p1 mb-7">
      Thanks to Omni Security's services, they helped my company evade multiple account takeovers on our administrator accounts and access to other data of accounts. 
      </p>
      <p class="p1 mb-7">
      After the comprehensive security assessment, they identified vulnerabilities but also equipped us with the knowledge to promptly address the vulnerabilities using the resources they provided.
      </p>
      <p class="p1 mb-7">
        I recommend Omni Security's services because of  their accessibility and commitment to delivering high-quality solutions with their services & bonuses.
      </p>

      `,
    },
  },
  {
    name: "sklopi posao",
    video: false,
    hero: {
      cta_link: "/services/web-app-pentest",
      service_link: `/services/web-app-penetration-test`,
      cta: `Web Application Assessment`,
      title: `Listen to how our team secured Sklopi Posao`,
      body: `Sklopi Posao is a new innovative application that helps people apply for and list job positions`,
    },
    youtube: {
      link: "https://www.youtube.com/embed/QelSVeRmNUQ",
      title: "How Boostroom Evaded a Data Breach",
    },
    img: {
      link: "/images/success-story/testimonials/2.png",
      alt: "",
    },
    card: {
      title: "Ernad Bećirović",
      body: `
      <p class="p1 mb-7">
        Sklopi Posao and Omni Security have an anecdote on how we came in contact. The Omni Security team used our application for finding projects and while using our application they’ve noticed that the application has security mispractices and could be exploited.
      </p>

      <p class="p1 mb-7">
        We settled on doing a penetration test of our application. During the test, the Omni Security team got a complete admin account takeover and other vulnerabilities.
      </p>

      <p class="p1 mb-7">
        As a startup ourselves we’ve rushed security and were really worried about how we could fix these vulnerabilities. With the help of their materials, including custom tailored videos we can maintain and ensure the safety of our users.
      </p>

      <p class="p1 mb-7">
        I would like to wish Omni Security good luck in their new business endeavors because of their innovative approach and the helpfulness they showed while working on our project.
      </p>`,
    },
  },
  {
    name: "boostroom",
    video: true,
    hero: {
      cta_link: "/products/security-launchpad",
      service_link: `/services/web-app-penetration-test`,
      cta: `Security Launchpad`,
      title: `A journey of how we secured the app of our first client`,
      body: `Boostroom is a gaming marketplace made to help gamers earn money while gaming`,
    },
    youtube: {
      link: "https://www.youtube.com/embed/QelSVeRmNUQ",
      title: "How Boostroom Evaded a Data Breach",
    },
    card: {
      title: "Alen Vlahovljak",
      body: `
      <p class="p1 mb-7">
      I heard about Omni Security when the team was still forming. They offered to do a penetration test for us. I was skeptical but wanted to test the overall knowledge of my developers.    
      </p>

      <p class="p1 mb-7">
      After the penetration test, we found out that our biggest issue was the authorization which caused numerous security vulnerabilities.
      </p>

      <p class="p1 mb-7">
      In the end, they helped us optimize our API for security while improving our performance. After the security roadmap, they helped us create an application that is miles more resilient to potential cyber-attacks.
      </p>

      <p class="p1 mb-7">
      Therefore, I highly recommend Omni Security’s services

      They are fast, reliable and really dedicated to their work, which is the most important thing in business.
      </p>`,
    },
  },
  {
    name: "ooxcit",
    video: true,
    hero: {
      cta_link: "/services/mobile-app-pentest",
      service_link: `/services/mobile-app-pentest`,
      cta: `Mobile Application Assessment`,
      title: `Our first assessment of a mobile game went like this`,
      body: `Idle Hooligans is a popular tycoon game made by a team from Serbia`,
    },
    youtube: {
      link: "https://www.youtube.com/embed/epqmN3S3aOQ",
      title: "How Boostroom Evaded a Data Breach",
    },

    card: {
      title: "Luka Miljuš",
      body: `
      <p class="p1 mb-7">
        We found out about Omni Security via Linkedin. We were intrigued when they sent us a message that our game “Idle Hooligans” was insecure.
      </p>

      <p class="p1 mb-7">
      The Omni Security team suggested that we do a mobile penetration test so we can check the current security measures we’ve put in place. Despite the confidence I had in my team development skills, I gave Omni Security a chance.      </p>

      <p class="p1 mb-7">
      After the penetration test, they helped us fix some game-breaking vulnerabilities that an attacker could exploit to cheat in the game and pirate the source code.
      </p>

      <p class="p1 mb-7">
      Thanks to Omni Security, OOX is now one step ahead of our competition, maintaining both confidentiality and customer satisfaction. We can rest easily, knowing the security of our game is top-notch.
      </p>

`,
    },
  },
  {
    name: "app it",
    video: true,
    hero: {
      cta_link: "/products/security-launchpad",
      service_link: `/services/web-app-penetration test`,
      cta: `Security Launchpad`,
      title: `Here's how we secured a local company from head to toe`,
      body: `App IT was a company in need of security improvement from the ground up and Omni Security delivered that`,
    },
    youtube: {
      link: "https://www.youtube.com/embed/e2lxRFiawCY",
      title:
        "Our software had security holes, but thanks to Omni Security Team those holes are fully covered",
    },

    card: {
      title: "Faruk Bavčić",
      body: `
      <p class="p1 mb-7">
      Despite their age, they showed dedication to their work and surprised both me and the AppIT team.     
      </p>

      <p class="p1 mb-7">
      Thanks to Omni Security, we were able to prevent multiple account takeovers, securing our customer data. After the penetration test, they showed us a clear path for moving forward and demonstrated how to quickly address all vulnerabilities with the resources provided to us. Using their help we designed a secure code template so that our software is secure from the first day.      </p>

      <p class="p1 mb-7">
        I highly recommend Omni Security's services. They were always available, ready to deliver fast and high-quality solutions to our security problems.
      </p>

      <p class="p1 mb-7">
        If you are a software engineering company in need of penetration testing services, they are the right people for the job.
      </p>
`,
    },
  },
];
export const services_list = [
  {
    service_name: "a Web App Penetration Test",
    slug_name: "web app pentest",
    definition: `Assessing a web application for security weaknesses by simulating cyber-attacks, ensuring robust defense against real threats.`,
    href: "",
    img_url: "/images/services/1.svg",
    problem_list: [
      {
        tab: "Identifying Vulnerabilities",
        title: "Identifying Vulnerabilities",
        body: `Penetration testing uncovers and mitigates security vulnerabilities and weaknesses, preventing cyber attacks before they happen.`,
      },
      {
        tab: "Customer Trust",
        title: "Customer Trust",
        body: `Penetration testing ensures a secure application which builds trust and reliability with your users while showing a commitment to user safety.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report outlines vulnerabilities, risks, and fixes, guiding you to bolster your web app's security for a safer online environment.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Our guidance on fixing vulnerabilities directs your team to optimal security, ensuring a robust defense against potential threats.`,
        href: "",
      },
    ],
  },
  {
    service_name: "a Mobile App Penetration Test",
    slug_name: "mobile app pentest",
    definition: `Assessing a mobile app for security weaknesses by simulating cyber-attacks, ensuring robust defense against real threats.`,
    href: "",
    img_url: "/images/services/2.svg",
    problem_list: [
      {
        tab: "Identifying Vulnerabilities",
        title: "Identifying Vulnerabilities",
        body: `Penetration testing uncovers and mitigates security vulnerabilities and weaknesses, preventing cyber attacks before they happen.`,
      },
      {
        tab: "Customer Trust",
        title: "Customer Trust",
        body: `Penetration testing ensures a secure application which builds trust and reliability with your users while showing a commitment to user safety.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report outlines vulnerabilities, risks, and fixes, guiding you to bolster your web app's security for a safer online environment.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Our guidance on fixing vulnerabilities directs your team to optimal security, ensuring a robust defense against potential threats.`,
        href: "",
      },
    ],
  },
  {
    service_name: "an Internal Network Penetration Test",
    slug_name: "internal network pentest",
    definition: `Assessing security vulnerabilities within your company network, ensuring robust defense against potential threats.`,
    href: "",
    img_url: "/images/services/3.svg",
    problem_list: [
      {
        tab: "Identifying Vulnerabilities",
        title: "Identifying Vulnerabilities",
        body: `Penetration testing identifies and addresses weaknesses within the internal network, preventing potential exploits.`,
      },
      {
        tab: "Preventing Unauthorized Access",
        title: "Preventing Unauthorized Access",
        body: `Identifies and resolves vulnerabilities to restrict unauthorized access, ensuring only authorized personnel can access critical resources.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report details vulnerabilities, risks, and recommended fixes, providing a roadmap for strengthening your internal network.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Our guidance on fixing vulnerabilities directs your team to optimal security, ensuring a resilient and secure internal network.`,
        href: "",
      },
    ],
  },
  {
    service_name: "an External Network Penetration Test",
    slug_name: "external network pentest",
    definition: `Assessing security vulnerabilities in your external-facing systems, ensuring robust defense against potential threats.`,
    href: "",
    img_url: "/images/services/4.svg",
    problem_list: [
      {
        tab: "Identifying Vulnerabilities",
        title: "Identifying Vulnerabilities",
        body: `Penetration testing identifies and addresses weaknesses on the outside (external) of the network, preventing potential exploits.`,
      },
      {
        tab: "Third Party Security",
        title: "Third Party Security",
        body: `Finding misconfigurations in third-party integrations, preventing potential breaches through external connections.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report details vulnerabilities, risks, and recommended fixes, providing a roadmap for strengthening your internal network.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Our guidance on fixing vulnerabilities directs your team to optimal security, ensuring a resilient and secure external network.`,
        href: "",
      },
    ],
  },
  {
    service_name: "a Physical Social Engineering & Education",
    slug_name: "social engineering education",
    definition: `Assessing vulnerabilities in your employee security, enhancing awareness and improving their defense against social engineering threats.    `,
    href: "",
    img_url: "/images/services/5.svg",
    problem_list: [
      {
        tab: "Physical Security Gaps",
        title: "Physical Security Gaps",
        body: `Identifies and addresses vulnerabilities in physical infrastructure, preventing breaches and ensuring a secure environment.`,
      },
      {
        tab: "Employee Awareness",
        title: "Employee Awareness",
        body: `Evaluates the current awareness of your employees and educating them, minimizing the risk of social engineering exploits.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `Guiding your team to implementing security measures, ensuring a resilient and secure physical environment against social engineering threats.`,
        href: "",
      },
      {
        title: "Employee Education",
        body: `Educating your employees through presentations and moving them towards better security to withstand social engineering attacks.`,
        href: "",
      },
    ],
  },

  {
    service_name: "DevSecOps Consulting",
    slug_name: "devsecops consulting",
    definition: `Integrating security into your development process, ensuring proactive identification and mitigation of security vulnerabilities.`,
    href: "",
    img_url: "/images/services/6.svg",
    problem_list: [
      {
        tab: "CI/CD Security",
        title: "CI/CD Security",
        body: `Implementing automated security testing tools and integrating best security practices which secures your development process.`,
      },
      {
        tab: "Pipeline Visibility",
        title: "Pipeline Visibility",
        body: `Enhances visibility into the CI/CD pipeline, enabling real-time monitoring and response to security issues.`,
      },
    ],
    solution_list: [
      {
        title: "Secure CI/CD Integration",
        body: `Establishes robust security measures within the CI/CD process, safeguarding code at every stage.`,
        href: "",
      },
      {
        title: "Preventing Vulnerabilities",
        body: `Automated testing identifies and addresses vulnerabilities in the early stages of development.`,
        href: "",
      },
    ],
  },
  {
    service_name: "Source Code Review",
    slug_name: "source code review",
    definition: `Detailed examination of a web application's codebase to identify vulnerabilities, ensuring a secure and resilient software foundation.`,
    href: "",
    img_url: "/images/bonus/1.svg",
    problem_list: [
      {
        tab: "Identifying Code Vulnerabilities",
        title: "Identifying Code Vulnerabilities",
        body: `Uncovering and mitigating security flaws in the application's source code, preventing potential exploits.`,
      },
      {
        tab: "Preventing Code-based Exploits",
        title: "Preventing Code-based Exploits",
        body: `Identifying and fixing vulnerabilities that could be exploited by attackers through source code manipulation.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `Detailed report on code vulnerabilities, risks, and recommended fixes, providing insights to strengthening your application security.`,
        href: "",
      },
      {
        title: "Proactive Vulnerability Mitigation",
        body: `Guidance on fixing code vulnerabilities, ensuring a robust defense against potential threats through optimized source code.`,
        href: "",
      },
    ],
  },
  {
    service_name: "PTaaS",
    slug_name: "ptaas",
    definition: `PTaaS (Penetration Testing as a Service) continuously tests your software, proactively identifying and fixing security vulnerabilities for a robust defense.`,
    href: "",
    img_url: "/images/bonus/2.svg",
    problem_list: [
      {
        tab: "Continuous Vulnerability Identification",
        title: "Continuous Vulnerability Identification",
        body: `Ongoing assessments, identifying and addressing software vulnerabilities in real-time.`,
      },
      {
        tab: "Dynamic Threat Adaptation",
        title: "Dynamic Threat Adaptation",
        body: `Keeps pace with evolving threats, providing continuous protection against emerging risks.`,
      },
      {
        tab: "Saving Time",
        title: "Saving Time",
        body: `Streamlines the testing process, saving time by eliminating the need for manual penetration test initiation and scheduling.`,
      },
      {
        tab: "Cost Efficiency",
        title: "Cost Efficiency",
        body: `Cut costs by opting for continuous testing with PTaaS, avoiding the expense of an in-house team and enabling monthly payments.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report outlines security vulnerabilities, risks, and recommended improvements, guiding you to creating secure software.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Guide your team to implement effective measures for resilient and secure software, ensuring robust defense.`,
        href: "",
      },
      {
        title: "Continuous Protection",
        body: `Ongoing assessments with regular updates, maintaining an up-to-date understanding of the security posture.`,
        href: "",
      },
      {
        title: "Constant Communication",
        body: `Developers can contact us for 24/7 assistance, we will provide regular updates on the penetration testing progress.`,
        href: "",
      },
    ],
  },
];
export const bonus_list = [
  {
    service_name: "Source Code Review",
    slug_name: "source code review",
    definition: `Detailed examination of a web application's codebase to identify vulnerabilities, ensuring a secure and resilient software foundation.`,
    href: "",
    img_url: "/images/services/1.svg",
    problem_list: [
      {
        tab: "Identifying Code Vulnerabilities",
        title: "Identifying Code Vulnerabilities",
        body: `Uncovering and mitigating security flaws in the application's source code, preventing potential exploits.`,
      },
      {
        tab: "Preventing Code-based Exploits",
        title: "Preventing Code-based Exploits",
        body: `Identifying and fixing vulnerabilities that could be exploited by attackers through source code manipulation.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `Detailed report on code vulnerabilities, risks, and recommended fixes, providing insights to strengthening your application security.`,
        href: "",
      },
      {
        title: "Proactive Vulnerability Mitigation",
        body: `Guidance on fixing code vulnerabilities, ensuring a robust defense against potential threats through optimized source code.`,
        href: "",
      },
    ],
  },
  {
    service_name: "PTaaS",
    slug_name: "ptaas",
    definition: `PTaaS (Penetration Testing as a Service) continuously tests your software, proactively identifying and fixing security vulnerabilities for a robust defense.`,
    href: "",
    img_url: "/images/services/1.svg",
    problem_list: [
      {
        tab: "Continuous Vulnerability Identification",
        title: "Continuous Vulnerability Identification",
        body: `Ongoing assessments, identifying and addressing software vulnerabilities in real-time.`,
      },
      {
        tab: "Dynamic Threat Adaptation",
        title: "Dynamic Threat Adaptation",
        body: `Keeps pace with evolving threats, providing continuous protection against emerging risks.`,
      },
      {
        tab: "Saving Time",
        title: "Saving Time",
        body: `Streamlines the testing process, saving time by eliminating the need for manual penetration test initiation and scheduling.`,
      },
      {
        tab: "Cost Efficiency",
        title: "Cost Efficiency",
        body: `Cut costs by opting for continuous testing with PTaaS, avoiding the expense of an in-house team and enabling monthly payments.`,
      },
    ],
    solution_list: [
      {
        title: "Detailed Report",
        body: `The report outlines security vulnerabilities, risks, and recommended improvements, guiding you to creating secure software.`,
        href: "",
      },
      {
        title: "Tailored Recommendations",
        body: `Guide your team to implement effective measures for resilient and secure software, ensuring robust defense.`,
        href: "",
      },
      {
        title: "Continuous Protection",
        body: `Ongoing assessments with regular updates, maintaining an up-to-date understanding of the security posture.`,
        href: "",
      },
      {
        title: "Constant Communication",
        body: `Developers can contact us for 24/7 assistance, we will provide regular updates on the penetration testing progress.`,
        href: "",
      },
    ],
  },
];
export const headerData = {
  links: [
    {
      text: "About Us",
      href: "/about-us",
    },
    {
      text: "Success Stories",
      href: "/story-type/client-stories",
    },
    {
      text: "Resources",
      href: "/resources",
      links: [{ text: "Blog", href: getBlogPermalink() }],
    },

    {
      text: "Our Products",
      href: "/resources",
      links: [
        { text: "Security Launchpad", href: "/products/security-launchpad" },
        { text: "PTaaS", href: "/products/ptaas" },
        { text: "Webouncer", href: "/products/web-bouncer" },
      ],
    },
  ],
  actions: [
    {
      text: "Take first step",
      href: "/learn-more",
      type: "primary",
    },
  ],
};
export const footerData = {
  links: [
    {
      title: "Our Products",
      links: [
        { text: "Security Launchpad", href: "/products/security-launchpad" },
        { text: "Webouncer", href: "/products/web-bouncer" },
        { text: "PTaaS", href: "/products/ptaas" },
      ],
    },
    {
      title: "Client Feedback",
      links: [
        { text: "Client Stories", href: "/story-type/client-stories" },
        { text: "Client Wins", href: "/story-type/client-wins" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          text: "About us",
          href: "/about-us",
        },
        { text: "Blog", href: getBlogPermalink() },
      ],
    },
  ],

  socialLinks: [
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/97843633/",
    },
    {
      ariaLabel: "Youtube",
      icon: "tabler:brand-youtube",
      href: "https://www.youtube.com/@starshipshield",
    },
  ],
  footNote: `
  <div class='flex justify-center items-center gap-x-4'>
    <img
      src="/images/mainlogo.svg"
      width="40"
      height="40"
    />  
    <p>Made by <a class="text-primary hover:underline  " href="https://starshipshield.com/"> Omni Security</a> · All rights reserved.</p>
  </div> 
  `,
};

// export const footerData = {
//   links: [
//     {
//       title: "Quick links",
//       links: [
//         { text: "About", href: "/about-us" },
//         { text: "Success Stories", href: "/story-type/case-study" },
//         { text: "Blog", href: "/blog" },
//         { text: "Join Mission", href: "/learn-more" },
//       ],
//     },
//   ],

//   socialLinks: [
//     {
//       ariaLabel: "LinkedIn",
//       icon: "tabler:brand-linkedin",
//       href: "https://www.linkedin.com/company/starship-shield/",
//     },
//     {
//       ariaLabel: "Instagram",
//       icon: "tabler:brand-instagram",
//       href: "https://www.instagram.com/starshipshield/",
//     },
//   ],
//   footNote: `
//   <div class='flex justify-center items-center gap-x-4'>
//     <span class="w-20 h-8 md:w-20 md:h-8 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/images/blacklogo.png)]"></span>
//     <p>Made by <a class="text-primary hover:underline  " href="https://starshipshield.com/"> Omni Security</a> · All rights reserved.</p>
//   </div>
//    `,
// };

// export const footerData = {
//   socialLinks: [
//     { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
//     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//   ],
//   footNote: `
//     Omni Security · All rights reserved.
//   `,
// }
