import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

//this component class is accessed by its template to display the list of data of students maintained.
export class StudentListComponent implements OnInit{
  name : String = '';
  studentFoundBySearch : Student[] = [];
  
  gradeValue : number = 0;

  //studentGrade: Student = new Student();
  studentData: Student[] = [];
  
  constructor(private studentService: StudentService, private router: Router) { }

  searchByName(){
    this.studentService.findByName(this.name).subscribe( data => {
      this.studentData = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe( data => {
      this.studentData = data;
      console.log(this.studentData);
    });
  }

  studentDetails(studentId: number){
    console.log("I came!!!!!!!!!!!");
    this.router.navigate(['student-details', studentId]);
  }

  updateStudent(studentId: number){
    var status = confirm("Do you want to update any details ? ");
    if(status == true){
      this.router.navigate(['update-student', studentId]);
    }
  }

  deleteStudent(studentId: number){
    console.log(studentId);
    this.studentService.deleteStudent(studentId).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }

  viewCourse(student: Student){
    console.log(student.standard);
    console.log(student.isLowerGrade);
    if(student.standard>=6 && student.standard<=10) {
      student.isLowerGrade = true;
      console.log('studentComponent if condition '+student.isLowerGrade);
      this.router.navigate(['course',true]);
    }
    else{
      student.isLowerGrade = false;
      console.log("studentComponent else condition "+student.isLowerGrade);
      this.router.navigate(['course',false]);
    }
  }
  
  confirmDelete(student: Student){
    var status= confirm("Are You surely want to delete this record ? ");
     if (status==true) {
       this.deleteStudent(student.studentId);
       this.getStudents();
      }
     else{
      this.getStudents();
     }
  }

  removeAllStudents():void{
    var status = confirm("Be aware that you are clicking REMOVE ALL. It will delete all the records from database.");
    if(status == true){
      this.studentService.deleteAll().subscribe(data => {
        console.log(data);
        this.getStudents();
      },
      error => {
        console.log(error);
      });
    }
  }

  fetchByStandard(grade: any){
    this.gradeValue = grade.target.value;
    console.log(this.gradeValue);
    this.studentService.findByStandard(this.gradeValue).subscribe( data => {
      this.studentData = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

}
