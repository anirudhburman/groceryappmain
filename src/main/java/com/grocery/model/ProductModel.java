package com.grocery.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
@Table(name = "product_go_details")
public class ProductModel {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq")
	@SequenceGenerator(name = "product_seq", sequenceName = "product_seq", allocationSize = 1)
	private Integer productId;
	private Double price;
	private String colour;
	private String dimension;
	private String brand;
	private Integer quantity;
	private String productCategory;
	private String productName;
	@ManyToMany(mappedBy = "products")
	@JsonIgnore
	private List<OrderModel> orders;
	@ManyToOne
	@JsonIgnore
	private WishlistModel wishlist;
	@ManyToMany(mappedBy = "products")
	@JsonIgnore
	private List<CartModel> cart;
}
