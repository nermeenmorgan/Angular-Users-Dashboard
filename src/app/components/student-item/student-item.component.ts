import { Component, Input} from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {
 @Input() stdData:any;


 constructor(public myservice: MyServiceService,private modalService: BsModalService, private router: Router){}

 openSuccessModal(myMsg: string) {
  const modalRef: BsModalRef = this.modalService.show(SuccessModalComponent);
  modalRef.content.message = myMsg;
}

 deleteItem(id:any){
  // let user={name,age,email}
this.myservice.DeleteUser(this.stdData.id).subscribe({
  next: ()=>{
    this.openSuccessModal("student deleted Successfully!");
      setInterval(() => {
        window.location.reload();
      }, 1000);
  }
});
 }
RedirectTo(){
  this.router.navigate(['/other-component']);
}


}

