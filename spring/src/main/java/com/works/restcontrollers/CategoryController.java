package com.works.restcontrollers;

import com.works.entities.Category;
import com.works.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@CrossOrigin
public class CategoryController {

    final CategoryService categoryService;

    @PostMapping("/save")
    public ResponseEntity save(@Valid @RequestBody Category category){
        return categoryService.save(category);
    }
    @PostMapping("/delete/{cid}")
    public ResponseEntity delete(@PathVariable Long cid){
        return categoryService.deleteCategory(cid);
    }
    @GetMapping("/list")
    public ResponseEntity list(){
        return categoryService.listCategories();
    }
}
