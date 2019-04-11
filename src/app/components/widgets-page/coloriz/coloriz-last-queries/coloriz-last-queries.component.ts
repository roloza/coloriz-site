import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-coloriz-last-queries',
  templateUrl: './coloriz-last-queries.component.html',
  styleUrls: ['./coloriz-last-queries.component.scss']
})
export class ColorizLastQueriesComponent implements OnInit {

  queries: any[] = [];

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    const elts = this.localStorageService.getItems('queries');
    elts.forEach(elt => {
      this.queries.push({
        kw: elt,
        class: this.getClass()
      });
    });
    /*this.apiService.getLastQueries().subscribe(
      data => {
        this.queries = data.results;
      }
    )*/
  }

  getClass() {
    const randNum = Math.floor(Math.random() * Math.floor(7));
    let className = '';
    switch (randNum) {
      case 0:
        className = 'primary';
        break;
      case 1:
        className = 'secondary';
        break;
      case 2:
        className = 'success';
        break;
      case 3:
        className = 'primary';
        break;
      case 4:
        className = 'danger';
        break;
      case 5:
        className = 'info';
        break;
      case 6:
        className = 'dark';
        break;

    }
    return 'tag-' + className;
  }

}
