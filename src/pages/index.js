import React from "react";

import Layout from "../components/Globals/Layout/layout";
import SEO from "../components/Globals/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Milestones</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae
      necessitatibus repellendus illum rem, quis aut eum repellat temporibus
      eaque vero delectus sunt odio molestiae ducimus quasi exercitationem
      nesciunt et.
    </p>
  </Layout>
);

export default IndexPage;
