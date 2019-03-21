import { Component, OnInit } from '@angular/core';
import { ImageCompress } from '../../../models/imageCompress';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  item: ImageCompress;
  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('compress-image'));
    if (items) {
      this.item = items[0];
      new BeerSlider( document.getElementById( 'slider' ) );

    }
  }

}
