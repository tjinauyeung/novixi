import React from 'react'
import Components from './components.js';
import Styles from '../styles';

const Page = (props) => (
  <div>
    <Styles />
    {props.blok.body && props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
  </div>
)

export default Page
