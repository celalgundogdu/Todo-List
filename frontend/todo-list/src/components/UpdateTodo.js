import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import todoService from '../services/TodoService';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useHistory } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const UpdateTodo = (props) => {

    const [id, setId] = useState(props.match.params.id)
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    const [showModal, setShowModal] = useState(true)
    let history = useHistory()

    useEffect(() => {
        todoService.getById(id).then(response => {
            const todo = response.data
            setTitle(todo.title)
            setTask(todo.task)
        })
    }, [])

    const handleModal = () => {
        setShowModal(!showModal)
        history.push('/')
    }

    const update = () => {
        const todo = { title: title, task: task }
        todoService.update(id, todo)
            .then(() => alertify.success("Task updated!", 2), history.push('/'))
            .catch(() => alertify.danger("Task could not updated", 2), history.push('/'))
    }

    return (
        <div className="container">
            <Modal isOpen={showModal} onRequestClose={handleModal} ariaHideApp={false}>
                <div className="d-flex flex-row-reverse">
                    <Button variant="secondary" onClick={handleModal}>
                        <IoMdArrowRoundBack />
                    </Button>
                </div>
                <h3 className="text-center">Edit Todo</h3>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" required
                            onChange={e => setTitle(e.target.value)} value={title} />
                    </Form.Group >
                    <Form.Group className="mb-3">
                        <Form.Label>Task</Form.Label>
                        <Form.Control as="textarea" placeholder="Task" required
                            onChange={e => setTask(e.target.value)} value={task} />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </Form >
            </Modal>
        </div>
    );
}

export default UpdateTodo