package com.Hotelmanagement.HotelManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hotelmanagement.HotelManagement.model.Hotel;
@Repository
public interface HotelManagementRepositoryUserInfo extends JpaRepository<Hotel, Integer>{

	List<Hotel> findByEmail(String email);
}
