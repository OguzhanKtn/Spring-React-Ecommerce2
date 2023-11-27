package com.works.restcontrollers;

import com.works.entities.Image;
import com.works.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
@CrossOrigin
public class ImageController {

    final ImageService imageService;

    @PostMapping(value = "/save/{id}" , consumes = { "multipart/form-data"} )
    public ResponseEntity save(@PathVariable Long id ,@RequestParam("image") MultipartFile file) throws SQLException, IOException {
        Image image = new Image();
        image.setPid(id);
        byte[] fileBytes = file.getBytes();
        Blob blob = new SerialBlob(fileBytes);
        image.setImage(blob);
        return imageService.save(image);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        return imageService.delete(id);
    }

    @GetMapping("/images")
    public ResponseEntity list(){
        return imageService.list();
    }
 }
