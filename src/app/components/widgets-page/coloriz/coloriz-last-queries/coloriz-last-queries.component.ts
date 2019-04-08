import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-coloriz-last-queries',
  templateUrl: './coloriz-last-queries.component.html',
  styleUrls: ['./coloriz-last-queries.component.scss']
})
export class ColorizLastQueriesComponent implements OnInit {

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
