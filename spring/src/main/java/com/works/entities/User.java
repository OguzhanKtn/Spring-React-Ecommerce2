package com.works.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @NotNull
    private String name;

    @NotNull
    private String surname;

    @Column(unique = true)
    @Email
    @NotNull
    private String email;

    @Size(min = 8)
    @NotNull
    private String password;

    @ManyToMany
    private List<Role> roles;
}
