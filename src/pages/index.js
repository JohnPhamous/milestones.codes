import React from "react";

import Layout from "../components/Globals/Layout/layout";
import SEO from "../components/Globals/seo";
import Intro from "../components/Intro";

import List from "../components/List";
import Questions from "../data/questions";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Milestones"
      keywords={[`milestones`, `programming`, `checklist`, `learning`]}
    />
    <Intro />
    <List questions={Questions} />
  </Layout>
);

export default IndexPage;
