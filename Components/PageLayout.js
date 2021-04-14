import Header from "./Header.js";
import * as React from "react";

export default function PageLayout({
  component: Component,
  pageTitle,
  pageSubtitle,
  language,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header language={language} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9 content">
          <h2>{pageTitle}</h2>
          <h6>{pageSubtitle}</h6>
          {React.isValidElement(Component) && Component}
        </div>
      </div>

      <style global jsx>
        {`
          html {
            margin-left: calc(100vw - 100%);
          }
          body {
            font-family: Verdana, Geneva, sans-serif;
            color: #3e3e3e;
          }
          .container {
            padding-top: 60px;
          }
          h6 {
            font-style: italic;
          }
          .floatingImage {
            float: right;
          }
          svg {
            height: 30px;
            cursor: pointer;
            animation: rotation 2s infinite linear;
          }
          .drawer {
            z-index: 1;
            right: 0px;
            width: 240px;
            top: 0px;
            transform: translateX(400px);
            transition-duration: 1s;
            padding: 35px;
            padding-top: 40px;
            padding-right: 80px;
            text-align: right;
          }
          .active {
            transform: translateX(0px);
          }
          .phoneNav {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: hsl(10, 0%, 80%);
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 15px;
            border-radius: 5px;
            z-index: 1;
          }
          .content {
            margin-bottom: 70px;
          }
        `}
      </style>
    </div>
  );
}
