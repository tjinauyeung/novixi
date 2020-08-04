import Page from "./page";
import Splash from "./splash";
import Testimonial from "./testimonial";
import Testimonials from "./testimonials";
import TwoColumns from "./two-columns";
import ComponentNotFound from "./component_not_found";

const ComponentList = {
  page: Page,
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
