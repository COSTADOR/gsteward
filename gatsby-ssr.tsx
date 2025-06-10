import React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      key="mm-uxrv"
      async
      src="https://mm-uxrv.com/js/business_eaefeaa2-7f7b-49d8-a73e-4142f671a6ff-85432678.js"
    />,
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFQCX96M');`,
      }}
    />,
  ]);
  
  setPreBodyComponents([
    <noscript
      key="gtm-body11"
      dangerouslySetInnerHTML={{
        __html: `<iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NFQCX96M"
          height="0"
          width="0"
          style="display:none;visibility:hidden">
        </iframe>`
      }}
    />,
  ]);
};
