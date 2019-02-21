import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() actionMenu = new EventEmitter<void>();
  menuState = "open";

  constructor() {
    this.hideMenuIfMobile()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hideMenuIfMobile()
  }

  toggleMenu(){
    this.menuState = this.menuState == "open" ? "" : "open";
  }

  hideMenuIfMobile() {
    if (window.innerWidth <= 576) {
      this.menuState = "";
    }
  }
  
}
