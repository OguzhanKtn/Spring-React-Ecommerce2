package com.works.restcontrollers;

import com.works.entities.Product;
import com.works.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    final ProductService productService;

    @PostMapping("/save")
    public ResponseEntity productSave(@Valid @RequestBody Product product){
        return productService.save(product);
    }

    @PostMapping("/delete/{pid}")
    public ResponseEntity productDelete(@PathVariable Long pid){
        return productService.productDelete(pid);
    }

    @PostMapping("/update")
    public ResponseEntity update(@RequestBody Product product){
        return productService.updateProduct(product);
    }

    @GetMapping("/productList")
    public ResponseEntity productList(){
        return productService.allProducts();
    }

    @GetMapping("/listByCategory/{cid}")
    public ResponseEntity listByCategory(@PathVariable int cid){
        return productService.listByCategory(cid);
    }

    @GetMapping("/detail/{pid}")
    public ResponseEntity detail(@PathVariable Long pid){
        return productService.productDetail(pid);
    }

    @GetMapping("/search")
    public ResponseEntity search(@RequestParam(defaultValue = "") String brand){
        return productService.search(brand);
    }
}
