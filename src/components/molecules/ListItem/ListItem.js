import React from "react";
import { Title } from "../../atoms/Title/Title";
import { DescriptionWrapper, Wrapper, DataWraper } from "./ListItem.style";
import { useDispatch } from "react-redux";
import { removeToDo } from "../../../store/index";

function ListItem({ nazwa, opis, from, to, id }) {
	const dispatch = useDispatch();

	const handleRemoveToDo = () => {
		dispatch(removeToDo({ id: id }));
	};

	return (
		<Wrapper>
			<Title isBig>{nazwa}</Title>
			<DescriptionWrapper>
				<h3>Description</h3>
				<div>{opis}</div>
			</DescriptionWrapper>
			<DataWraper>
				<h3>from</h3>
				<div> {from}</div>
			</DataWraper>
			<DataWraper>
				<h3>to</h3>
				<div> {to}</div>
			</DataWraper>
			<DataWraper onClick={handleRemoveToDo}>
				<h2>X</h2>
			</DataWraper>
		</Wrapper>
	);
}

export default ListItem;
