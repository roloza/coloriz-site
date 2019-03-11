import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ToasterService } from '../../../services/toaster.service';


@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  img: string;
  url: string;
  public showLoader: boolean = false;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private toasterService: ToasterService,
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
                this.toasterService.showError(data.message)
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
