import { Component, OnInit } from '@angular/core';
import { ImageCompress } from '../../../models/imageCompress';
import { ImageSlider } from '../../../customLib/image-slider';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})



export class DetailsComponent implements OnInit {
  showLoader: boolean;
  id: string;
  result: ImageCompress;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.showLoader = true;
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'] || '';
        if (this.id === '') {
            this.router.navigate(['image-compression']);
        }
        this.apiService.showCompressor(this.id).subscribe(
          data => {
            this.showLoader = false;
            if (data.state === 'error') {
              this.router.navigate(['image-compression']);
            } else {
              const slider = new ImageSlider('slider', 50);
              this.result = data.results;
            }
          }
        )
      });
  }
}
