/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
const useMeetingListItem = (props) => {
  const [items, setItems] = useState([1, 2, 3, 5, 6, 7]);

  const onClick = () => {};

  const data = { items, items };

  const fns = { onClick };

  return { data, fns };
};

export default useMeetingListItem;
