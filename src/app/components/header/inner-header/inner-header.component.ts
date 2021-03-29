import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {

  }

  sidebar(): void {
    console.log("ccc");

    this.sidenavToggle.emit(true);

  }
}
