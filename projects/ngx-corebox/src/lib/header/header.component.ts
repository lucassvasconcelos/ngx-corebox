import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoPath: string = '';

  menuIsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
