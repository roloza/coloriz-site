import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
       /*if (this.id == '') {
            this.router.navigate(['browsershot']);
        }*/
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
              this.imageUrl = data.results.image.url;
              this.mainColor = data.results.image.color;
              this.palette = JSON.parse(data.results.image.palette);
              this.showLoader = false;

              console.log(data.results.image)
            }
          }
        );
      });
  }

  historyBack() {
    window.history.back();
  }

}
