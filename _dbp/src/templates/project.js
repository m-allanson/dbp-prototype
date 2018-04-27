import React from 'react'
import Project from '../components/project'
export default ({ data }) => <Project {...data.projectsJson} />

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      slug
      content
      credits
      url
      vimeoIds
      images
      category
    }
  }
`
