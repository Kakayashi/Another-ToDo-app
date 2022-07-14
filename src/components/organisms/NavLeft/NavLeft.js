import React from "react";
import { Wrapper } from "./NavLeft.style";
import { Logo } from "../../atoms/Logo/Logo";
import { StyledLink } from "./NavLeft.style";

const NavLeft = () => {
	return (
		<Wrapper>
			<Logo>Another ToDoApp</Logo>
			<StyledLink to="/">
				<p>Add</p>
			</StyledLink>
			<StyledLink to="/lista">
				<p>Lista</p>
			</StyledLink>
		</Wrapper>
	);
};

export default NavLeft;
