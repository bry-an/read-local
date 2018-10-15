import React from "react";
import "./Form.css"

export const Option = props => {
    return(<option value={props.value} > {props.children}</option>);
}