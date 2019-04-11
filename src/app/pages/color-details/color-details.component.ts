import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import * as Highcharts from 'highcharts';
import Tree from 'highcharts/modules/treemap';
Tree(Highcharts);

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.scss']
})
export class ColorDetailsComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any;
  showLoader = true;
  private sub;
  id: string;
  imageUrl: string;
  mainColor: string;
  palette: [];
  colors: [];
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'] || '';
       if (this.id === '') {
        this.historyBack()
      }
      this.apiService.getImageColorsDetails(this.id).subscribe(
        data => {
          if (data.state === 'error') {
            console.log('error');
          } else {
            this.chartOptions = {
              series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                data: data.results.colors
              }],
              title: {text: ''}
            };
            this.colors = data.results.colors;
            this.imageUrl = data.results.image.url;
            this.mainColor = data.results.image.color;
            this.palette = JSON.parse(data.results.image.palette);
            this.showLoader = false;
          }
        }
      );
    });
  }

  historyBack() {
    window.history.back();
  }

  getRgbColor(hex: string) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

}
