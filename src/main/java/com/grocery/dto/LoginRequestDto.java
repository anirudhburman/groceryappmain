package com.grocery.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoginRequestDto {
	
	@NotBlank(message="UserName is a required field")
	private String userName;
	@NotBlank(message="Password is a required field")
	private String password;
	
}
