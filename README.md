
# Authentication and Authorization using JWT



This project is a web application that provides GitHub authentication with the added security of JWT (JSON Web Tokens) and OTP (One-Time Password) authentication. It allows users to log in to your application one time password , and then uses JWT for secure session management. 
## Features

* JWT-based session management for enhanced security.

* OTP authentication for sensitive operations.

* A user-friendly web interface.


## Technology Used

* HTML
* CSS
* JavaScript
* Spring Boot
* JWT (JSON Web Tokens)
* OTP (One-Time Password) using Java mailsender.
* MySQL Database
## Getting Started

### Authentication Flow

*  Users create or login using One-Time Password.
* The OTP is validated and on successful validation, JWT token is generated.
* The token is then sent back as response and stored.
* When performing any requests, this token is sent in the header.
* The token is validated and if its authentic, a OK response is sent allowing user to access the page, else the request will be denied.


## API's
### Add User
    
    http://localhost:8081/home/addUser
    

### Get User
      
    http://localhost:8081/home/getUser
    

### Dashboard
    
    http://localhost:8081/home/dashboard


### Send Otp  
    
    http://localhost:8081/user/sendOtp


### Validate Otp
    
    http://localhost:8081/user/validateOtp


### Add User
    
    http://localhost:8081/home/addUser

