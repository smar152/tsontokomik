import PageLayout from "../Components/pageLayout.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPageData, getPageTitle } from "../data/pagesData";
import { getComponent } from "../data/componentMap";

export default function Page({ language }) {
  const router = useRouter();
  const page = router.query.page;
  const component = getComponent(page, language);
  const title = getPageTitle(page, language);
  console.log(`Loading page ${page}, with title ${title}`);
  return (
    <div>
      <Head>
        <title>TsontokomikLang - {title}</title>
      </Head>
      <PageLayout key="page" pageTitle={title} component={component} />
    </div>
  );
}
