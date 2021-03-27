import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <ListGroup className="mt-5 mb-2 items" style={{ top: "35%" }}>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="float-right"
            onClick={() => {
              dispatch({ type: REMOVE_TODO, payload: todo.id });
            }}
          >
            <AiFillDelete />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;