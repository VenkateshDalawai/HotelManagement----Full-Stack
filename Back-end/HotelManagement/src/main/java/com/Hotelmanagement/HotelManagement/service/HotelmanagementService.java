package com.Hotelmanagement.HotelManagement.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Hotelmanagement.HotelManagement.model.Hotel;
import com.Hotelmanagement.HotelManagement.model.Login;
import com.Hotelmanagement.HotelManagement.repository.HotelManagementRepositoryUserInfo;
import com.Hotelmanagement.HotelManagement.repository.HotelManagementRepositoryUserLoginInfo;

import jakarta.transaction.Transactional;

@Service
public class HotelmanagementService {

    @Autowired
    private HotelManagementRepositoryUserInfo RUInfo;

    @Autowired
    private HotelManagementRepositoryUserLoginInfo rLogin;

    public String saveSigninData(Login loginData) {
        String email = loginData.getEmail();
        Login emailcheck = rLogin.findByEmail(email);
        if (emailcheck != null && emailcheck.getEmail().equalsIgnoreCase(email)) {
            return "Email already in use";
        } else {
            rLogin.save(loginData);
            return "Account created";
        }
    }

    public ResponseEntity<?> CheckLogin(Login loginData) {
        String email = loginData.getEmail();
        String password = loginData.getPassword();
        Login emailcheck = rLogin.findByEmail(email);
        if (emailcheck != null && emailcheck.getEmail().equals(email)) {
            if (emailcheck.getPassword().equalsIgnoreCase(password)) {
                Map<String, String> response = new HashMap<>();
                response.put("name", emailcheck.getName());
                response.put("email", emailcheck.getEmail());
                response.put("password", emailcheck.getPassword());
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Account Does not Exits please create an account");
        }
    }

    public String saveBookingData(Hotel bookingData) {
        RUInfo.save(bookingData);
        return "Booking saved successfully";
    }

	public List<Hotel> getRoomBookinsData(Login email) {
		return RUInfo.findByEmail(email.getEmail());
		 
	}

	public String updateProfile(Login userData) {
		try {
            Login existingUser = rLogin.findByEmail(userData.getEmail());
            if (existingUser != null) {
                existingUser.setName(userData.getName());
                existingUser.setPassword(userData.getPassword());
                rLogin.save(existingUser);
                return "Profile updated successfully";
            } else {
                return "User not found";
            }
        } catch (Exception e) {
            return "Error updating profile: " + e.getMessage();
        }
	}

	public String cancelBooking(Login data) {
		RUInfo.deleteById(data.getUID());
		return "Deleted Succeddfully";
	}

    
}
