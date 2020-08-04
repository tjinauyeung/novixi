import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import NavItem from './nav_item'
import ComponentNotFound from './component_not_found'
import Splash from './splash';
import Testimonial from './testimonial';
import Testimonials from './testimonials';

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  splash: Splash,
  testimonial: Testimonial,
  testimonials: Testimonials,
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
