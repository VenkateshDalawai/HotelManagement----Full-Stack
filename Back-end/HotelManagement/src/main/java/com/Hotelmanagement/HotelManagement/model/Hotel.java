package com.Hotelmanagement.HotelManagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Hotel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;
	private String roomType;
	private String numOfGuests;
	private String splRequest;
	private String checkIn;
	private String checkOut;
	private int cost;
	@Override
	public String toString() {
		return "Hotel [id=" + id + ", name=" + name + ", email=" + email + ", roomType=" + roomType + ", numOfGuests="
				+ numOfGuests + ", splRequest=" + splRequest + ", checkIn=" + checkIn + ", checkOut=" + checkOut
				+ ", cost=" + cost + "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public String getNumOfGuests() {
		return numOfGuests;
	}
	public void setNumOfGuests(String numOfGuests) {
		this.numOfGuests = numOfGuests;
	}
	public String getSplRequest() {
		return splRequest;
	}
	public void setSplRequest(String splRequest) {
		this.splRequest = splRequest;
	}
	public String getCheckIn() {
		return checkIn;
	}
	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}
	public String getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
 
	
}
