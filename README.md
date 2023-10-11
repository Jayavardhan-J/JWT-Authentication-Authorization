
# Authentication and Authorization using JWT



This project is a web application that provides email authentication with the added security of JWT (JSON Web Tokens) and OTP (One-Time Password) authentication. It allows users to log in to your application one time password , and then uses JWT for secure session management. 
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

### Prerequisites
* Java Development kit
* IntelliJ IDE
* MySQL database

### Steps to follow
* Download or clone the repository.
* Launch your IDE and open the spring boot application folder in it.
* Go to application.properties, add your mySQL password.
* Now you need an email id to send the otp, create an email id -> go to manage account -> Security -> enable 2-step verification -> click on app passwords -> generate the password and copy it.
* Now paste the password in the password field
* Type the emailId in the given field (same account as password generated account).
* Now you are good to go and start the application.
* You can either use postman or open index.html to test out the application.
  
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



