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
        {
          {
            /* console.log(s(e, "title")); */
          }
        }
        return (
          <div key={index} onClick={closeMenu}>
            <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
              <div
                className={`link mb-2 d-flex flex-row align-items-center  ${
                  currentPageTitle === s(e, "title") ? "current" : ""
                }`}
              >
                <div>{s(e, "title")}</div>
              </div>
            </Link>
          </div>
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
