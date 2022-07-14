import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initalstate = [
	{
		id: uuid(),
		nazwa: "nazwa",
		opis: "Lorem ipsum",
		od: "10.10.1010",
		do: "10.10.1010",
	},
];

const todoSlice = createSlice({
	name: "todo",
	initialState: initalstate,
	reducers: {
		addToDo(state, action) {
			state.push({
				id: uuid(),
				...action.payload,
			});
		},
		removeToDo(state, action) {
			return state.filter((note) => note.id !== action.payload.id);
		},
	},
});

export const { addToDo, removeToDo } = todoSlice.actions;

export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	},
});
