package com.company.abc.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.abc.entities.Response;
import com.company.abc.entities.User;
import com.company.abc.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id){
        return  userRepository.findById(id).orElse(null);
    }

    public List<User> getUserByName(String name) {
        return userRepository.findByName(name);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Response removeUser(int id) {
        userRepository.deleteById(id);
        Response res = new Response();
        res.message = "Deleted";
        res.status = "200";
        return res;
    }

    public User updateUser(User user, int id) {
        User tempUser = userRepository.findById(id).orElse(null);
        
        if (tempUser != null) {
            user.setId(id);
        }

        return userRepository.save(user);
    }

}
