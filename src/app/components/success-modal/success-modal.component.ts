import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Success</h4>
      <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{ message }}</p>
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
