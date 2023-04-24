/* Paths for all the components created in this project is specified in this routing module */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'students', component: StudentListComponent, canActivate:[AuthGaurdService] },
  {path: 'create-student', component: CreateStudentComponent, canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-student/:studentId', component: UpdateStudentComponent, canActivate:[AuthGaurdService] },
  {path: 'student-details/:studentId', component: StudentDetailsComponent, canActivate:[AuthGaurdService] },
  {path: 'signup', component: SignupPageComponent },
  {path: 'logout', component: LogoutPageComponent, canActivate:[AuthGaurdService] },
  {path: 'contact', component: ContactFormComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'course/:lowerGrade', component: CoursesComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
