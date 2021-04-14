import PageLayout from "./PageLayout.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPageData, getPageTitle } from "../data/pagesData";
import { getComponent } from "../data/componentMap";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function Page({ language }) {
  const router = useRouter();
  const page = router.query.page;
  const component = getComponent(page, language); //or home if page == undefined
  const title = getPageTitle(page, language); //or home
  console.log(`Loading page ${page}, with title ${title}`);
  return (
    <div>
      <Head>
        <title>TsontokomikLang - {title}</title>
      </Head>
      <PageLayout
        key="page"
        pageTitle={title}
        component={component}
        language={language}
      />
    </div>
  );
}
