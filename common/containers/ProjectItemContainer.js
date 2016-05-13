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

const mapStateToProps = (state, ownProps) => {
  return {
    project: getProjectFromSlug(ownProps.params.slug, state.projects)
  }
}

export default connect(mapStateToProps)(ProjectItemContainer)
