import React from "react";
import { Input, FormBtn } from "../../Form"
import "./NavSearch.css";

const NavSearch = props => (
    <form>
        <Input id={props.name} type="text" placeholder={props.placeholder} className="u-pull-left search-input" ></Input>
        <FormBtn className="button-primary" type="submit" value="Submit">Submit</FormBtn>
    </form>
)

export default NavSearch;