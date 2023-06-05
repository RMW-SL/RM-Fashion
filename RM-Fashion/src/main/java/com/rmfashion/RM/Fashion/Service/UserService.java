package com.rmfashion.RM.Fashion.Service;

import com.rmfashion.RM.Fashion.Dto.RequestDTO.RequestUserDTO;
import org.springframework.stereotype.Service;


public interface UserService {
    String save(RequestUserDTO requestUserDTO);
}
