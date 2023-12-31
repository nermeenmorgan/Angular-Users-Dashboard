import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  template: `
    <div class="modal-header justify-content-center">
    <i class="fa-solid fa-circle-check fa-2x me-3" style="color: green"></i>
      <h4 class="modal-title" style='font-family:boldfont'>Success</h4>
      
    </div>
    <div class="modal-body">
      <p class='text-center fs-5' style='font-family:regularfont'>{{ message }}</p>
    </div>
  `
})
export class SuccessModalComponent {
  @Input() message: string | undefined;
  modalRef: BsModalRef;

  constructor(public bsModalRef: BsModalRef) {
    this.modalRef = bsModalRef;
  }
}
