import React from 'react'
import ProjectCategories from '../components/ProjectCategories'
import { connect } from 'react-redux'
import _forOwn from 'lodash/forOwn'
import _objectSet from 'lodash/set'

const Projects = ({
  params, categories
}) => {
  return <ProjectCategories categories={ categories } />
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
  _forOwn(projects, (project) => {
    const catId = project.category
    if (!categories[catId].projects) {
      _objectSet(categories, `${catId}.projects`, [])
    }
    categories[catId].projects.push(project)
  })
  return categories
}

const select = (state) => {
  return {
    categories: getProjectsByCategory(state.projects, state.categories)
  }
}

export default connect(select)(Projects)
