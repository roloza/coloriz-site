import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Image } from '../../models/image';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public query: string;
  public images: Image[] = [];
  public querySlug: string;
  private sub;
  public showLoader = true;
  public showError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.query = params['query'] || '';
        if (this.query !== '') {
          this.localStorageService.storeItem(this.query, 'queries', 30);

          this.images = [];
          this.showLoader = true;
          this.apiService.showColoriz(this.query).subscribe(
            data => {
              this.querySlug = data.slug ? data.slug : '';
              if (data.results) {
                data.results.forEach(element => {
                  this.images.push({
                    'id': element.id,
                    'color': element.color,
                    'palette': JSON.parse(element.palette),
                    'color_fullname': element.color_fullname,
                    'color_name': element.color_name,
                    'url': element.url,
                    'name': element.name
                  });
                });
              }

              if (data.state === 'error') {
                this.apiService.postColoriz(this.query).subscribe(
                  data2 => {
                    if (data2.state === 'error') {
                      this.showError = true;
                    }
                    this.querySlug = data2.slug ? data2.slug : '';
                    if (data2.results) {
                      data2.results.forEach(element => {
                        this.images.push({
                          'id': element.id,
                          'color': element.color,
                          'palette': JSON.parse(element.palette),
                          'color_fullname': element.color_fullname,
                          'color_name': element.color_name,
                          'url': element.url,
                          'name': element.name
                        });
                      });
                    }
                    this.showLoader = false;
                  }
                );
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
