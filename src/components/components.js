import Page from "./page";
import NavItem from "./nav_item";
import ComponentNotFound from "./component_not_found";

import Splash from "./splash";
import Testimonial from "./testimonial";
import Testimonials from "./testimonials";
import TwoColumns from "./two-columns";

const ComponentList = {
  page: Page,
  nav_item: NavItem,
  splash: Splash,
  testimonial: Testimonial,
  testimonials: Testimonials,
  two_columns: TwoColumns,
};

const Components = (type) => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
