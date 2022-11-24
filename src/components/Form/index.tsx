import { FormEvent, useState } from "react";
import { SubmitButton, TextButton, TodoForm, TodoInput } from "./styles";

interface todoObject {
    text: string;
    id: number;
}

interface FormProps {
    addTodo: (obj: todoObject) => void;
}

export default function Form({ addTodo }: FormProps) {
    const [text, setText] = useState('');
    const [id, setId] = useState(0);

    const todoCreate = (event: FormEvent) => {
        event?.preventDefault();

        if (text) {
            const todoObject = { text: text, id: id };

            setId(id + 1);
            addTodo(todoObject);
            setText('');
        }
    }

    return (
        <TodoForm onSubmit={(event: FormEvent) => todoCreate(event)}>
            <TodoInput
                type="text"
                value={text}
                placeholder="Tarefa"
                onChange={(event) => setText(event.target.value)}
            />
            <SubmitButton type="submit">
                <TextButton>
                    Adicionar
                </TextButton>
            </SubmitButton>
        </TodoForm>
    )
}
