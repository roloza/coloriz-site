import { Component, Output, EventEmitter, HostListener, OnInit  } from '@angular/core';
import { fadeAnimation } from './animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  @Output() actionMenu = new EventEmitter<void>();
  menuState = "open";

  constructor(
    private router: Router
  ) {
    this.hideMenuIfMobile()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hideMenuIfMobile()
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
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
