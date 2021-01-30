import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Posts" />
      <Bio />
      <p className="text-center font-bold text-red-700 p-5">Under development, thanks for being patient</p>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Link to={post.fields.slug} itemProp="url">
            <li key={post.fields.slug}>
              <article
                className="container mt-5 pt-3 pb-6 pr-6 pl-6 w-3/4 bg-yellow-100 rounded-lg shadow-lg"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                      <span itemProp="headline" className="font-bold text-xl text-red-700">{title}</span>
                  </h2>
                  <p className="font-medium text-xs pb-5 pt-1 text-gray-700">{post.frontmatter.date}</p>
                </header>
                <section>
                  <p className="tracking-normal leading-normal"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
        </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
