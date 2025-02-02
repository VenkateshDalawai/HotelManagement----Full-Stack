package com.Hotelmanagement.HotelManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hotelmanagement.HotelManagement.model.Login;
@Repository
public interface HotelManagementRepositoryUserLoginInfo extends JpaRepository<Login, Integer>{

	Login findByEmail(String email);
}
