import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-browsershot-user-screenshots',
  templateUrl: './browsershot-user-screenshots.component.html',
  styleUrls: ['./browsershot-user-screenshots.component.scss']
})
export class BrowsershotUserScreenshotsComponent implements OnInit {
  userScreenshots: any[] = [];
  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const elements = this.localStorageService.getItems('screenshot');
    elements.forEach(element => {
      this.apiService.showBrowsershot(element).subscribe(
        data => {
          if (data.results) {
            console.log(data.results.params.type);
            this.userScreenshots.push({
              id: element,
              imageUrl: data.results.image.url,
              url: data.results.params.url,
              device: data.results.params.type
            });
          }
        }
      )
    });
  }

}
