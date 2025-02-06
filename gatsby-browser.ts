/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/styles/global.scss";

export const onInitialClientRender = () => {
  const announcer = document.getElementById("gatsby-announcer");
  if (announcer) {
    announcer.remove();
  }
};
