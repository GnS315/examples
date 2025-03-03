import React, { useState } from 'react';
import Elements from "./Elements";
import elementsList from "./elementsList";

const Sortable = () => {
  const [items, setItems] = useState(elementsList);

  const onSortEnd = ({oldIndex, newIndex}) => {
    const newItems = [...items];
    newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, items[oldIndex]);
    setItems(newItems);
  };

  return <Elements items={items} onSortEnd={onSortEnd} />
};

export default Sortable;