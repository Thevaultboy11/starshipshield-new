import defaultImage from "../public/images/hero.png";

const CONFIG = {
  origin: "https://starshipshield.com",
  basePathname: "/",
  trailingSlash: false,

  title: "Omni Security",
  description:
    "🚀 Empowering cyber security solutions by young minds. Claim your free security assessment. Limited availability.",
  defaultImage: defaultImage,

  defaultTheme: "light:only",

  language: "en",
  textDirection: "ltr",

  dateFormatter: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }),

  googleAnalyticsId: false,
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      disabled: false,
      permalink: "/%slug%",
    },

    list: {
      pathname: "blog",
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: "category",
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: "tag",
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
