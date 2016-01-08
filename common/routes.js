import About from './components/About'
import App from './components/App'
import Hindsight from './components/Hindsight'
import Home from './components/Home'
import Projects from './components/Projects'
import Shop from './components/Shop'

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
      sectionName: 'home'
    },
    {
      path: '/projects',
      component: Projects,
      sectionName: 'projects'
    },
    {
      path: '/about',
      component: About,
      sectionName: 'about'
    },
    {
      path: '/shop',
      component: Shop,
      sectionName: 'shop'
    },
    {
      path: '/hindsight',
      component: Hindsight,
      sectionName: 'hindsight'
    }
  ]
}
