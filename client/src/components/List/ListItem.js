import React from "react";

export const ListItem = props => (
  <li className="list-group-item" id={props.id}>
    {props.children}
  </li>
);
