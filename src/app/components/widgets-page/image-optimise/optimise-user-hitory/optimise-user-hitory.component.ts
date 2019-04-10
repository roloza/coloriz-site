import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ImageCompress } from '../../../../models/imageCompress';


@Component({
  selector: 'app-optimise-user-hitory',
  templateUrl: './optimise-user-hitory.component.html',
  styleUrls: ['./optimise-user-hitory.component.scss']
})
export class OptimiseUserHitoryComponent implements OnInit {

  results: Array<ImageCompress> = [];

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    const elements = this.localStorageService.getItems('compressor');
    elements.forEach(element => {
      this.apiService.showCompressor(element).subscribe(
        data => {
          if (data.results) {
            this.results.push( data.results);
          }
        }
      )
    });

  }

}
