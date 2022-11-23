import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
    );
};

export default Main;