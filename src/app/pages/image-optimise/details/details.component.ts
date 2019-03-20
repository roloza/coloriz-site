import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  item: any[] = [];
  ngOnInit() {

    const items = JSON.parse(localStorage.getItem('compress-image'));
    if (items) {
      this.item = items[0];
    }
  }

}
