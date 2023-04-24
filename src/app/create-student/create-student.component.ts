import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})

//when data is entered in its respective input field, it should be added to database from front end through 
//backend and is done by calling save method of this class
export class CreateStudentComponent implements OnInit{
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //when a student data is created, on clicking submit this popup will show to 
  // indicate us on successful student data creation.
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      var status = confirm("Data Created successfully!!! press OK to go to students list or CANCEL to create another data.");
      if (status == true) {
        console.log("Created....");
        this.goToStudentList();
      } else {
        this.router.navigate(['create-student']);
      }
      console.log(data);
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['students']);
  }
  
  onSubmit(){
    if((this.student.studentName === null) || (this.student.standard < 6) || (this.student.contactNo === '') ||
    (this.student.gender === null) || (this.student.feePaid === null) || (this.student.district === null) || 
    (this.student.pincode.toString().length < 2 ) || (this.student.email === null) || (this.student.dateOfBirth === null)) 
    {
      let pop = confirm("All fields are Mandatory! Please fill them correctly.");
    }
    else{
      console.log(this.student);
      this.saveStudent();
    }
  }

  
}
