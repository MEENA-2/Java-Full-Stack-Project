import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})

//when updating, the data already stored in the respective id, is taken from Database 
// and is displayed in respective fields. To update, data is entered in its respective input field,
// and it should be updated in database from frontend through backend 
//and is done by calling updateStudent Method of student service class.
export class UpdateStudentComponent implements OnInit{
  studentId: number = 0;
  student: Student = new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit(){
    if((this.student.studentName === null) || (this.student.standard < 6) || (this.student.contactNo === null) ||
    (this.student.gender === null) || (this.student.feePaid === null) || (this.student.district === null) || 
    (this.student.pincode.toString().length < 2 ) || (this.student.email === null) || (this.student.dateOfBirth === null)) 
    {
      let pop = confirm("All fields are Mandatory! Please fill them correctly to update.");
    }
    else{
      this.studentService.updateStudent(this.studentId, this.student).subscribe(data =>{
        this.confirmUpdateOk();
        console.log(data);
      }
      , error => console.log(error));
    }
  }

  goToStudentList(){
    this.router.navigate(['students']);
  }

  confirmUpdateOk() {
    var status = confirm("Data updated successfully!!! press OK to go to student list.");
    if (status == true) {
      console.log("updated....");
      this.goToStudentList();
    } else {
      this.router.navigate(['update-student']);
    }
  }

}
