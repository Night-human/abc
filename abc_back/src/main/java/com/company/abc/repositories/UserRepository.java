package com.company.abc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.company.abc.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u where u.name = :name")
    List<User> findByName(@Param("name") String name);
    
}
