import Link from "next/link";
import messages from "../data/headerStrings";
import { getMessage } from "../data/util";

const Header = ({ language }) => {
  const s = (key) => {
    return getMessage(key, messages, language);
  };
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title link row">
            <div className="col-6">
              <img
                src={`${process.env.assetPrefix}${s("headerSrc")}`}
                className="img-fluid"
                alt="banner"
              />
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
