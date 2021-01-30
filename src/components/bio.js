/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="flex justify-center pb-8">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className=""
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      <div className="pl-3">
      {author?.name && (
        <p>
          <strong className="text-red-600">{author.name}</strong>
          <br/>
          <p className="text-blue-500">{author?.summary || null}</p>
          <a className="text-xs" href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter
          </a> {' '}
          <a className="text-xs" href="https://www.linkedin.com/in/peterwitham">
            LinkedIN
          </a>
        </p>
      )}
      </div>
    </div>
  )
}

export default Bio
