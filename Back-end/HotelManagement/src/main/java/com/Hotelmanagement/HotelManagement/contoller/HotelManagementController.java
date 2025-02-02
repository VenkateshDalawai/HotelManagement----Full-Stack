package com.Hotelmanagement.HotelManagement.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hotelmanagement.HotelManagement.model.Hotel;
import com.Hotelmanagement.HotelManagement.model.Login;
import com.Hotelmanagement.HotelManagement.service.HotelmanagementService;

@CrossOrigin
@RestController
@RequestMapping("/Hotel_Management")
public class HotelManagementController {

    @Autowired
    HotelmanagementService hms;

    @PostMapping("/signin")
    public String signin(@RequestBody Login loginData) {
        return hms.saveSigninData(loginData);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login loginData) {
        return hms.CheckLogin(loginData);
    }
    
    @PostMapping("/RoomBookings")
    public ResponseEntity<?> roomBooking(@RequestBody Hotel bookingData) {
        String result = hms.saveBookingData(bookingData);
        if (result.equals("Booking saved successfully")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(result);
        }
    }
    
    @PostMapping("/RoomBookingsData")
    public List<Hotel> RoomBookingsData(@RequestBody Login Data) {
    	return hms.getRoomBookinsData(Data);
    }
    
    @PostMapping("/UpdateProfile")
    public String updateProfile(@RequestBody Login userData) {
    	return hms.updateProfile(userData);
    }
    
    @PostMapping("/CancelBooking")
    public String CancelBooking(@RequestBody Login Data) {
        return hms.cancelBooking(Data);
    }
    
}
