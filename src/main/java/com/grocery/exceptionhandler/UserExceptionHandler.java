package com.grocery.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.grocery.exception.UserNotFoundException;

@RestControllerAdvice
public class UserExceptionHandler {
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<String> handleUserNotFoundException(String msg) {
		return new ResponseEntity<>(msg + " not found", HttpStatus.NOT_FOUND);
	}
}
