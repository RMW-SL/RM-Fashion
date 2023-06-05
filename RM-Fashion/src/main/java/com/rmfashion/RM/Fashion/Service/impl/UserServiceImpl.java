package com.rmfashion.RM.Fashion.Service.impl;

import com.rmfashion.RM.Fashion.Dto.RequestDTO.RequestUserDTO;
import com.rmfashion.RM.Fashion.Entity.Customer;
import com.rmfashion.RM.Fashion.Entity.User;
import com.rmfashion.RM.Fashion.Repo.UserRepo;
import com.rmfashion.RM.Fashion.Service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public String save(RequestUserDTO dto) {
        try {
            User user =new User(
                    dto.getUserRole(),
                    dto.getEmail(),
                    dto.getFirstName(),
                    dto.getLastName(),
                    dto.getPhoneNumber(),
                    dto.getAddress(),
                    dto.getPassword(),
                    dto.getToken());
            userRepo.save(user);
            return "User saved";
        }catch (Exception e){
            return "error:"+e;
        }
    }
}
