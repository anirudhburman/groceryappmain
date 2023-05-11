package com.grocery.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductNotFoundException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String message;
}
