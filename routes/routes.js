import About from '../components/about/About'
import App from '../components/app/App'
import Hindsight from '../components/hindsight/Hindsight'
import Home from '../components/home/Home'
import Projects from '../components/projects/Projects'
import Shop from '../components/shop/Shop'

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
