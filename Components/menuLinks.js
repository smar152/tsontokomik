import Link from "next/link";
import { pages } from "../data/pagesData.js";
import { getMessage } from "../data/util";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

const MenuItem = ({ onClick, url = "", isCurrent, children }) => (
  <span onClick={onClick}>
    <Link href={url}>
      <span className={`link ${isCurrent ? "current" : ""}`}>
        <span>{children}</span>
      </span>
    </Link>
  </span>
);

export default function MenuLinks({ currentPageTitle, closeMenu, language }) {
  const menuItems = Object.keys(pages).filter((p) => p !== "home");
  const languageFromContext = useContext(LanguageContext);
  const s = (pageKey, stringKey) => {
    return getMessage(stringKey, pages[pageKey], language);
  };
  return (
    <>
      {menuItems.map((key, index) => {
        return (
          <MenuItem
            key={index}
            onClick={closeMenu}
            url={`/${pages[key].slug}`}
            isCurrent={currentPageTitle === s(key, "title")}
          >
            {s(key, "title")}
          </MenuItem>
        );
      })}
      <MenuItem onClick={() => {}}>{languageFromContext}</MenuItem>

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
