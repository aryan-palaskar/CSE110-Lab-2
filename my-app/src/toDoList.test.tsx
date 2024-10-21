import {render, screen, fireEvent} from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { BrowserRouter as Router } from "react-router-dom";
import { dummyGroceryList, dummyNotesList } from "./constants";

describe("ToDoList Testing", () => {

    test("rendering grocery list", () => {
        render(
            <Router>
                <ToDoList/>
            </Router>
        );

        dummyNotesList.forEach(item => {
            const title = screen.getByText(item.title);
            expect(title).toBeInTheDocument();
        });
    })
})