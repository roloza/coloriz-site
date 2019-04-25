import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuState: string;

  disabled = false;
  compact = true;
  invertX = false;
  invertY = false;
  autoUpdate = true;

  shown: 'native' | 'hover' | 'always' = 'hover';


  constructor() { }

  ngOnInit() {
  }

  setShown() {
    if (this.shown === 'native') {
      this.shown = 'hover';
    } else if (this.shown === 'hover') {
      this.shown = 'always';
    } else {
      this.shown = 'native';
    }
  }
}
