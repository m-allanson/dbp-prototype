import App from '../components/app/App';
import Index from '../components/index/Index';
import About from '../components/about/About';

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    }
  ]
}
