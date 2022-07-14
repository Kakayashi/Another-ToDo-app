import styled from "styled-components";

export const Logo = styled.h1`
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.white};
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.background};

	margin-top: 0;
`;
