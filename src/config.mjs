import defaultImage from "./assets/images/hero.jpg";

const CONFIG = {
  origin: "https://www.starshipshield.com",
  basePathname: "/",
  trailingSlash: false,

  title: "Starship Shield",
  description:
    "🚀 Empowering cyber security solutions by young minds. Claim your free security assessment. Limited availability.",
  defaultImage: defaultImage,

  defaultTheme: "light:only", // Values: "system" | "light" | "dark" | "light:only" | ""

  language: "en",
  textDirection: "ltr",

  dateFormatter: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: "/%slug%", // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: "blog", // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: "category", // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: "tag", // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
