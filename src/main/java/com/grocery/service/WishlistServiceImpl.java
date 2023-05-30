package com.grocery.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.exception.ProductAlreadyExistsException;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.model.ProductModel;
import com.grocery.model.WishlistModel;
import com.grocery.repository.ProductRepository;
import com.grocery.repository.WishlistRepository;

@Service
public class WishlistServiceImpl implements WishlistService {
	
	@Autowired
	WishlistRepository wishRepo;
	
	@Autowired
	ProductRepository prodRepo;

	@Override
	public WishlistModel viewWishlist(Integer id) {
		Optional<WishlistModel> wish = wishRepo.findById(id);
		if(wish.isPresent()) {
			return wish.get();
		}
		return null;
	}

	@Override
	public List<ProductModel> addProductToWishlist(Integer wishId, Integer prodId) throws ProductNotFoundException, ProductAlreadyExistsException {
		Optional<ProductModel> optProd = prodRepo.findById(prodId);
		Optional<WishlistModel> optWish = wishRepo.findById(wishId);
		if(optProd.isEmpty()) {
			throw new ProductNotFoundException();
		}
		if(optWish.isPresent()) {
			ProductModel prod = optProd.get();
			WishlistModel wish = optWish.get();
			List<ProductModel> prods = wish.getProducts();
			if(prods.contains(prod)) {
				throw new ProductAlreadyExistsException();
			}
			prods.add(prod);
			wish.setProducts(prods);
			wish.setQuantity(prods.size());
			WishlistModel w = wishRepo.save(wish);
			return w.getProducts();
		}
		return Collections.emptyList();
	}

	@Override
	public List<ProductModel> deleteProductFromWishlist(Integer wishId, Integer prodId)
			throws ProductNotFoundException {
		
		Optional<ProductModel> optProd = prodRepo.findById(prodId);
		if(optProd.isEmpty()) {
			throw new ProductNotFoundException();
		}
		Optional<WishlistModel> optWish = wishRepo.findById(wishId);
		if(optWish.isPresent()) {
			WishlistModel wish = optWish.get();
			ProductModel prod = optProd.get();
			List<ProductModel> prods = wish.getProducts();
			if(prods.contains(prod)) {
				prods.remove(prod);
			} else {
				throw new ProductNotFoundException();
			}
			wish.setProducts(prods);
			wish.setQuantity(prods.size());
			WishlistModel w = wishRepo.save(wish);
			return w.getProducts();
		}
		return Collections.emptyList();
	}

	@Override
	public List<ProductModel> getAllWishProducts(Integer wishId) {
		Optional<WishlistModel> optWish = wishRepo.findById(wishId);
		if(optWish.isPresent()) {
			WishlistModel wish = optWish.get();
			return wish.getProducts();
		}
		return Collections.emptyList();
	}
}
