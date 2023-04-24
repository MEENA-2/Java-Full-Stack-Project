package com.example.project.controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.ExceptionHandling.ResourceNotFound;
import com.example.project.Repository.Repository;
import com.example.project.Student.Student;

/* @RestController annotation is applied to a class to mark it as a request handler. 
 * This annotation itself annotated with @Controller and @ResponseBody. 
 * @Controller is used for mapping
 * @ResponseBody annotation tells a controller that the object returned is automatically serialized into JSON 
 * and passed back into the HttpResponse object. */

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/studentDetails/")
public class Controller {
	@Autowired
	private Repository repository;
	
	/* By using get mapping annotation, transfer data from client to server in HTTP protocol.
	 * It is used to get a single or multiple resources
	 * It carries request parameter appended in URL string 
	 * If a parameter requested is passed, it works and responds with the respective result. */
	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents(@RequestParam(required = false) String name){
		
		try {
			List<Student> studentList = new ArrayList<Student>();
			if(name != null) {
				repository.findByStudentNameContaining(name).forEach(studentList::add);
				return new ResponseEntity<>(studentList, HttpStatus.OK);
			}
			else {
				studentList = repository.findAll();
				return new ResponseEntity<>(studentList, HttpStatus.OK);
			}
		}
		catch(Exception excep) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}		
	
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
		Student student = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Student not exist with id :" + id));
		return ResponseEntity.ok(student);
	}

	@GetMapping("/students/findByStandard")
	public ResponseEntity<List<Student>> findByStandard(@RequestParam(required = false) int grade){
		try {
			List<Student> sixthGradeStudents = repository.findByStandard(grade);
			if(sixthGradeStudents.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(sixthGradeStudents, HttpStatus.OK);
		}
		catch(Exception getExcep) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	/* By using post mapping annotation, transfer data from client to server in HTTP protocol.
	 * POST carries request parameter in message body which makes it more secure
	 * way of transferring data from client to server.*/
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student student) {
		return repository.save(student);
	}
		
	/* By using post mapping annotation, transfer data from client to server in HTTP protocol.
	 * POST carries request parameter in message body which makes it more secure
	 * way of transferring data from client to server.*/
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Integer id, @RequestBody Student studentDetails){
		Student student = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Student not exist with id :" + id));
		
		student.setStudentName(studentDetails.getStudentName());
		student.setStandard(studentDetails.getStandard());
		student.setContactNo(studentDetails.getContactNo());
		student.setDateOfBirth(studentDetails.getDateOfBirth());
		student.setDistrict(studentDetails.getDistrict());
		student.setEmail(studentDetails.getEmail());
		student.setFeePaid(studentDetails.getFeePaid());
		student.setGender(studentDetails.getGender());
		student.setPincode(studentDetails.getPincode());
		
		Student updatedStudent = repository.save(student);
		return ResponseEntity.ok(updatedStudent);
	}
	
	/* The Delete HTTP method is used to delete the resource and @DeleteMapping annotation for mapping 
	 * HTTP DELETE requests onto specific handler methods.*/
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Integer id){
		Student student = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Student not exist with id :" + id));
		
		repository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/students")
	public ResponseEntity<HttpStatus> deleteAllStudents(){
		try
		{
			repository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception exception) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
