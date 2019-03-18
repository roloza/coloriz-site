import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  img: string;
  imgWidth: Number;
  private sub;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.img = params['img'] || '';
        if (this.img === '') {
            this.router.navigate(['browsershot']);
        }

        const image = {
          url: this.img,
          width: 0
        }
        this.getImageDimension (image).subscribe(response => {
             this.imgWidth = image.width;
        });
      });
  }

  getImageDimension (image): Observable<any> {
    return new Observable(observer => {
        const img = new Image();
        img.onload = function (event) {
            const loadedImage: any = event.currentTarget;
            image.width = loadedImage.width;
            image.height = loadedImage.height;
            observer.next(image);
            observer.complete();
        }
        img.src = image.url;
    });
}

}
