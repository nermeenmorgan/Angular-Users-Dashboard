import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/services/my-service.service';
import { FormsModule } from '@angular/forms';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  myValidation:any;
age:any;
name:any;
// id:any;
email:any;

constructor(private modalService: BsModalService, private router: Router, public myService:MyServiceService){
}

openSuccessModal(myMsg: string) {
  const modalRef: BsModalRef = this.modalService.show(SuccessModalComponent);
  modalRef.content.message = myMsg;
}
openErrorModal(myMsg: string) {
  const modalRef: BsModalRef = this.modalService.show(ErrorModalComponent);
  modalRef.content.message = myMsg;
}

addStd(name:any,email:any, age:any){
  if (this.myValidation.valid){
    console.log(this.myValidation.valid);
    console.log("this.myValidation.valid");
    let newUser={name,email,age};
    this.myService.AddUser(newUser).subscribe(() => {
      this.openSuccessModal("Congratulations! The student data has been successfully added!");
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
    });
  }else{
    this.openErrorModal("Ops! Please enter valid values in the fields to add student data.");

  }
}

  ngOnInit(): void {
    this.myValidation=new FormGroup({
      name: new FormControl(null,[Validators.maxLength(30),Validators.minLength(3), Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+'), Validators.required]),
      age: new FormControl(null,[Validators.max(35), Validators.min(17), Validators.required]),
      email: new FormControl(null,[Validators.email, Validators.required]) }
    )
    this.name = this.myValidation.controls.name.value;
this.age = this.myValidation.controls.age.value;
this.email = this.myValidation.controls.email.value;
  }
  getAgeValid(){
    return this.myValidation.controls["age"].valid
}
getNameValid(){
  return this.myValidation.controls["name"].valid
}
// getIdValid(){
//   return this.myValidation.controls["id"].valid
// }
getEmailValid(){
  return this.myValidation.controls["email"].valid
}
// (){
//   alert("Student Added Successfully! :)")
// }

}
