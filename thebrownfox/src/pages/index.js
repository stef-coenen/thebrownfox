import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import IntroductionBlock from '../components/introductionblock';
import TrustedBy from '../components/trustedby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionBlock />
    <TrustedBy />
  </Layout>
);

export default IndexPage;
