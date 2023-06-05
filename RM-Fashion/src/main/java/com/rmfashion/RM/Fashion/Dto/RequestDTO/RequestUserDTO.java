package com.rmfashion.RM.Fashion.Dto.RequestDTO;

import com.rmfashion.RM.Fashion.Entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestUserDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    private String userRole;

    private String email;

    private String firstName;

    private String lastName;

    private int phoneNumber;

    private String address;

    private String password;

    private String token;


}
