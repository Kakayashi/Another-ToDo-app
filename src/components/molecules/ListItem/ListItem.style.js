import styled from "styled-components";
import { Title } from "../../atoms/Title/Title";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	height: auto;
	margin: 20px 0;
	position: relative;
	@media (max-width: 1600px) {
		flex-direction: column;
	}

	background-color: ${({ theme }) => theme.colors.grey};
	align-items: center;
	border-radius: 20px;

	${Title} {
		max-width: 200px;
		margin-left: 30px;
		font-size: 40px;
	}
`;

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	margin: 0 40px;
	margin-top: -20px;
	width: 250px;
	height: 120px;
	white-space: initial;
	justify-content: center;
	text-align: center;
	word-wrap: break-word;

	div {
		margin-top: -10px;
	}
`;

export const DataWraper = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	align-items: center;
	width: 100px;
	margin: 20px;

	div {
		margin-top: -10px;
		font-size: 26px;
	}
	h2 {
		border: 2px solid white;
		padding: 10px;
		border-radius: 90px;
		width: 50px;
		height: 50px;
		text-align: center;
		cursor: pointer;
		position: absolute;
		top: 15px;
		left: 90%;

		@media (max-width: 1600px) {
			transition: none;
			left: 40vw;
			top: 0px;
		}
	}
	h2:hover {
		border: 2px solid ${({ theme }) => theme.colors.orange};
		color: ${({ theme }) => theme.colors.orange};
	}

	@media (max-width: 1600px) {
		margin-top: -10px;
	}
`;
