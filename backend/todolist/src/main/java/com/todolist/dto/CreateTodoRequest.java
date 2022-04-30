package com.todolist.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class CreateTodoRequest {
    @NotBlank(message = "Title is needed")
    @Size(max = 50)
    private String title;
    @NotBlank(message = "Task is needed")
    private String task;
}
