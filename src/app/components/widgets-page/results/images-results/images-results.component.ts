import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-images-results',
  templateUrl: './images-results.component.html',
  styleUrls: ['./images-results.component.scss']
})
export class ImagesResultsComponent implements OnInit {

  @Input() name: string;
  @Input() path: string;
  @Input() color: string;
  @Input() palette: any[];
  @Input() id: string;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    if (this.color === null) {
      this.apiService.postColor(this.name).subscribe(
        data => {
          this.color = data.color;
          this.palette = data.palette;
        }
      )
    }
  }

}
