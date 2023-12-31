package com.example.Authentication.and.Authorization.with.JWT.service;

import com.example.Authentication.and.Authorization.with.JWT.dto.requestDTO.UserRequestDto;
import com.example.Authentication.and.Authorization.with.JWT.dto.responseDTO.UserResponseDto;
import com.example.Authentication.and.Authorization.with.JWT.model.User;
import com.example.Authentication.and.Authorization.with.JWT.repository.UserRepository;
import com.example.Authentication.and.Authorization.with.JWT.transformer.UserTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void addUser(UserRequestDto user) throws Exception {
        User newUser = UserTransformer.userRequestDtoToUser(user);
        if(userRepository.findByEmailId(newUser.getEmailId()).isEmpty()){
            userRepository.save(newUser);
        }
        else{
            throw new Exception("User already present, please login.");
        }
    }

    public UserResponseDto getUserDetails(String email) throws Exception {
        User check = userRepository.findByEmailId(email).get();
        if(check==null) throw new Exception("User not found.");
        UserResponseDto saved = UserTransformer.userToResponseDto(check);
        return saved;

    }
}
