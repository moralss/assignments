package com.storageapp.repository;

import com.storageapp.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByFirstName(String FirstName);
    List<User> findAll();
}
