package com.example.Authentication.and.Authorization.with.JWT.dto.responseDTO;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class UserResponseDto {
    String firstName;

    String lastName;

    String emailId;

    String mobile;
}
