import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div>
      <Header headerText={`About Gatsby`} />
      <Header headerText={`It's pretty cool.`} />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
