import Page from "./page";
import Landing from "./landing";
import Testimonial from "./testimonial";
import TwoColumnSection from "./two-column-section";
import ThreeColumnSection from "./three-column-section";
import ComponentNotFound from "./component_not_found";
import GradientCard from "./gradient-card";
import Footer from './footer';
import Wave from "./wave";
import Form from "./form";

const ComponentList = {
  page: Page,
  landing: Landing,
  testimonial: Testimonial,
  testimonials: ThreeColumnSection,
  three_column_section: ThreeColumnSection,
  two_columns: TwoColumnSection,
  two_column_section: TwoColumnSection,
  gradient_card: GradientCard,
  wave: Wave,
  footer: Footer,
  form: Form
};

const Components = (type) => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
