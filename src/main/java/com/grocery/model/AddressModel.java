package com.grocery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "address_go_details")
public class AddressModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="add_seq")
	@SequenceGenerator(name="add_seq",sequenceName="add_seq", allocationSize=1)
	private Integer addressId;
	@NotBlank(message="BuildingNo is a required field")
	private String buildingNo;
	@NotBlank(message="AreaName is a required field")
	private String areaName;
	@NotBlank(message="City is a required field")
	private String city;
	@NotBlank(message="State is a required field")
	private String state;
	@NotNull(message="Zip is a required field")
	private Integer zip;
	@OneToOne(mappedBy = "address")
	@JsonIgnore
	private CustomerModel customer;
	
	public AddressModel(Integer addressId, String buildingNo, String areaName, String city, String state, Integer zip) {
		super();
		this.addressId = addressId;
		this.buildingNo = buildingNo;
		this.areaName = areaName;
		this.city = city;
		this.state = state;
		this.zip = zip;
	}
	
}
