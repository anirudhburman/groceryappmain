package com.grocery.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.exception.ProductAlreadyExistsException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.ProductModel;
import com.grocery.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ProductController {

	@Autowired
	ProductService prodSer;

	// http://localhost:8080/addproduct
	@PostMapping("/addproduct")
	public ProductModel addProduct(@RequestBody ProductModel prod) throws ProductAlreadyExistsException {
		return prodSer.addProduct(prod);
	}

	// http://localhost:8080/updateproduct
	@PostMapping("/updateproduct")
	public ProductModel updateproduct(@RequestBody ProductModel prod) throws ProductNotFoundException {
		return prodSer.updateProduct(prod);
	}

	// http://localhost:8080/deleteproductbyid
	@GetMapping("/deleteproductbyid/{id}")
	public String deleteProductById(@PathVariable("id") Integer productId) throws ProductNotFoundException {
		return prodSer.deleteProductById(productId);
	}
	
	@GetMapping("/getproductbyid/{id}")
	public ProductModel getProductById(@PathVariable("id") Integer id) throws ProductNotFoundException {
		return prodSer.getProductById(id);
	}

	// http://localhost:8080/searchbyproductname
	@GetMapping("/searchbyproductname")
	public ProductModel searchByProductName(@RequestParam("productname") String productName) throws ProductNotFoundException {
		return prodSer.searchByProductName(productName);
	}

	// http://localhost:8080/searchbycolour
	@GetMapping("/searchbycolour")
	public List<ProductModel> searchByColour(@RequestParam("colour") String colour) {
		return prodSer.searchByColour(colour);
	}

	// http://localhost:8080/searchbydimension
	@GetMapping("/searchbydimension")
	public List<ProductModel> searchByDimension(@RequestParam("dimension") String dimension) {
		return prodSer.searchByDimension(dimension);
	}

	// http://localhost:8080/filterbybrand
	@GetMapping("/filterbybrand")
	public List<ProductModel> filterByBrand(@RequestParam("brand") String brand) {
		return prodSer.filterByBrand(brand);
	}

	// http://localhost:8080/sortbyprice
	@GetMapping("/sortbyprice")
	public List<ProductModel> sortByPrice() {
		return prodSer.sortByPrice();
	}
	
	// http://localhost:8080/allproducts
	@GetMapping("/allproducts")
	public List<ProductModel> getAllProducts() {
		return prodSer.getAllProducts();
	}
}
