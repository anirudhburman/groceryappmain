package com.grocery.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grocery.model.UserModel;
import com.grocery.service.UserService;

@WebMvcTest(UserController.class)
class UserControllerTests {
  
  @Autowired
  private MockMvc mockMvc;
  
  @MockBean
  private UserService userService;
  
//  @Test
	/*
	 * public void testAddUser() throws Exception { UserModel user = new
	 * UserModel(); user.setUserName("John Doe");
	 * user.setUserPassword("john.doe@example.com");
	 * 
	 * when(userService.addUser(user)).thenReturn(user);
	 * 
	 * mockMvc.perform(post("/adduser") .contentType(MediaType.APPLICATION_JSON)
	 * .content(asJsonString(user))) .andExpect(status().isOk())
	 * .andExpect(jsonPath("$", is(user)));
	 */
//      .andExpect(jsonPath("$.userName", is("John Doe")))
//      .andExpect(jsonPath("$.userPassword", is("john.doe@example.com")));
//  }
  
  @Test
  void testGetAllUsers() throws Exception {
    List<UserModel> users = new ArrayList<>();
    UserModel user1 = new UserModel();
    user1.setUserName("John Doe");
    user1.setUserPassword("john.doe@example.com");
    users.add(user1);
    
    UserModel user2 = new UserModel();
    user2.setUserName("Jane Doe");
    user2.setUserPassword("jane.doe@example.com");
    users.add(user2);
    
    when(userService.getAllUsers()).thenReturn(users);
    
    mockMvc.perform(get("/getallusers"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$", hasSize(2)))
      .andExpect(jsonPath("$[0].userName", is("John Doe")))
      .andExpect(jsonPath("$[0].userPassword", is("john.doe@example.com")))
      .andExpect(jsonPath("$[1].userName", is("Jane Doe")))
      .andExpect(jsonPath("$[1].userPassword", is("jane.doe@example.com")));
  }
  
  private static String asJsonString(final Object obj) {
    try {
      return new ObjectMapper().writeValueAsString(obj);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }
}

//@SpringBootTest
//@ExtendWith(MockitoExtension.class)
//public class UserControllerTests {
//	
//	@InjectMocks
//	private UserController controller;
//	
//	@Mock
//	private UserService userService;
//	
//	private MockMvc mockMvc;
//	
//	private ObjectMapper mapper = new ObjectMapper();
//	
//	@Test
//	void testAddUser() throws Exception {
//		
//		UserModel user = new UserModel();
//	    user.setUserName("John Doe");
//	    user.setUserPassword("john.doe@example.com");
//	    
//	    when(userService.addUser(user)).thenReturn(user);
//	    
//		mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
//		
//		mockMvc.perform(post("/adduser")
//				.content(mapper.writeValueAsString(user))
//				.contentType(MediaType.APPLICATION_JSON)
//				.accept(MediaType.APPLICATION_JSON))
//		.andExpect(status().isOk())
//		.andExpect(jsonPath("$.userName").value(user.getUserName()))
//		.andExpect(jsonPath("$.userPassword").value(user.getUserPassword()));
//	}
//}

