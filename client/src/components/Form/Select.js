import React from "react";
import "./Form.css"

export const Select = props => (
    <option value={props.options} > {props.options}</option>
);