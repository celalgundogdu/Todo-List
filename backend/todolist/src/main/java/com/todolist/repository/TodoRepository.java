package com.todolist.repository;

import com.todolist.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TodoRepository extends JpaRepository<Todo, String> {

}
