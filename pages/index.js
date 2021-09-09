import * as React from "react";

import { useRouter } from "next/router";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div className="container-fluid homeFull d-flex flex-column justify-content-center align-items-center">
      <img
        src={`${process.env.assetPrefix}/img/tsontokomik-logo-white.svg`}
        className="img-fluid comingSoonLogo"
        alt="banner"
      />

      <h1 className="pt-4">coming... soon!</h1>
      <style global jsx>
        {`
          @font-face {
            font-family: "Lack", sans-serif;
            src: url(fonts/Lack-Regular.otf) format("opentype");
          }

          @font-face {
            font-family: "Lack", sans-serif;
            src: url(fonts/Lack-Italic.otf) format("opentype");
            font-style: italic;
          }

          @font-face {
            font-family: "Lack Line", sans-serif;
            src: url(fonts/Lack-Line-Regular.otf) format("opentype");
          }

          @font-face {
            font-family: "Lack Line", sans-serif;
            src: url(fonts/Lack-Line-Italic.otf) format("opentype");
            font-style: italic;
          }

          .homeFull {
            height: 100vh;
          }
          .comingSoonLogo {
            width: 50%;
          }

          @media only screen and (max-width: 600px) {
            .comingSoonLogo {
              width: 100%;
            }
          }

          html {
            margin-left: calc(100vw - 100%);
          }
          body {
            font-family: Lack, Verdana, Geneva, sans-serif;
             {
              /* color: #3e3e3e; */
            }

            background: linear-gradient(
              180deg,
              #fc9bb3 0%,
              rgba(252, 155, 179, 0) 100%
            );
          }

          svg {
            height: 30px;
            cursor: pointer;
            animation: rotation 2s infinite linear;
          }

          .content {
            margin-bottom: 70px;
          }
        `}
      </style>
    </div>
  );
}
