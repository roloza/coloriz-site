import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-keywords-category',
  templateUrl: './keywords-category.component.html',
  styleUrls: ['./keywords-category.component.scss']
})
export class KeywordsCategoryComponent implements OnInit {

  public tags: Array<Tag> = [];
  public categories: Array<Category> = [];
  categoryName: string;
  private searchTerms = new Subject<string>();
  public searchString: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.apiService.getCategoryTags(params.id).subscribe(
          data => {
            this.categoryName = data.name;
           this.tags = data.tags;
          }
        );
      }
    );

    this.apiService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

}
