import React from 'react'
import { Redirect, Router, Route, IndexRoute, applyRouterMiddleware } from 'react-router'
import useScroll from 'react-router-scroll'
import About from '../components/about/About'
import App from './App'
import Contact from '../components/contact/Contact'
import ProductItemContainer from '../containers/ProductItemContainer'
import ProductsContainer from '../containers/ProductsContainer'
import ProjectItemContainer from '../containers/ProjectItemContainer'
import ProjectsContainer from '../containers/ProjectsContainer'

const isBrowser = typeof window !== 'undefined'
const isProduction = process.env.NODE_ENV === 'production'
const ReactGA = isBrowser ? require('react-ga') : undefined

if (isBrowser && isProduction) { ReactGA.initialize('UA-39572854-2') }

const logPageView = () => {
  if (isBrowser && isProduction) {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}

const Routes = ({
  history
}) => {
  return (
    <Router history={history} render={applyRouterMiddleware(useScroll())} onUpdate={logPageView}>
      <Route path='/' component={App}>
        <IndexRoute component={ProjectsContainer} sectionName='projects' />
        <Redirect from='projects' to='/' />
        <Route path='projects/:slug' component={ProjectItemContainer} sectionName='projects' />
        <Route path='about' component={About} sectionName='about' />
        <Route path='contact' component={Contact} sectionName='contact' />
        <Route path='shop/:slug' component={ProductItemContainer} sectionName='shop' />
        <Route path='shop' component={ProductsContainer} sectionName='shop' />
        <Route path='about' component={About} sectionName='about' />
      </Route>
    </Router>
  )
}

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Routes
