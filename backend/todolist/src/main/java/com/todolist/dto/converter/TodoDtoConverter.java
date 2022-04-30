package com.todolist.dto.converter;

import com.todolist.dto.TodoDto;
import com.todolist.entity.Todo;
import org.springframework.stereotype.Component;

@Component
public class TodoDtoConverter {

    public TodoDto convert(Todo todo) {
        return new TodoDto(todo.getId(), todo.getTitle(), todo.getTask());
    }
}
