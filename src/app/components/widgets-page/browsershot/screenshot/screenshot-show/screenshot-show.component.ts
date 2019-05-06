import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../services/api.service';
import { LocalStorageService } from '../../../../../services/local-storage.service';
import { Image } from '../../../../../models/image';
import { browser } from 'protractor';

@Component({
  selector: 'app-screenshot-show',
  templateUrl: './screenshot-show.component.html',
  styleUrls: ['./screenshot-show.component.scss']
})
export class ScreenshotShowComponent implements OnInit {

  showLoader: boolean;
  id: string;
  img: string;
  type: string;
  data: any;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.showLoader = true;
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'] || '';
        if (this.id === '') {
            this.router.navigate(['browsershot']);
        }
        this.apiService.showBrowsershot(this.id).subscribe(
          data => {
            this.showLoader = false;
            if (data.state === 'error') {
              this.router.navigate(['browsershot']);
            } else {
              this.localStorageService.storeItem(this.id, 'screenshot', 12);
              this.data = data;
            }
          }
        )
        const image = {
          url: this.img,
          width: 0
        }

      });
  }

}
