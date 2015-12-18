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
      testClass: 'App-home'
    },
    {
      path: '/projects',
      component: Projects,
      testClass: 'App-projects'
    },
    {
      path: '/about',
      component: About,
      testClass: 'App-about'
    },
    {
      path: '/shop',
      component: Shop,
      testClass: 'App-shop'
    },
    {
      path: '/hindsight',
      component: Hindsight,
      testClass: 'App-hindsight'
    }
  ]
}
