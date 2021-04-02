export const pages = {
  home: {
    slug: "",
    title: "Smutcomic",
  },
  kickstarter: {
    slug: "kickstarter",
    title: "Kickstarter",
  },
  smutcomic1: {
    slug: "smutcomic1",
    title: "smutcomic1",
  },
  smutcomic2: {
    slug: "smutcomic2",
    title: "smutcomic2",
  },
  artists: {
    slug: "artists",
    title: "artists",
  },
  faq: {
    slug: "faq",
    title: "FAQ",
  },
};

export function getPageData(key) {
  if (key) {
    return pages[key];
  } else {
    return pages.about;
  }
}
