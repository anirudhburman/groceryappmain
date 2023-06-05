package com.grocery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.exception.OrderNotFoundException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.OrderModel;
import com.grocery.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class OrderController {

	@Autowired
	OrderService orderSer;

	// http://localhost:8080/addorder
	@PostMapping("/addorder/{cartId}/{total}")
	public OrderModel addOrder(@PathVariable("cartId") Integer cartId, @PathVariable("total") Integer total) {
		return orderSer.addOrder(cartId, total);
	}

	// http://localhost:8080/cancelorder
	@PostMapping("/cancelorder")
	public String cancelOrder(@RequestBody OrderModel order) throws OrderNotFoundException {
		return orderSer.cancelOrder(order);
	}

	/**
	 * http://localhost:8080/cancelorderbyid/{id}
	 * 
	 * @param id
	 * @return
	 * @throws OrderNotFoundException
	 */
	@GetMapping("/cancelorderbyid/{id}")
	public String cancelOrderById(@PathVariable("id") Integer id) throws OrderNotFoundException {
		return orderSer.cancelOrderById(id);
	}

	/**
	 * http://localhost:8080/cancelproduct/{orderid}/{productid}
	 * 
	 * @param orderId
	 * @param productId
	 * @return
	 * @throws OrderNotFoundException
	 * @throws ProductNotFoundException
	 */
	@PostMapping("/cancelproduct/{orderid}/{productid}")
	public String cancelAProduct(@PathVariable("orderid") Integer orderId, @PathVariable("productid") Integer productId)
			throws OrderNotFoundException, ProductNotFoundException {
		return orderSer.cancelAProduct(orderId, productId);
	}

	// http://localhost:8080/updateorder
	@PostMapping("/updateorder")
	public OrderModel updateOrder(@RequestBody OrderModel order) throws OrderNotFoundException {
		return orderSer.updateOrder(order);
	}

	/**
	 * http://localhost:8080/getorderbyid/{id}
	 * 
	 * @param orderId
	 * @return
	 * @throws OrderNotFoundException
	 */
	@GetMapping("/getorderbyid/{id}")
	public OrderModel getOrderById(@PathVariable("id") Integer orderId) throws OrderNotFoundException {
		return orderSer.getOrderById(orderId);
	}
}
