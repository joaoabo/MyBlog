import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"


const IndexPage = () => {
  const { allMarkdonwRemark } = useStatticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdonwRemark.edges

  return (
    <Layout>
    <Seo title="Home" />
    {postList.map({
      node: {
        frontmatter: { background, category, date, description, title },
        timeToRead
      },
    })}
      <PostItem
        slug="/about/"
        category="Misc"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />
  </Layout>
  )
}
 

export default IndexPage
