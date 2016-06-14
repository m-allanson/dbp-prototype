import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import About from '../components/about/About'
import App from './App'
import Home from '../components/home/Home'
import ProductItemContainer from '../containers/ProductItemContainer'
import ProductsContainer from '../containers/ProductsContainer'
import ProjectItemContainer from '../containers/ProjectItemContainer'
import ProjectsContainer from '../containers/ProjectsContainer'

const Routes = ({
  history
}) => {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} sectionName='home' />
        <Route path='projects/:slug' component={ProjectItemContainer} sectionName='projects' />
        <Route path='projects' component={ProjectsContainer} sectionName='projects' />
        <Route path='about' component={About} sectionName='about' />
        <Route path='shop/:slug' component={ProductItemContainer} sectionName='shop' />
        <Route path='shop' component={ProductsContainer} sectionName='shop' />
      </Route>
    </Router>
  )
}

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Routes
