import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Image } from '../../../../models/image';

@Component({
  selector: 'app-images-results',
  templateUrl: './images-results.component.html',
  styleUrls: ['./images-results.component.scss']
})
export class ImagesResultsComponent implements OnInit {

  @Input() image: Image;
  @Input() querySlug: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log(this.image.palette);
    if (this.image.color === null) {
      this.apiService.postColor(this.image.name, this.querySlug).subscribe(
        data => {
          this.image.color = data.color;
          this.image.palette = data.palette;
        }
      )
    }
  }

}
