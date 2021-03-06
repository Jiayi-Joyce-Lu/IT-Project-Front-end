import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PortfolioIcon from "@material-ui/icons/Collections";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {withRouter} from "react-router-dom";

const Nav = (props) => {
    console.log(props);
    return (
        <nav>
            <NavLink exact to="/">
                <HomeIcon />
            </NavLink>

        <NavLink exact to="/blog">
            <PortfolioIcon />
        </NavLink>
        <NavLink exact to="/usercenter">
            <AccountCircleIcon />
        </NavLink>
    </nav>
)
}

function backHomePage(){
    //window.location.assign(`https://genius-solio.herokuapp.com/`);
    window.location.assign(`https://genius-solio.herokuapp.com/`);
}
export default withRouter(Nav)