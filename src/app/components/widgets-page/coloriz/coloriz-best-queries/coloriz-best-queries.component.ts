import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-coloriz-best-queries',
  templateUrl: './coloriz-best-queries.component.html',
  styleUrls: ['./coloriz-best-queries.component.scss']
})
export class ColorizBestQueriesComponent implements OnInit {

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
