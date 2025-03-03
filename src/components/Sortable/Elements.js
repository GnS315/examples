import React from "react";
import {SortableContainer} from 'react-sortable-hoc';
import Element from './Element'

const Elements = ({items}) => (
  <div>
    {items.map(({value, url}, index) => (
      <Element key={value} index={index} url={url}/>
    ))}
  </div>
);

export default SortableContainer(Elements)