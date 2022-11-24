import { useState } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import TodoItem from "../../components/TodoItem";
import { Container } from "./styles";
interface todoObject {
    id: number;
    text: string;
}

export default function Todo() {
    const [todos, setTodos] = useState<todoObject[]>([]);

    function addTodo(todo: todoObject) {
        let newArray = [...todos, todo]
        setTodos(newArray);
    }

    function deleteTodo(id: number) {
        let filtered = todos.filter((todo: todoObject) => todo.id !== id);
        setTodos(filtered);
    }

    return (
        <>
            {/* <Header /> */}
            <Container>
                <Form addTodo={addTodo} />
                {todos.length > 0 ?
                    <ul>
                        {todos &&
                            todos.map((todo) => (
                                <div className="todo" key={todo.id}>
                                    <TodoItem todo={todo} deleteTodo={deleteTodo} />
                                </div>
                            ))}
                    </ul> :
                    <span className="warning">Sem tarefas 📖</span>
                }
            </Container>
        </>
    )
}
