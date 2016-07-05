import React, { Component } from 'react'
import Projects from '../components/projects/Projects'
import { connect } from 'react-redux'
import _forOwn from 'lodash/forOwn'
import _objectSet from 'lodash/set'

class ProjectsContainer extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (categoryId) {
    const selected = this.state[categoryId] !== true
    this.setState({[categoryId]: selected})
  }

  render () {
    const { categories } = this.props
    return <Projects
      categories={categories}
      categoryStatuses={this.state}
      onClickHandler={this.handleClick}
    />
  }
}

ProjectsContainer.propTypes = {
  categories: React.PropTypes.objectOf(React.PropTypes.object).isRequired
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

  _forOwn(projects, (project) => { // assign each project to a category
    const catId = project.category
    _objectSet(normalised, `${catId}.projects.${project.id}`, project)
  })

  _forOwn(normalised, (cat) => { // remove categories without associated projects
    if (!cat.projects) delete normalised[cat.id]
  })

  return normalised
}

const select = (state) => {
  return {
    categories: getProjectsByCategory(state.projects, state.categories)
  }
}

export default connect(select)(ProjectsContainer)
