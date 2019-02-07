import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  @Input() detailsCat;
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor( private router: Router ) {}

  closeModal($event) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

}
