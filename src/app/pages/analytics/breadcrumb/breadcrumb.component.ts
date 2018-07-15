import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'skael-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Output() toggleMobileSidebar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
