import Page from "../Components/Page";

export default function PageContainer() {
  return <Page language="el"></Page>;
}

// import Head from "next/head";
// import { data } from "../data/data.js";
// import React, { useEffect, useState } from "react";
//
// export default function Home({}) {
//   let language = "en";
//   const title = data.title[language];
//   return (
//     <div className="container">
//       <Head>
//         <title>{title}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main>
//         <img
//           src={`${process.env.assetPrefix}${data.headerSrc[language]}`}
//           alt="Banner"
//           width={1920}
//           height={843}
//         />
//         <h1>{title}</h1>
//       </main>
//
//       <footer>
//         <p>Smar made this</p>
//       </footer>
//
//       <style global jsx>
//         {`
//           html {
//             margin-left: calc(100vw - 100%);
//           }
//           body {
//             background-color: #fc9bb3;
//             font-family: Verdana, Geneva, sans-serif;
//             color: #3e3e3e;
//           }
//           .container {
//             padding-top: 60px;
//           }
//           h6 {
//             font-style: italic;
//           }
//           .card {
//             background-color: #f1f1f1;
//             border-color: #f1f1f1;
//           }
//           .floatingImage {
//             float: right;
//           }
//           .content {
//             margin-bottom: 70px;
//             padding-left: 0px;
//           }
//           .link {
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
