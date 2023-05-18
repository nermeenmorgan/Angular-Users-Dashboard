import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MyServiceService } from 'src/app/services/my-service.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  selectedId: any;
  name: string = '';
  age: any;
  email: string = '';

  users: any; // Initialize with your user data from service

  constructor(private router: Router, private myService: MyServiceService, private modalService: BsModalService) {}

  ngOnInit() {
    this.myService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openSuccessModal(myMsg: string) {
    const modalRef: BsModalRef = this.modalService.show(SuccessModalComponent);
    modalRef.content.message = myMsg;
  }

  onSubmit() {
    const updatedUser = {
      id: this.selectedId,
      name: this.name,
      age: this.age,
      email: this.email
    };

    this.myService.UpdateUser(this.selectedId,updatedUser).subscribe(() => {
      this.openSuccessModal("Student Data was updated Successfully!");
      setTimeout(() => {
        this.router.navigate(['/students']); // Navigate to the desired route (e.g., '/')
      }, 1000);
    });
  }
}

