import Link from "next/link";
import messages from "../data/headerStrings";
import { getMessage } from "../data/util";
import DesktopNavigation from "./DesktopNavigation";
import PhoneNavigation from "./PhoneNavigation";

const Header = ({ pageTitle, pageSubtitle, language }) => {
  const s = (key) => {
    return getMessage(key, messages, language);
  };
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title link row">
            <div className="col-12 col-md-4">Hey</div>
            <div className="col-8">
              <DesktopNavigation
                currentPageTitle={pageTitle}
                className="d-none d-md-block"
                language={language}
              />
              <div className="phoneNav">
                <PhoneNavigation
                  currentPageTitle={pageTitle}
                  className="d-md-none d-block"
                  language={language}
                />
              </div>
            </div>
          </div>
          <hr />
          <p className="description">{s("subtitle")}</p>
          <hr />
        </div>
      </Link>

      <style jsx>
        {`
          .title h1 {
            font-size: 48px;
          }
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
