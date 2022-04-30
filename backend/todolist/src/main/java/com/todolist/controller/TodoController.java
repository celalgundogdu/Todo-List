package com.todolist.controller;

import com.todolist.dto.CreateTodoRequest;
import com.todolist.dto.TodoDto;
import com.todolist.dto.UpdateTodoRequest;
import com.todolist.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("/add")
    public ResponseEntity<TodoDto> createTodo(@Valid @RequestBody CreateTodoRequest request) {
        return ResponseEntity.ok(todoService.createTodo(request));
    }

    @GetMapping()
    public ResponseEntity<List<TodoDto>> getTodos() {
        return ResponseEntity.ok(todoService.getTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable String id) {
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TodoDto> updateTodo(@PathVariable("id") String id, @Valid @RequestBody UpdateTodoRequest request) {
        return ResponseEntity.ok(todoService.updateTodo(id, request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String id) {
        todoService.deleteTodo(id);
        return ResponseEntity.ok().build();
    }

}
