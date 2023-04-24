import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

//component class to display the student data of particular student
export class StudentDetailsComponent implements OnInit{
  studentId: number = 0;
  student: any = [];
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    console.log( this.route.snapshot.params['studentId']);
    this.studentId = this.route.snapshot.params['studentId'];
    
    this.student = new Student();
    this.studentService.getStudentById(this.studentId).subscribe( data => {
      this.student = data;
    });
  }
}
