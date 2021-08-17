import React from "react";
import { Nav, NavLogo, NavLink, Bars, NavMenu } from "./NavBarElements";

const Navbar = () => {
	return(
		<Nav>
			<NavLogo to="/">
				Logo
			</NavLogo>
			<Bars />

			<NavMenu>
				<NavLink to="/" activeStyle>
					Home
				</NavLink>
				<NavLink to="/Category" activeStyle>
					Category
				</NavLink>
				<NavLink to="/Trademarks" activeStyle>
					tradermaks
				</NavLink>
				<NavLink to="/Shop" activeStyle>
					shop
				</NavLink>
			</NavMenu>
		</Nav>
	);
}

export default Navbar;