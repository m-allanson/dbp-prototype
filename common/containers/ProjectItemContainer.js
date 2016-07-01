import React, { Component } from 'react'
import ProjectItem from '../components/project-item/ProjectItem'
import { connect } from 'react-redux'
import _find from 'lodash/find'

class ProjectItemContainer extends Component {
  render () {
    const { project } = this.props
    return <ProjectItem project={project} />
  }
}

ProjectItemContainer.propTypes = {
  project: React.PropTypes.object.isRequired
}

const getProjectFromSlug = (slug, projects) => {
  return _find(projects,
    project => project.slug === slug
  )
}

const integerSort = (a, b) => { return parseInt(a, 10) - parseInt(b, 10) }

const adjacentProjects = (project, allProjects) => {
  const keys = Object.keys(allProjects).sort(integerSort)
  const location = keys.indexOf(project.id.toString()) // object keys are always strings in js
  const adjacents = {}
  if (location < keys.length) { adjacents.nextProject = allProjects[keys[location + 1]] }
  if (location > 0) { adjacents.previousProject = allProjects[keys[location - 1]] }
  return adjacents
}

const mapStateToProps = (state, ownProps) => {
  const project = getProjectFromSlug(ownProps.params.slug, state.projects)
  Object.assign(project, adjacentProjects(project, state.projects))
  return { project }
}

export default connect(mapStateToProps)(ProjectItemContainer)
