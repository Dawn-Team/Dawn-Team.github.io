import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalContentComponent} from "../modal-content/modal-content.component";

const bodyTemplate=
  '<div class="row" data-purpose="placeholder">' +
  '    <div class="col-sm-12">' +
  '        <h3>For now, it is Machine Learning.</h3>' +
  '        <p>' +
  '            We are catching up the steps as most of the campuses, research agencies and companies do.' +
  '        </p>' +
  '        <p>' +
  '            And we begin our journey from very first steps.' +
  '        </p>' +
  '        <p>' +
  '            If you answered our question positively, I am sure you can find something useful either' +
  '            <a class="btn btn-warning"' +
  '               href="https://gitter.im/Dawn-Team-Gitter/Contribution?utm_source=share-link&utm_medium=link&utm_campaign=share-link">' +
  '                <i class="fab fa-gitter"></i> Here' +
  '            </a>' +
  '            or' +
  '            <a class="btn btn-warning"' +
  '               href="mailto:service@mail.arvinsichuan.com?subject=I%20Want%20to%20Contribute">' +
  '                <i class="fas fa-envelope"></i> Service@mail.arvinsichuan.com</a>' +
  '        </p>' +
  '        <p style="font-weight: bold;">' +
  '            Please feel free to talk to us!' +
  '        </p>' +
  '    </div>' +
  '</div>';



@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.css']
})
export class MainContentsComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent,{size:"lg"});
    modalRef.componentInstance.title = 'What are we stepping forward to?';
    modalRef.componentInstance.content = bodyTemplate;
    modalRef.componentInstance.footer = '';
  }

}
