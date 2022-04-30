import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import todoService from '../services/TodoService';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useHistory } from 'react-router-dom';

const AddTodo = () => {

    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    let history = useHistory()

    const add = () => {
        const todo = { title: title, task: task }
        todoService.add(todo)
            .then(() => alertify.success("Task added!", 2), history.push('/'))
            .catch(() => alertify.success("Task could not added!", 2), history.push('/'))
    }

    return (
        <div className="container my-5">
            <Form onSubmit={add}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" required
                        onChange={e => setTitle(e.target.value)} />
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Label>Task</Form.Label>
                    <Form.Control as="textarea" placeholder="Task" required
                        onChange={e => setTask(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" type="submit" size="lg">
                        Add
                    </Button>
                </div>
            </Form >
        </div >
    )
}

export default AddTodo