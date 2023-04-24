import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

// service class that will redirect to backend by respective methods' url.
export class StudentService {

  // front end will access this base url to connect to backend to perform crud operations.
  private baseURL = "http://localhost:8080/studentDetails/students";

  constructor(private httpClient: HttpClient) { }
  
  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  getStudentById(studentId: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${studentId}`);
  }

  updateStudent(studentId: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${studentId}`, student);
  }

  //localhost:4200/delete/5
  deleteStudent(studentId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${studentId}`);
  }

  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name : any): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}?name=${name}`);
  }

  findByStandard(grade : number): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}/findByStandard?grade=${grade}`);
  }
}