import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  img: string;
  url: string;
  errorMessage: string = "";
  public showLoader: boolean = false;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.url = params['url'] || "";
        if (this.url != "") {
          this.img = null;
          this.showLoader = true;
          this.apiService.postBrowsershot(this.url).subscribe(
            data => {
              this.img = data.img;
              if (data.state == "error") {
                this.errorMessage = data.message;
              }
              this.showLoader = false;
            }
          )
        } else {
            this.router.navigate(["/"]);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
