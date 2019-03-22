import { Component, OnInit } from '@angular/core';
import { ImageCompress } from '../../../models/imageCompress';
import { ImageSlider } from '../../../customLib/image-slider';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  element: HTMLElement;
  prefix: String = 'beer';
  revealElement: any;
  revealContainer: any;
  range: any;
  handle: any;

  constructor() { }
  item: ImageCompress;
  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('compress-image'));
    if (items) {
      this.item = items[0];
// tslint:disable-next-line: no-unused-expression
      new ImageSlider('slider', 50);

    }
  }
}
