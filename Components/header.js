import Link from "next/link";
import messages from "../data/headerStrings";
import { getMessage } from "../data/util";

const Header = ({ language }) => {
  const s = (key) => {
    console.log(language, messages);
    return getMessage(key, messages, language);
  };
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title link row">
            <div className="col-4 col-md-1">
              <img
                src={`${process.env.assetPrefix}${s("headerSrc")}`}
                className="img-fluid"
                alt="banner"
              />
            </div>
            <div className="col-8 col-md-11">
              <h1>{s("title")}</h1>
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
