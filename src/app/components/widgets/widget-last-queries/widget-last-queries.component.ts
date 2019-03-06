import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-widget-last-queries',
  templateUrl: './widget-last-queries.component.html',
  styleUrls: ['./widget-last-queries.component.scss']
})
export class WidgetLastQueriesComponent implements OnInit {
  cpt = [0, 1, 2];
  queries: any[];
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getLastQueries().subscribe(
      data => {
        this.queries = data.results;
      }
    )
  }

}
