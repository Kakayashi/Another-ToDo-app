import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	${Label} {
		margin: 10px;
	}
`;

function FormFild({ value, label, name, id, type = "text", ...props }) {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input id={id} name={name} type={type} value={value} {...props} />
		</Wrapper>
	);
}

export default FormFild;
