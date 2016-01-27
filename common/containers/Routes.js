import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import About from '../components/about/About'
import App from './App'
import Home from '../components/home/Home'
import ArticleItemContainer from '../containers/ArticleItemContainer'
import ArticlesContainer from '../containers/ArticlesContainer'
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
        <Route path='hindsight/:slug' component={ArticleItemContainer} sectionName='hindsight' />
        <Route path='hindsight' component={ArticlesContainer} sectionName='hindsight' />
      </Route>
    </Router>
  )
}
