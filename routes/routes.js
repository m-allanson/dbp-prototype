import About from '../components/about/About';
import App from '../components/app/App';
import Hindsight from '../components/hindsight/Hindsight';
import Home from '../components/home/Home';
import Projects from '../components/projects/Projects';
import Shop from '../components/shop/Shop';

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
      routeClass: 'section-home'
    },
    {
      path: '/projects',
      component: Projects,
      routeClass: 'section-projects'
    },
    {
      path: '/about',
      component: About,
      routeClass: 'section-about'
    },
    {
      path: '/shop',
      component: Shop,
      routeClass: 'section-shop'
    },
    {
      path: '/hindsight',
      component: Hindsight,
      routeClass: 'section-hindsight'
    }
  ]
}
