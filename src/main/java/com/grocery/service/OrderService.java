package com.grocery.service;

import com.grocery.exception.OrderNotFoundException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.OrderModel;

public interface OrderService {
	
	public OrderModel addOrder(Integer cartId, Integer totalPrice);
	
	public String cancelOrder(OrderModel order) throws OrderNotFoundException;
	
	public String cancelOrderById(Integer id) throws OrderNotFoundException;
	
	public String cancelAProduct(Integer orderId, Integer productId) throws OrderNotFoundException, ProductNotFoundException;
	
	public OrderModel updateOrder(OrderModel order) throws OrderNotFoundException;
	
	public OrderModel getOrderById(Integer orderId) throws OrderNotFoundException;
}
