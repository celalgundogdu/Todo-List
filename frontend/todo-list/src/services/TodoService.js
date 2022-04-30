import axios from 'axios';

const LIST_URL = '/v1/todo'
const DELETE_URL = '/v1/todo/delete/'
const ADD_URL = '/v1/todo/add'
const UPDATE_URL = '/v1/todo/update/'

class TodoService {

    getAll() {
        return axios.get(LIST_URL)
    }

    delete(id) {
        return axios.delete(DELETE_URL + id)
    }

    add(todo) {
        return axios.post(ADD_URL, todo)
    }

    getById(id) {
        return axios.get(LIST_URL + "/" + id)
    }

    update(id, todo) {
        return axios.put(UPDATE_URL + id, todo)
    }
}

export default new TodoService()