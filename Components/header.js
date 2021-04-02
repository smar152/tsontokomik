import Link from "next/link";
import { data } from "../data/data.js";

export default function Header() {
  let language = "en";
  const title = data.title[language];
  const subtitle = data.subtitle[language];
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title link row">
            <div className="col-4 col-md-1">
              <img
                src={`${process.env.assetPrefix}${data.headerSrc[language]}`}
                className="img-fluid"
                alt="banner"
              />
            </div>
            <div className="col-8 col-md-11">
              <h1>{title}</h1>
            </div>
          </div>
          <hr />
          <p className="description">{subtitle}</p>
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
}
