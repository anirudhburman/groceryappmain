package com.grocery.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "cart_go_details")
public class CartModel {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_seq")
	@SequenceGenerator(name = "cart_seq", sequenceName = "cart_seq", allocationSize = 1)
	private Integer cartId;

	// HAS - A relationship
	// One cart can have only one Customer.
	@OneToOne(mappedBy = "cart")
	@JoinColumn(name = "customer_id")
	@JsonIgnore
	private CustomerModel customer;

	// HAS - A relationship
	// One cart can have many products.
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="carts_products", joinColumns= {@JoinColumn(name="cartId")}, inverseJoinColumns = {@JoinColumn(name="productId")})
	private List<ProductModel> products;

	private Integer quantity;

	public CartModel(Integer cartId, List<ProductModel> products, Integer quantity) {
		super();
		this.cartId = cartId;
		this.products = products;
		this.quantity = quantity;
	}

}
