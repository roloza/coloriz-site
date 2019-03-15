import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  img: string;
  private sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.img = params['img'] || "";
        if (this.img == "") {
            this.router.navigate(["browsershot"]);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
