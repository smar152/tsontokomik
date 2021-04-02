import Link from "next/link";
import { pages } from "../data/pagesData.js";
import { getMessage } from "../data/util";

export default function MenuLinks({ currentPageTitle, closeMenu, language }) {
  const menuItems = Object.keys(pages).filter((p) => p !== "home");
  const s = (key) => {
    console.log(key, pages);
    return getMessage(key, pages, language);
  };
  return (
    <>
      {menuItems.map((e, index) => (
        <div key={index} onClick={closeMenu}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            <div
              className={`link mb-2 d-flex flex-row align-items-center  ${
                currentPageTitle === pages[e][s("title")] ? "current" : ""
              }`}
            >
              <div>a{pages[e][s("title")]}</div>
            </div>
          </Link>
        </div>
      ))}

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
