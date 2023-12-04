package com.works.services;

import com.works.configs.Rest;
import com.works.entities.Product;
import com.works.entities.projections.IProductCategory;
import com.works.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    final ProductRepository productRepository;

    public ResponseEntity save(Product product){
        try{
            productRepository.save(product);
            Rest rest = new Rest(true,product);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity productDelete(Long id){
        Optional<Product> product = productRepository.findById(id);
        try {
            if(product.isPresent()){
                productRepository.deleteById(id);
                Rest rest = new Rest(true,product);
                ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.OK);
                return responseEntity;
            }
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
        return null;
    }

    public ResponseEntity updateProduct(Product product){
        Optional<Product> prd = productRepository.findById(product.getPid());
        try{
            if(prd.isPresent()){
                prd.get().setStock(product.getStock());
                prd.get().setPrice(product.getPrice());
                productRepository.saveAndFlush(prd.get());
                Rest rest = new Rest(true,product);
                ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.OK);
                return responseEntity;
            }
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
        return null;
    }

    public ResponseEntity allProducts(){
        List<Product> products = productRepository.findAll();
        HashMap map = new HashMap<>();
        map.put("products",products);
        try{
            ResponseEntity responseEntity = new ResponseEntity<>(map,HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity listByCategory(Integer cid){
        List<IProductCategory> products = productRepository.productListByCategory(cid);
        HashMap map = new LinkedHashMap();
        map.put("products",products);
        try {
            ResponseEntity responseEntity = new ResponseEntity<>(map,HttpStatus.OK);
            return  responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity productDetail(Long id){
        Optional<Product> product = productRepository.findById(id);
        try{
            if(product.isPresent()){
                Rest rest = new Rest(true,product.get());
                ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.OK);
                return responseEntity;
            }

        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
        return null;
    }

    public ResponseEntity search(String brand){
        brand = "%"+brand+"%";
        try {
            List<Product> products = productRepository.findByBrandLikeIgnoreCase(brand);
            Rest rest = new Rest(true,products);
            ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

}
