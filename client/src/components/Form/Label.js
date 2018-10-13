import React from "react";
import "./Form.css"

export const Label = props => (
    <label {...props}>
		{props.children}
	</label>
);
