export const pages = {
  home: {
    slug: "",
    title: "Smutcomic",
    content: (
      <div>
        <p>hi</p>
      </div>
    ),
  },
  kickstarter: {
    slug: "kickstarter",
    title: "Kickstarter",
    content: (
      <div>
        <p>hi</p>
      </div>
    ),
  },
  smutcomic1: {
    slug: "smutcomic1",
    title: "smutcomic1",
    content: (
      <div>
        <p>hi</p>
      </div>
    ),
  },
  smutcomic2: {
    slug: "smutcomic2",
    title: "smutcomic2",
    content: (
      <div className="">
        <p>hi</p>
      </div>
    ),
  },
  artists: {
    slug: "artists",
    title: "artists",
    content: (
      <div>
        <p>hi</p>
      </div>
    ),
  },
  faq: {
    slug: "faq",
    title: "FAQ",
    content: (
      <div>
        <div className="faq">Πώς γυναίκες;!</div>
        <div className="faa">Κι όμως!</div>
      </div>
    ),
  },
};

export function getPageData(key) {
  if (key) {
    return pages[key];
  } else {
    return pages.about;
  }
}