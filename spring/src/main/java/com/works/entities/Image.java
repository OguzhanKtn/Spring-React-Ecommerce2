package com.works.entities;

import lombok.Data;

import javax.persistence.*;


@Entity
@Data
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iid;

    private Long pid;

    @Lob
    private byte[] image;
}
