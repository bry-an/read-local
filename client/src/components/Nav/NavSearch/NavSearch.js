import React from "react";
import { Input, FormBtn } from "../../../components/Form"
import "./NavSearch.css";

const NavSearch = props => (
    <form>
        <Input id="Search" type="text" placeholder="Search" className="u-pull-left search-input" ></Input>
        <FormBtn class="button-primary" type="submit" value="Submit">Submit</FormBtn>
    </form>
)

export default NavSearch;