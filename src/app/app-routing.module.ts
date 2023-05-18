import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

// import { StudentItemComponent  } from './components/student-item/student-item.component';




const routes: Routes = [
  {path: '', component: StudentsDetailsComponent },
  {path: 'students', component:  StudentsDetailsComponent},
  {path: 'students/:id', component:StudentPageComponent },
  {path: 'add', component:AddStudentComponent},
  {path: 'update', component:UpdateUserComponent},

  {path: 'add', component: AddStudentComponent },
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
