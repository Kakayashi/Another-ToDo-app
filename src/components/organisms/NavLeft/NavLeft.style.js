import styled from "styled-components";
import { Logo } from "../../atoms/Logo/Logo";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	width: 10vw;
	min-width: 150px;
	height: 100vh;

	flex-direction: column;
	align-items: center;

	text-align: center;

	${Logo} {
		margin-top: 0;
	}
`;
export const StyledLink = styled(NavLink)`
	cursor: pointer;
	position: relative;
	font-weight: bold;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	width: 100px;
	padding: 2px 30px;
	margin-bottom: 20px;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 10px;
	&:hover {
		color: ${({ theme }) => theme.colors.orange};
	}

	&.active {
		&::after {
			opacity: 1;
		}
	}

	&::after {
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
		content: "";
		position: absolute;
		width: 18px;
		height: 3px;
		top: 50%;
		transform: translateY(-50%);
		right: 75px;
		background-color: ${({ theme }) => theme.colors.white};
	}
`;
