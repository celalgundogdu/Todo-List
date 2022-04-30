import { useEffect, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Table } from 'react-bootstrap';
import todoService from '../services/TodoService';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useHistory } from 'react-router-dom';

const ListTodo = () => {

    const [todos, setTodos] = useState([])
    let history = useHistory()

    useEffect(() => {
        todoService.getAll().then(response => setTodos(response.data))
    })

    const addTodo = () => {
        history.push('/add')
    }

    const deleteTodo = (id) => {
        todoService.delete(id)
            .then(() => alertify.success("Task removed!", 2))
            .catch(() => alertify.danger("Task could not removed!", 2))
    }

    const updateTodo = (id) => {
        history.push(`/update/${id}`)
    }

    return (
        <div className="container my-5">
            <div className="d-grid my-3">
                <Button variant="outline-primary" size="lg"
                    onClick={() => addTodo()}>Create Todo</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, i) => (
                            <tr key={todo.id}>
                                <td>{i + 1}</td>
                                <td>{todo.title}</td>
                                <td className="text-wrap">{todo.task}</td>
                                <td>
                                    <ButtonToolbar>
                                        <ButtonGroup className='me-4'>
                                            <Button variant="outline-danger"
                                                onClick={() => deleteTodo(todo.id)}>Delete</Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button variant="outline-warning" onClick={() => updateTodo(todo.id)}>Edit</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ListTodo