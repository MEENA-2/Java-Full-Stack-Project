package com.example.project.Student;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/* It is a blueprint. Here we use public getter and setter methods for private attributes.
 * In this class we use @Entity and @Table. 
 * @Entity is used so that the class name will be table name in db.
 * For avoid to write query, we go for hibernate
 * @Dynamic update annotation is used for update values instead of checking all values in that record.  
 * It will check only which value will be updated*/
@Entity
@Table(name = "Students")
@DynamicUpdate
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;
	
	@Column(name = "Name", nullable = false)
	private String studentName; //student_name
	
	private int standard;
	private long contactNo;
	private String gender;
	private String feePaid;
	private String district;
	private int pincode;
	private String email;
	private String dateOfBirth;
	 
	public Student() { }
	
	public Student(String studentName, int standard, long contactNo, String gender, String feePaid, String district, 
			int pincode, String email, String dateOfBirth) {
		super();
		this.studentName =  studentName;
		this.standard = standard;
		this.contactNo = contactNo;
		this.dateOfBirth = dateOfBirth;
		this.district = district;
		this.gender = gender;
		this.feePaid = feePaid;
		this.pincode = pincode;
		this.email = email;
	}
	
	public int getStudentId() {
		return studentId;
	}
	
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public int getStandard() {
		return standard;
	}
	public void setStandard(int standard) {
		this.standard = standard;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getFeePaid() {
		return feePaid;
	}

	public void setFeePaid(String feePaid) {
		this.feePaid = feePaid;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
