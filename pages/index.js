import * as React from "react";
import Link from "next/link";

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
      <div className="pt-3 d-flex justify-content-around">
        <Link href="https://www.facebook.com/tsontokomik">
          <a target="_blank">
            <img
              src={`${process.env.assetPrefix}/img/buttons/white-fb.svg`}
              className="socialButtons"
              alt="facebok"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/tsontokomik/">
          <a target="_blank">
            <img
              src={`${process.env.assetPrefix}/img/buttons/white-ig.svg`}
              className="socialButtons"
              alt="instagram"
            />
          </a>
        </Link>
        <Link href="https://twitter.com/tsontokomik">
          <a target="_blank">
            <img
              src={`${process.env.assetPrefix}/img/buttons/white-twitter.svg`}
              className="socialButtons"
              alt="twitter"
            />
          </a>
        </Link>
      </div>
      <style global jsx>
        {`
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

          .socialButtons {
            width: 50%;
          }
          a {
            text-align: center;
          }
          html {
            margin-left: calc(100vw - 100%);
          }
          body {
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
