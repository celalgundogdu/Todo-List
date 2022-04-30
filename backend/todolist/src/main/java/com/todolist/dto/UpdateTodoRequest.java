package com.todolist.dto;

import lombok.Data;

import javax.validation.constraints.Size;

@Data
public class UpdateTodoRequest {
    @Size(max = 50)
    private String title;
    private String task;
}
