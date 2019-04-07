import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Image } from '../../models/image';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public query: string;
  public images: Image;
  private sub;
  public showLoader: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.query = params['query'] || '';
        if (this.query !== '') {
          this.images = null;
          this.showLoader = true;
          this.apiService.getImages(this.query).subscribe(
            data => {
              this.images = data;
              if (this.images.results.length === 0) {
                this.apiService.postImages(this.query).subscribe(
                  data => {
                    this.images = data;
                    this.showLoader = false;
                  });

              } else {
                this.showLoader = false;
              }
            }
          )
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
