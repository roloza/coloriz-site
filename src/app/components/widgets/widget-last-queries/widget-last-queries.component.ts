import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-last-queries',
  templateUrl: './widget-last-queries.component.html',
  styleUrls: ['./widget-last-queries.component.scss']
})
export class WidgetLastQueriesComponent implements OnInit {
  cpt = [0, 1, 2];
  
  constructor() { }

  ngOnInit() {
    
  }

}
