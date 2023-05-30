package com.grocery.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.CartModel;
import com.grocery.model.ProductModel;
import com.grocery.repository.CartRepository;
import com.grocery.repository.ProductRepository;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	ProductRepository prodRepo;

	@Override
	public CartModel viewCartById(Integer id) {
		Optional<CartModel> cart = cartRepo.findById(id);
		if(cart.isPresent()) {
			return cart.get();
		} else {
			return null;
		}
	}

	@Override
	public List<ProductModel> addProductToCart(Integer cartId, Integer productId) throws ProductNotFoundException {
		Optional<ProductModel> optProd = prodRepo.findById(productId);
		if(optProd.isEmpty()) {
			throw new ProductNotFoundException();
		}
		Optional<CartModel> optCart = cartRepo.findById(cartId);
		if(optCart.isPresent()) {
			CartModel cart = optCart.get();
			ProductModel prod = optProd.get();
			List<ProductModel> prods = cart.getProducts();
			prods.add(prod);
			cart.setProducts(prods);
			cart.setQuantity(prods.size());
			CartModel c = cartRepo.save(cart);
			return c.getProducts();
		}
		return Collections.emptyList();
	}

	// Update Cart
	public CartModel updateCart(CartModel cart) {
		return cart;
	}

	// Delete product from Cart
	public List<ProductModel> deleteProductFromCart(Integer cartId, Integer prodId) throws ProductNotFoundException {
		Optional<ProductModel> optProd = prodRepo.findById(prodId);
		if(optProd.isEmpty()) {
			throw new ProductNotFoundException();
		}
		Optional<CartModel> optCart = cartRepo.findById(cartId);
		if(optCart.isPresent()) {
			CartModel cart = optCart.get();
			ProductModel prod = optProd.get();
			List<ProductModel> prods = cart.getProducts();
			if(prods.contains(prod)) {
				prods.remove(prod);
			} else {
				throw new ProductNotFoundException();
			}
			cart.setProducts(prods);
			cart.setQuantity(prods.size());
			CartModel c = cartRepo.save(cart);
			return c.getProducts();
		}
		return Collections.emptyList();
	}

	@Override
	public List<ProductModel> getAllCartProducts(Integer cartId) {
		Optional<CartModel> optCart = cartRepo.findById(cartId);
		if(optCart.isPresent()) {
			CartModel cart = optCart.get();
			return cart.getProducts();
		}
		return Collections.emptyList();
	}
}
