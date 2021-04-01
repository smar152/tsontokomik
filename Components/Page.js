import PageLayout from "../Components/pageLayout.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPageData } from "../data/pagesData";

export default function Page({ language }) {
  const router = useRouter();
  const page = router.query.page;
  const pageData = getPageData(page);
  let { content, title, kati } = pageData || {};
  console.log(`Loading page ${page}`);
  return (
    <div>
      <Head>
        <title>TsontokomikLang - {title}</title>
      </Head>
      <PageLayout
        key="page"
        pageTitle={title}
        pageContent={content}
        kati={kati && kati[language]}
      />
    </div>
  );
}
