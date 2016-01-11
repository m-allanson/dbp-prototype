import React, { Component } from 'react'
import Project from '../components/Project'
import { connect } from 'react-redux'

class ProjectDetails extends Component {
  render () {
    const { project } = this.props
    return <Project project={project} />
  }
}

ProjectDetails.propTypes = {
  project: React.PropTypes.object.isRequired
}

const getProjectFromSlug = (slug, projects) => {
  let project
  Object.keys(projects).forEach(key => {
    if (projects[key].slug === slug) project = projects[key]
  })
  return project
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: getProjectFromSlug(ownProps.params.slug, state.projects)
  }
}

export default connect(mapStateToProps)(ProjectDetails)
