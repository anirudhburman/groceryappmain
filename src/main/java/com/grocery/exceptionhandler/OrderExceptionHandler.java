package com.grocery.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.grocery.exception.OrderNotFoundException;

@RestControllerAdvice
public class OrderExceptionHandler {
	
	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<String> handleOrderNotFoundException() {
		return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
	}
}
