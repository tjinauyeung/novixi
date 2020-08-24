import React from "react";

import Page from "./page";
import Nav from "./nav";
import NavItem from "./nav/nav-item";
import Landing from "./landing";
import OurVision from "./our-vision";
import WhatWeOffer from "./what-we-offer";
import Offer from "./what-we-offer/offer";
import HowWeDiffer from "./how-we-differ";
import Testimonials from "./testimonials";
import Testimonial from "./testimonials/testimonial";
import OnLinkedIn from "./on-linkedin";
import ContactUs from "./contact-us";
import ContactBadge from "./contact-badge";
import Footer from "./footer";

const Components = {
  page: Page,
  nav: Nav,
  nav_item: NavItem,
  landing: Landing,
  our_vision: OurVision,
  what_we_offer: WhatWeOffer,
  offer: Offer,
  how_we_differ: HowWeDiffer,
  testimonials: Testimonials,
  testimonial: Testimonial,
  on_linkedin: OnLinkedIn,
  contact_us: ContactUs,
  contact_badge: ContactBadge,
  footer: Footer,
};

const NotFound = (props) => (
  <div>
    Component {props.blok.component} is not defined. Add it to components.js
  </div>
);

const SbComponents = (type) => {
  if (typeof Components[type] === "undefined") {
    return NotFound;
  }
  return Components[type];
};

export default SbComponents;
