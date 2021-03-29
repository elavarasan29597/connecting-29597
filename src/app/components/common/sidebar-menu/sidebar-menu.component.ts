import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  sidebar(): void {

    this.sidenavToggle.emit(false);

  }

}
