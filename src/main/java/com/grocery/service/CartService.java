package com.grocery.service;

import java.util.List;

import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.CartModel;
import com.grocery.model.ProductModel;

public interface CartService {
	
	public CartModel viewCartById(Integer id);
	
	public List<ProductModel> addProductToCart(Integer cartId, Integer productId) throws ProductNotFoundException;
	
	public List<ProductModel> deleteProductFromCart(Integer cartId, Integer productId) throws ProductNotFoundException;
	
	public List<ProductModel> getAllCartProducts(Integer cartId);
}
