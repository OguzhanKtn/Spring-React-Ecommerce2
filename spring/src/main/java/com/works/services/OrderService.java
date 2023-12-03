package com.works.services;

import com.works.configs.Rest;
import com.works.entities.Order;
import com.works.entities.projections.IOrder;
import com.works.entities.projections.IOrderAll;
import com.works.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    final OrderRepository orderRepository;

    public ResponseEntity save(Order order){
        try {
            orderRepository.save(order);
            Rest rest = new Rest(true,order);
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
            orderRepository.deleteById(id);
            Rest rest = new Rest(true,"Kayıt başarıyla silindi !");
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity listAll(){
        try {
            List<IOrderAll> orders = orderRepository.allOrders();
            Rest rest = new Rest(true,orders);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity listByUser(Long id){
        try {
            List<IOrder> userOrders = orderRepository.userOrders(id);
            Rest rest = new Rest(true,userOrders);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

}
