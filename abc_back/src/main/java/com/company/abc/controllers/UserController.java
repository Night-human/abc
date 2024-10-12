package com.company.abc.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.company.abc.Services.UserService;
import com.company.abc.entities.Response;
import com.company.abc.entities.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/{id}")
    public User getMethodName(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @GetMapping(params = "name")
    public List<User> getMethodName(@RequestParam String name) {
        return userService.getUserByName(name);
    }

    //TODO: Implement find by position
    

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
    
    @CrossOrigin(origins = "*")
    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        userService.updateUser(user, id);
        return user;
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public Response deleteUser(@PathVariable int id) {
       return userService.removeUser(id);
    }
    
    
}
