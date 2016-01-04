import About from '../components/About'
import App from '../components/App'
import Hindsight from '../components/Hindsight'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Shop from '../components/Shop'

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
      routeName: 'home'
    },
    {
      path: '/projects',
      component: Projects,
      routeName: 'projects'
    },
    {
      path: '/about',
      component: About,
      routeName: 'about'
    },
    {
      path: '/shop',
      component: Shop,
      routeName: 'shop'
    },
    {
      path: '/hindsight',
      component: Hindsight,
      routeName: 'hindsight'
    }
  ]
}
