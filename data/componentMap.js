import FAQ from "../Components/Content/FAQ";
import Kickstarter from "../Components/Content/Kickstarter";
import Artists from "../Components/Content/Artists";
import Smutcomic1 from "../Components/Content/Smutcomic1";
import Smutcomic2 from "../Components/Content/Smutcomic2";

const components = {
  home: {
    component: FAQ,
  },
  kickstarter: {
    component: Kickstarter,
  },
  smutcomic1: {
    component: Smutcomic1,
  },
  smutcomic2: {
    component: Smutcomic2,
  },
  artists: {
    component: Artists,
  },
  faq: {
    component: FAQ,
  },
};

export function getComponent(key, language) {
  if (components[key]) {
    const Component = components[key].component;
    return <Component language={language} />;
  }
  return <div>Όχι</div>;
}
