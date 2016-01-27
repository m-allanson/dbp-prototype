import React from 'react'
import Projects from '../components/projects/Projects'
import { connect } from 'react-redux'
import _forOwn from 'lodash/forOwn'
import _objectSet from 'lodash/set'

const ProjectsContainer = ({
  params, categories
}) => {
  return <Projects categories={ categories } />
}

// Convert project and category state objects to a single normalised object,
// arranged by category:
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
  const normalised = Object.assign({}, categories)
  _forOwn(projects, (project) => {
    const catId = project.category
    _objectSet(normalised, `${catId}.projects.${project.id}`, project)
  })
  return normalised
}

const select = (state) => {
  return {
    categories: getProjectsByCategory(state.projects, state.categories)
  }
}

export default connect(select)(ProjectsContainer)
