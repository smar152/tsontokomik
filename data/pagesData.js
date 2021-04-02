export const pages = {
  home: {
    slug: "",
    title: {
      el: "Τσοντοκόμικ",
      en: "Smutcomic",
    },
  },
  kickstarter: {
    slug: "kickstarter",
    title: {
      el: "Κικστάρτερ",
      en: "Kickstarter",
    },
  },
  smutcomic1: {
    slug: "smutcomic1",
    title: {
      el: "Τσοντοκόμικ 1",
      en: "smutcomic1",
    },
  },
  smutcomic2: {
    slug: "smutcomic2",
    title: {
      el: "Τσοντοκόμικ 2",
      en: "smutcomic2",
    },
  },
  artists: {
    slug: "artists",
    title: {
      el: "Καλλιτέχνες",
      en: "artists",
    },
  },
  faq: {
    slug: "faq",
    title: {
      el: "ΦΑΚ",
      en: "FAQ",
    },
  },
};

export function getPageTitle(key, language) {
  return getPageData(key)?.title[language];
}

export function getPageData(key) {
  if (key) {
    return pages[key];
  } else {
    return pages.faq;
  }
}
