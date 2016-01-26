import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import About from '../components/About'
import App from './App'
import Hindsight from '../components/Hindsight'
import Home from '../components/Home'
import ProductItemContainer from '../containers/ProductItemContainer'
import ProductsContainer from '../containers/ProductsContainer'
import ProjectItemContainer from '../containers/ProjectItemContainer'
import ProjectsContainer from '../containers/ProjectsContainer'

export default ({
  history
}) => {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} sectionName='home' />
        <Route path='projects/:slug' component={ProjectItemContainer} sectionName='projects' />
        <Route path='projects' component={ProjectsContainer} sectionName='projects' />
        <Route path='about' component={About} sectionName='about' />
        <Route path='shop/:slug' component={ProductItemContainer} sectionName='projects' />
        <Route path='shop' component={ProductsContainer} sectionName='shop' />
        <Route path='hindsight' component={Hindsight} sectionName='hindsight' />
      </Route>
    </Router>
  )
}
