import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
import About from '../components/About'
import Hindsight from '../components/Hindsight'
import Home from '../components/Home'
import ProjectDetails from '../containers/ProjectDetails'
import Projects from '../containers/Projects'
import Shop from '../components/Shop'

export default ({
  history
}) => {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} sectionName='home' />
        <Route path='projects/:slug' component={ProjectDetails} name='project' sectionName='projects' />
        <Route path='projects' component={Projects} sectionName='projects' />
        <Route path='about' component={About} sectionName='about' />
        <Route path='shop' component={Shop} sectionName='shop' />
        <Route path='hindsight' component={Hindsight} sectionName='hindsight' />
      </Route>
    </Router>
  )
}
