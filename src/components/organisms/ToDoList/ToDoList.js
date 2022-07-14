import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../../atoms/Title/Title";
import ListItem from "../../molecules/ListItem/ListItem";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60vw;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 20px;
	padding-bottom: 20px;
	margin: auto;
	margin-top: 50px;
`;

const ToDoList = () => {
	const todo = useSelector((state) => state.todo);

	return (
		<Wrapper>
			<Title isBig>List</Title>
			{todo.map((el) => {
				return (
					<ListItem
						id={el.id}
						key={el.id}
						nazwa={el.nazwa}
						opis={el.opis}
						from={el.od}
						to={el.do}
					/>
				);
			})}
		</Wrapper>
	);
};

export default ToDoList;
