import React from 'react'
import ProjectCategories from '../components/ProjectCategories'
import { connect } from 'react-redux'

const Projects = ({
  params, categories
}) => {
  return <ProjectCategories categories={categories} />
}

// Convert state structure to something like:
// {
//   1: {
//     id: 1
//     name: 'cat A',
//     projects: {
//       1: {},
//       2: {}
//     }
//   }
// }
const getProjectsByCategory = (projects, categories) => {
  let mapped = {}

  Object.keys(projects).forEach(key => {
    let project = projects[key]
    const categoryId = project.category
    if (!mapped[categoryId]) {
      mapped[categoryId] = Object.assign(categories[categoryId], {projects: []})
    }
    mapped[project.category].projects.push(project)
  })

  return mapped
}

const select = state => {
  return {
    categories: getProjectsByCategory(state.projects, state.categories)
  }
}

export default connect(select)(Projects)
