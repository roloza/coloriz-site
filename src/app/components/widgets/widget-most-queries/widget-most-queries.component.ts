import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-widget-most-queries',
  templateUrl: './widget-most-queries.component.html',
  styleUrls: ['./widget-most-queries.component.scss']
})
export class WidgetMostQueriesComponent implements OnInit {
  queries: any[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getBestQueries().subscribe(
      data => {
        this.queries = data.results;
      }
    )
  }

}
