package com.grocery.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import com.grocery.exception.OrderNotFoundException;
import com.grocery.exception.ProductNotFoundException;
=======
import com.grocery.exceptions.OrderNotFoundException;
import com.grocery.exceptions.ProductNotFoundException;
>>>>>>> 1ce2123abe70ef5d9370a615f290eb5fad6532f2
import com.grocery.model.CartModel;
import com.grocery.model.OrderModel;
import com.grocery.model.ProductModel;
import com.grocery.repository.CartRepository;
import com.grocery.repository.OrderRepository;
import com.grocery.repository.ProductRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository orderRepo;

	@Autowired
	CartService cartSer;

	@Autowired
	CartRepository cartRepo;

	@Autowired
	ProductRepository prodRepo;

	@Override
	public OrderModel addOrder(Integer cartId, Integer totalPrice) {
		CartModel cart = cartSer.viewCartById(cartId);
		LocalDate today = LocalDate.now();
		OrderModel order = new OrderModel();
		order.setCustomer(cart.getCustomer());
		List<ProductModel> prods = new ArrayList<>(cart.getProducts());
		order.setProducts(prods);
		order.setTotalPrice((double) totalPrice);
		order.setTotalQuantity(cart.getQuantity());
		order.setOrderDispatchDate(today.plusDays(1));
		order.setOrderDeliveryDate(today.plusDays(3));
		cart.setProducts(Collections.emptyList());
		cartRepo.save(cart);
		return orderRepo.save(order);
	}

	@Override
	public String cancelOrder(OrderModel order) throws OrderNotFoundException {
		if (orderRepo.existsById(order.getOrderId())) {
			orderRepo.delete(order);
			return "Order deleted";
		}
		throw new OrderNotFoundException();
	}

	@Override
	public String cancelAProduct(Integer orderId, Integer productId)
			throws OrderNotFoundException, ProductNotFoundException {
		if (orderRepo.existsById(orderId)) {
			OrderModel ord = orderRepo.findById(orderId).get();
			List<ProductModel> prods = ord.getProducts();
			int size = prods.size();
			for (Iterator<ProductModel> iterator = prods.iterator(); iterator.hasNext();) {
				ProductModel productModel = iterator.next();
				if (productModel.getProductId().equals(productId)) {
					iterator.remove();
				}
			}
			if (prods.size() != size - 1) {
				throw new ProductNotFoundException();
			}
			ord.setProducts(prods);
			orderRepo.save(ord);
			return "Product deleted";
		}
		throw new OrderNotFoundException();
	}

	@Override
	public OrderModel updateOrder(OrderModel order) throws OrderNotFoundException {
		if (orderRepo.existsById(order.getOrderId())) {
			orderRepo.save(order);
			return order;
		}
		throw new OrderNotFoundException();
	}

	@Override
	public OrderModel getOrderById(Integer orderId) throws OrderNotFoundException {
		if (orderRepo.existsById(orderId)) {
			return orderRepo.findById(orderId).get();
		}
		throw new OrderNotFoundException();
	}

//	@Override
//	public List<OrderModel> getAllOrders() {
//		return (List<OrderModel>) orderDao.findAll();
//	}

	@Override
	public String cancelOrderById(Integer id) throws OrderNotFoundException {
		if (orderRepo.existsById(id)) {
			OrderModel order = orderRepo.findById(id).get();
			order.setCustomer(null);
			orderRepo.deleteById(id);
			return "Order deleted by ID";
		}
		throw new OrderNotFoundException();
	}

}
