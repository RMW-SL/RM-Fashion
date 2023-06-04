package com.rmfashion.RM.Fashion.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    @JoinTable(name = "Product_Order",joinColumns = @JoinColumn(name = "Product_ID")
    ,inverseJoinColumns = @JoinColumn(name = "Order_ID"))
    private List <Order> orders=new ArrayList<>();

}
