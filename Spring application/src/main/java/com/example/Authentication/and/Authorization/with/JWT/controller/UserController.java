package com.example.Authentication.and.Authorization.with.JWT.controller;

import com.example.Authentication.and.Authorization.with.JWT.dto.requestDTO.UserRequestDto;
import com.example.Authentication.and.Authorization.with.JWT.dto.responseDTO.UserResponseDto;
import com.example.Authentication.and.Authorization.with.JWT.model.User;
import com.example.Authentication.and.Authorization.with.JWT.service.OtpService;
import com.example.Authentication.and.Authorization.with.JWT.service.UserService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/home")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    OtpService otpService;

    @PostMapping("/addUser")
    public ResponseEntity addUser(@RequestBody UserRequestDto user){
        try {
            userService.addUser(user);
            return new ResponseEntity("User added.",HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.EXPECTATION_FAILED);
        }
    }
    @PostMapping("/dashboard")
    public ResponseEntity validateToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@RequestParam String email) {
        try {

            Boolean status = otpService.validateToken(token,email);

            if (status){

                return new ResponseEntity(HttpStatus.OK);
            }
            else
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity(e.getMessage(),HttpStatus.UNAUTHORIZED);
        }
    }
    @GetMapping("/getUser")
    public ResponseEntity getUserDetails(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,String email){
        try{
            Boolean status = otpService.validateToken(token,email);
            if(status){
                UserResponseDto response = userService.getUserDetails(email);
                return  new ResponseEntity(response,HttpStatus.FOUND);
            }
            else return new ResponseEntity("Unauthorized Access!",HttpStatus.FORBIDDEN);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
}
