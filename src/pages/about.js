import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default ({data}) => (
  <Layout>
    <Header headerText={`About ${data.site.siteMetadata.author}`} />
    <div>
      <p>Such wow.</p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
