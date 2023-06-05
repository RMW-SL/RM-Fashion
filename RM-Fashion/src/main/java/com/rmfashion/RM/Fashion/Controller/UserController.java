package com.rmfashion.RM.Fashion.Controller;

import com.rmfashion.RM.Fashion.Dto.RequestDTO.RequestUserDTO;
import com.rmfashion.RM.Fashion.Dto.ResponseDTO.ResponseUserDTO;
import com.rmfashion.RM.Fashion.Service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class UserController {


    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String UserRegister(@RequestBody RequestUserDTO requestUserDTO){
        System.out.println(requestUserDTO.getUserId());

        return userService.save(requestUserDTO);
    }
}
