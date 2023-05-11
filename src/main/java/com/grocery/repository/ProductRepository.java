package com.grocery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.grocery.model.ProductModel;

public interface ProductRepository extends CrudRepository<ProductModel, Integer>{
	
	public ProductModel findByBrand(String brand);
	
	public ProductModel findByProductName(String name);
	
	public ProductModel findByDimension(String dimension);
	
	public ProductModel findByColour(String color);
	
	@Query(value = "SELECT p FROM ProductModel p ORDER BY price")
	public List<ProductModel> findAllSortedByPrice();
	
	public List<ProductModel> findAllByBrand(String brand);
	
	public List<ProductModel> findAllByColour(String colour);
	
	public List<ProductModel> findAllByDimension(String dimension);
}
