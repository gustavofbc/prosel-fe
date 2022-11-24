import { MdDelete } from 'react-icons/md'
import { ListItem, TitleItem } from './styles';

interface todoObject {
    id: number;
    text: string;
}

interface TodoItemProps {
    todo: todoObject;
    deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo }: TodoItemProps) {

    return (
        <ListItem>
            <TitleItem>{todo?.text}</TitleItem>
            <MdDelete onClick={() => deleteTodo(todo?.id)} size={24} className="deleteIcon" />
        </ListItem>
    )
}
