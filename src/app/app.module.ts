import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';




@NgModule({
  declarations: [
    SuccessModalComponent,
    AppComponent,
    HeaderComponent,
    StudentItemComponent,
    ErrorComponent,
    StudentsDetailsComponent,
    AddStudentComponent,

    StudentPageComponent,
     SuccessModalComponent,
     UpdateUserComponent,
     ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   HttpClientModule,
   CommonModule,
   ModalModule.forRoot(),
   RouterModule,
   BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    // ScrollingModule,
    MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [SuccessModalComponent]
})
export class AppModule { }
