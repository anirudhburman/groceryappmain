package com.grocery.model;

import java.time.LocalDate;
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
@Table(name = "order_go_details")
public class OrderModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="order_seq")
	@SequenceGenerator(name="order_seq",sequenceName="order_seq", allocationSize=1)
	private Integer orderId;
	
	// HAS - A relationship
	// A customer can have many orders. But one order can be ordered by only one customer.
	@ManyToOne(cascade = CascadeType.ALL) //Owning side
	@JoinColumn(name="cust_id")
	@JsonIgnore
	private CustomerModel customer;
	
	// HAS - MANY relationship
	// An order can have many products and one product can belong to many orders.
	@ManyToMany(cascade = {CascadeType.REFRESH, CascadeType.MERGE} )
	@JoinTable(name = "go_product_orders", joinColumns = { @JoinColumn(name = "orderId") }, inverseJoinColumns = {
			@JoinColumn(name = "productId") })
//	@Cascade(CascadeType.SAVE_UPDATE)
//	@JsonIgnore
	private List<ProductModel> products;
	
	private Integer totalQuantity;
	private Double totalPrice;
	private LocalDate orderDeliveryDate;
	private LocalDate orderDispatchDate;

}
