import * as React from "react";

import { useRouter } from "next/router";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div class="container-fluid homeFull">
      <h2 class="d-flex justify-content-center ">Τσοντοκόμικ</h2>
      <h2 class="d-flex justify-content-center ">coming... soon</h2>
      <style global jsx>
        {`
          .homeFull {
            height: 100vh;
          }

          html {
            margin-left: calc(100vw - 100%);
          }
          body {
            font-family: Verdana, Geneva, sans-serif;
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
