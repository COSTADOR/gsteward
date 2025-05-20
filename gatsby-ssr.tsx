import React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      src="https://mm-uxrv.com/js/business_eaefeaa2-7f7b-49d8-a73e-4142f671a6ff-85432678.js"
    />,
  ]);
};
