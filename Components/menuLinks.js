import Link from "next/link";
import { pages } from "../data/pagesData.js";
import { getMessage } from "../data/util";

export default function MenuLinks({ currentPageTitle, closeMenu, language }) {
  const menuItems = Object.keys(pages).filter((p) => p !== "home");
  const s = (pageKey, stringKey) => {
    return getMessage(stringKey, pages[pageKey], language);
  };
  return (
    <>
      {menuItems.map((e, index) => {
        return (
          <span key={index} onClick={closeMenu}>
            <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
              <span
                className={`link ${
                  currentPageTitle === s(e, "title") ? "current" : ""
                }`}
              >
                <span>{s(e, "title")}</span>
              </span>
            </Link>
          </span>
        );
      })}

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
