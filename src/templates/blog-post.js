import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div
    dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
  />
)

export const query = graphql`
  query Article($name: String!) {
    file(name: { eq: $name }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
