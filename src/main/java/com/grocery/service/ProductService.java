package com.grocery.service;

import java.util.List;

import com.grocery.exception.ProductAlreadyExistsException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.ProductModel;

public interface ProductService {
	
	public ProductModel addProduct(ProductModel product) throws ProductAlreadyExistsException;
	
	public ProductModel updateProduct(ProductModel product) throws ProductNotFoundException;
	
	public String deleteProductById(Integer productId) throws ProductNotFoundException;
	
	public ProductModel searchByProductName(String productName) throws ProductNotFoundException;
	
	public List<ProductModel> searchByColour(String colour);

	public List<ProductModel> searchByDimension(String dimension);
	
	public List<ProductModel> filterByBrand(String brand);
	
	public List<ProductModel> sortByPrice();
	
	public List<ProductModel> getAllProducts();
	
	public ProductModel getProductById(Integer id) throws ProductNotFoundException;
}
