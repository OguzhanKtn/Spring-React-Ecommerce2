package com.works.models;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class JwtLogin {

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 8)
    private String password;
}
