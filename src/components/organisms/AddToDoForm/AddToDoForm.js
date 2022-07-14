import React, { useState } from "react";
import { addToDo } from "../../../store";
import { Title } from "../../atoms/Title/Title";
import FormFild from "../../molecules/FormField/FormFild";
import { Wrapper } from "./AddToDoForm.style";
import { useDispatch, useSelector } from "react-redux";

const initalstate = [
	{
		nazwa: "nazwa",
		opis: "Lorem ipsum",
		od: "10.10.1010",
		do: "10.10.1010",
	},
];

const AddToDoForm = () => {
	const todo = useSelector((state) => state.todo);
	const dispatch = useDispatch();
	const [value, setValue] = useState({
		nazwa: "",
		opis: "",
		od: "",
		do: "",
	});
	const [warning, setWarning] = useState(null);

	const handleChange = (e) => {
		const name = e.target.name;
		setValue({ ...value, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.nazwa === "" || value.opis === "")
			setWarning("Add name and description");
		else {
			dispatch(
				addToDo({
					nazwa: value.nazwa,
					opis: value.opis,
					od: value.od,
					do: value.do,
				})
			);
			console.log(todo);
		}
	};

	return (
		<Wrapper>
			<Title isBig>Add todo</Title>
			{warning !== null ? <p>{warning}</p> : null}
			<FormFild
				label="name"
				name="nazwa"
				id="nazwa"
				value={value.nazwa}
				onChange={(e) => handleChange(e)}
			/>
			<FormFild
				label="description"
				name="opis"
				id="opis"
				type="text"
				value={value.opis}
				onChange={(e) => handleChange(e)}
			/>
			<FormFild
				label="Od Kiedy"
				name="od"
				id="od"
				type="date"
				value={value.od}
				onChange={(e) => handleChange(e)}
			/>
			<FormFild
				label="Do Kiedy"
				name="do"
				id="do"
				type="date"
				value={value.do}
				onChange={(e) => handleChange(e)}
			/>
			<FormFild
				name="przeslij"
				id="przeslij"
				type="submit"
				onClick={handleSubmit}
			/>
		</Wrapper>
	);
};

export default AddToDoForm;
