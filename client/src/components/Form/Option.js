import React from "react";
import "./Form.css"

export const Option = props => {
    const dis=props.dis;
    return(<option value={props.value} dis > {props.children}</option>);
}