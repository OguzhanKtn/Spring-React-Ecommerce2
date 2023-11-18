package com.works.restcontrollers;

import com.works.entities.Image;
import com.works.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
@CrossOrigin
public class ImageController {

    final ImageService imageService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Image image){
        return imageService.save(image);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        return imageService.delete(id);
    }

    @GetMapping("/images/{pid}")
    public ResponseEntity list(@PathVariable Long pid){
        return imageService.list(pid);
    }
 }
