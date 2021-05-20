import React from 'react';
import {graphql, Link} from 'gatsby';
import {css} from '@emotion/core';
import {rhythm} from '../utils/typography';
import Layout from '../components/layout';

const getCoffeeCups = (minute) => Math.floor(minute / 5) + 1;

export default ({data}) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {data.site.siteMetadata.slogan}
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <div
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                <Link to={node.fields.slug}>{node.frontmatter.title} </Link>
              </div>
              <div>
                <span
                  css={css`
                    color: #bbb;
                    font-size: 1rem;
                  `}
                >
                  {node.frontmatter.date}
                  {'  -  '}
                  {Array(getCoffeeCups(node.timeToRead)).fill('☕️')}{' '}
                  {node.timeToRead} min read
                </span>
              </div>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        slogan
      }
    }
  }
`;
