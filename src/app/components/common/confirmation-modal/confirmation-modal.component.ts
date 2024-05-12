import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
})
export class ConfirmationModalComponent {
  modalRef!: NgbModalRef;

  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  open(content: any): void {
    this.modalRef = this.modalService.open(content);
  }

  confirm(): void {
    this.confirmed.emit(true); // Emit true to indicate confirmation
    this.modalRef.close();
  }

  cancel(): void {
    this.confirmed.emit(false); // Emit false to indicate cancellation
    this.modalRef.dismiss();
  }
}
