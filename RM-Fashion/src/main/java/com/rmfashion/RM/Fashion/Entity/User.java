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
@Table(name ="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_Id")
    private long userId;
    @Column(name = "User_Role")
    private String userRole;
    @Column(name = "User_Email")
    private String email;
    @Column(name = "User_First_Name")
    private String firstName;
    @Column(name = "User_last_Name")
    private String lastName;
    @Column(name = "Phone_Number")
    private int phoneNumber;
    @Column(name = "Address")
    private String address;
    @Column(name = "User_Password")
    private String password;
    @Column(name = "Token")
    private String token;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Customer customer;



}
