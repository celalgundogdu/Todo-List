package com.todolist.service;

import com.todolist.dto.CreateTodoRequest;
import com.todolist.dto.TodoDto;
import com.todolist.dto.UpdateTodoRequest;
import com.todolist.dto.converter.TodoDtoConverter;
import com.todolist.entity.Todo;
import com.todolist.exception.TodoNotFoundException;
import com.todolist.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    private final TodoRepository todoRepository;
    private final TodoDtoConverter converter;

    public TodoService(TodoRepository todoRepository, TodoDtoConverter converter) {
        this.todoRepository = todoRepository;
        this.converter = converter;
    }

    public TodoDto createTodo(CreateTodoRequest createTodoRequest) {
        Todo todo = new Todo(createTodoRequest.getTitle(), createTodoRequest.getTask());
        todo.setCreatedDate(new Date());
        return converter.convert(todoRepository.save(todo));
    }

    public List<TodoDto> getTodos() {
        return todoRepository.findAll().stream().map(todo -> converter.convert(todo)).collect(Collectors.toList());
    }

    protected Todo findTodoById(String id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException("Todo could not find by id: " + id));
    }

    public TodoDto getTodoById(String id) {
        return converter.convert(findTodoById(id));
    }

    public TodoDto updateTodo(String id, UpdateTodoRequest request) {
        Todo todo = findTodoById(id);
        todo.setTitle(request.getTitle());
        todo.setTask(request.getTask());
        todo.setUpdatedDate(new Date());
        return converter.convert(todoRepository.save(todo));
    }

    public void deleteTodo(String id) {
        todoRepository.deleteById(id);
    }
}
