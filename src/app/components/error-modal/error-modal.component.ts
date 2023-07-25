import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-modal',
  template: `
    <div class="modal-header justify-content-center">
    <i class="fa-solid fa-circle-exclamation fa-2x me-3" style= color:#f96879 ></i>
      <h4 class="modal-title" style='font-family:boldfont'>Error</h4>
     
    </div>
    <div class="modal-body">
      <p class='text-center fs-5' style='font-family:regularfont'>{{ message }}</p>
    </div>
  `,
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  @Input() message: string | undefined;
  modalRef: BsModalRef;

  constructor(public bsModalRef: BsModalRef) {
    this.modalRef = bsModalRef;
  }
}
