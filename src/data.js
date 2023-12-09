import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";
export const services_list = [
  {
    service_name: "Application test",
    definition: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
    minus maxime in corporis sapiente illum odit eaque voluptas.
    Voluptas, nostrum!`,
    href: "",
    problem_list: [
      {
        tab: "Problem 1",
        title: "About Content",
        body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsa vitae dolor sed. Accusantium vero mollitia, accusamus similique temporibus veritatis?`,
      },
      {
        tab: "Problem 2",
        title: "About me",
        body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsa vitae dolor sed. Accusantium vero mollitia, accusamus similique temporibus veritatis?`,
      },
    ],
    solution_list: [
      {
        title: "Web Application Penetration Testing",
        body: `We thoroughly assess your web application for potential security vulnerabilities.`,
        href: "",
      },
      {
        title: "Web Application Penetration Testing",
        body: `We thoroughly assess your web application for potential security vulnerabilities.`,
        href: "",
      },
    ],
  },
];
export const headerData = {
  links: [
    {
      text: "Resources",
      href: "/resources",
    },

    {
      text: "About Us",
      href: "/about-us",
    },
    {
      text: "Case Studies",
      href: "/story-type/case-study",
    },
    {
      text: "Blog",
      href: getBlogPermalink(),
    },
    {
      text: "Our Method",
      href: "/learn-more",
    },
  ],
  actions: [
    {
      text: "Get Started",
      href: "/learn-more",
      type: "primary",
    },
  ],
};
export const footerData = {
  links: [
    {
      title: "Customer Feedback",
      links: [
        { text: "Case studies", href: "/story-type/case-study" },
        { text: "Client wins", href: "/story-type/client-wins" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Starship Shield Blog", href: "/blog" },
        {
          text: "How to make a good Security Assessment Scope",
          href: "/resources/scope-paper",
        },
        {
          text: "Security Assessment Price Calculator",
          href: "/resources/assesment-calculator",
        },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/onwidget/astrowind",
    },
  ],
  footNote: `
  <div class='flex justify-center items-center gap-x-4'>
    <img
      src="/images/blacklogo.png"
      width="40"
      height="40"
    />  
    <p>Made by <a class="text-blue-600 hover:underline  " href="https://starshipshield.com/"> Starship Shield</a> · All rights reserved.</p>
  </div> 
  `,
};

// export const footerData = {
//   links: [
//     {
//       title: "Quick links",
//       links: [
//         { text: "About", href: "/about-us" },
//         { text: "Case Studies", href: "/story-type/case-study" },
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
//     <p>Made by <a class="text-blue-600 hover:underline  " href="https://starshipshield.com/"> Starship Shield</a> · All rights reserved.</p>
//   </div>
//    `,
// };

// export const footerData = {
//   socialLinks: [
//     { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
//     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//   ],
//   footNote: `
//     Starship Shield · All rights reserved.
//   `,
// };
