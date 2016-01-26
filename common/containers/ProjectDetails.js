import React, { Component } from 'react'
import Project from '../components/Project'
import { connect } from 'react-redux'
import _find from 'lodash/find'

class ProjectDetails extends Component {
  render () {
    const { project } = this.props
    return <Project project={ project } />
  }
}

ProjectDetails.propTypes = {
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

export default connect(mapStateToProps)(ProjectDetails)
