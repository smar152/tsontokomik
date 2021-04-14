import Link from "next/link";
import { pages } from "../data/pagesData.js";
import { getMessage } from "../data/util";
import { useRouter } from "next/router";

const MenuItem = ({ onClick, url = "", isCurrent, children }) => {
  return (
    <span onClick={onClick}>
      <Link href={url}>
        <span className={`link ${isCurrent ? "current" : ""}`}>
          <span>{children}</span>
        </span>
      </Link>
    </span>
  );
};

export default function MenuLinks({ currentPageTitle, closeMenu, language }) {
  const menuItems = Object.keys(pages).filter((p) => p !== "home");
  const router = useRouter();
  const isEnglish = /^\/en\//.test(router.asPath);
  const s = (pageKey, stringKey) => {
    return getMessage(stringKey, pages[pageKey], language);
  };
  return (
    <>
      {menuItems.map((key, index) => {
        let url = `/${pages[key].slug}`;
        if (isEnglish) {
          url = "/en" + url;
        }

        return (
          <MenuItem
            key={index}
            onClick={closeMenu}
            url={url}
            isCurrent={currentPageTitle === s(key, "title")}
          >
            {s(key, "title")}
          </MenuItem>
        );
      })}
      <MenuItem
        onClick={() => {
          if (isEnglish) {
            const greekPath = router.asPath.replace(/^\/en\//, "/");
            router.push(greekPath);
          } else {
            const englishPath = router.asPath.replace(/^\//, "/en/");
            router.push(englishPath);
          }
        }}
      >
        {isEnglish ? "Ελληνικά" : "Εγγλέζικα"}
      </MenuItem>

      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
          .current {
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}
