import { Component, OnInit ,Input} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MyServiceService } from 'src/app/services/my-service.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // @Input() stdsToBeUpdated : any;

  name: string = '';
  age: any;
  email: string = '';
  users: any;
  id:any;
pageElem:any
constructor(myRoute:ActivatedRoute,  private router: Router, private myService: MyServiceService, private modalService: BsModalService) {


    this.id = myRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.myService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
    this.myService.GetUserByID(this.id).subscribe(
      {next: (data) =>
        this.pageElem=data
      ,
      error:(err)=>console.log(err)
    }

    )
  }
  // ngOnInit(): void {

  // }

  openSuccessModal(myMsg: string) {
    const modalRef: BsModalRef = this.modalService.show(SuccessModalComponent);
    modalRef.content.message = myMsg;
  }

  onSubmit() {
    const updatedUser = {
      name: '' ,
      age: '',
      email: ''
    };

    this.myService.UpdateUser(
      // this.stdsToBeUpdated.id,
      this.pageElem.id,
      this.pageElem

      ).subscribe(() => {
      this.openSuccessModal("Student Data was updated Successfully!");
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
    });
  }
}

