import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {


  @Input() private _title = '';
  @Input() private _content = '';
  @Input() private _footer = '';

  constructor(public activeModal: NgbActiveModal) {
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get footer(): string {
    return this._footer;
  }

  set footer(value: string) {
    this._footer = value;
  }



  ngOnInit() {
  }

}
