import React from "react";
import NavLeft from "../components/organisms/NavLeft/NavLeft";
import { Wrapper } from "./Root.style";
import ToDoList from "../components/organisms/ToDoList/ToDoList";
import AddToDoForm from "../components/organisms/AddToDoForm/AddToDoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedBackground from "../components/atoms/AnimatedBackground/AnimatedBackground";

const Root = () => {
	return (
		<BrowserRouter>
			<Wrapper>
				<NavLeft />
				<AnimatedBackground />
				<Routes>
					<Route path="/" exact element={<AddToDoForm />} />
					<Route path="/lista" element={<ToDoList />} />
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
};

export default Root;
