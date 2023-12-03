package com.works.services;

import com.works.configs.Rest;
import com.works.entities.Image;
import com.works.entities.dtos.ImageDto;
import com.works.repositories.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageService {

    final ImageRepository imageRepository;

    public ResponseEntity save(Image image){
        try {
            imageRepository.save(image);
            Rest rest = new Rest(true,image);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity delete(Long id){
        try {
            imageRepository.deleteById(id);
            Rest rest = new Rest(true,"Resim silindi.");
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity list(){
        List<Image> images= imageRepository.findAll();
        List<ImageDto> imageDtos = new ArrayList<>();
        try{
            Blob blob = null;
            for (Image image:images) {
                ImageDto imageDto = new ImageDto();
                blob = image.getImage();
                int blobLength = (int) blob.length();
                byte[] img = blob.getBytes(1, blobLength);
                imageDto.setPid(image.getPid());
                imageDto.setImage(img);
                imageDtos.add(imageDto);
            }

            Rest rest = new Rest(true,imageDtos);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }
    public ResponseEntity listById(Long id){
        List<Image> images= imageRepository.findByPid(id);
        List<ImageDto> imageDtos = new ArrayList<>();
        try{
            Blob blob = null;
            for (Image image:images) {
                ImageDto imageDto = new ImageDto();
                blob = image.getImage();
                int blobLength = (int) blob.length();
                byte[] img = blob.getBytes(1, blobLength);
                imageDto.setPid(image.getPid());
                imageDto.setImage(img);
                imageDtos.add(imageDto);
            }
            Rest rest = new Rest(true,imageDtos);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

}
