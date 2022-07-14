import styled from "styled-components";
import AddToDoForm from "../components/organisms/AddToDoForm/AddToDoForm";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;

	flex-direction: row;
	${AddToDoForm} {
		justify-content: center;
	}
`;
