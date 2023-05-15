package com.grocery.service;

import java.util.List;

import com.grocery.exception.ProductAlreadyExistsException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.ProductModel;
import com.grocery.model.WishlistModel;

public interface WishlistService {
	
	public WishlistModel viewWishlist(Integer id);
	
	public List<ProductModel> addProductToWishlist(Integer prodId, Integer wishId) throws ProductNotFoundException, ProductAlreadyExistsException;
	
	public List<ProductModel> deleteProductFromWishlist(Integer prodId, Integer wishlistId) throws ProductNotFoundException;

	public List<ProductModel> getAllWishProducts(Integer wishId);
}
