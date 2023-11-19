package com.works.restcontrollers;

import com.works.entities.Order;
import com.works.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@CrossOrigin
public class OrderController {

    final OrderService orderService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Order order){
        return orderService.save(order);
    }
    @PostMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        return orderService.delete(id);
    }
    @GetMapping("/listAll")
    public ResponseEntity listAll(){
        return orderService.listAll();
    }
    @GetMapping("/listByUser/{id}")
    public ResponseEntity listByUser(@PathVariable Long id){
        return orderService.listByUser(id);
    }
}
