import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() detailsCat;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }

}
