import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	width: 50vw;
	height: 80vh;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 20px;

	margin: auto;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	label {
		color: white;
	}
	p {
		color: ${({ theme }) => theme.colors.orange};
	}
`;
