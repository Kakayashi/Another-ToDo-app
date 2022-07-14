import styled from "styled-components";

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ isBig, theme: { fontSize } }) =>
		isBig ? fontSize.xxl : fontSize.xl};
`;
