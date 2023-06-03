package com.rmfashion.RM.Fashion.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Product_ID")
    private long productId;
    @Column(name = "Product_Name")
    private String productName;
    @Column(name = "Product_Price")
    private int productPrice;
    @Column(name = "Size")
    private String size;
    @Column(name = "quantity")
    private int quantity;
}
