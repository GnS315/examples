import React from "react";
import {SortableElement} from "react-sortable-hoc";

const Element = ({url}) => <img
    style={{
      margin: 20,
      maxWidth: 250,
      display: 'flex',
      borderRadius: 10,
      boxShadow: '5px 5px 10px rgba(0, 0, 0, .5)'
    }}
    src={url}
  />

export default SortableElement(Element)