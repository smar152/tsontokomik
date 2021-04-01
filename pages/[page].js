import { useRouter } from "next/router";
import PageLayout from "../Components/pageLayout.js";
import { getPageData } from "../data/pagesData";
import Head from "next/head";

export default function Page({ pageKey }) {
  const router = useRouter();
  // Take page key from props if it exists, otherwise from router
  const thisPage = pageKey ? pageKey : router.query.page;
  const pageData = getPageData(thisPage);
  console.log(pageData);
  const { content, title } = pageData || {};

  return (
    <div>
      <Head>
        <title>TsontokomikLang - {title}</title>
      </Head>
      <PageLayout key="page" pageTitle={title} pageContent={content} />
    </div>
  );
}
