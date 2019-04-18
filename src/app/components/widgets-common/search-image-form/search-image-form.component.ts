import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-search-image-form',
  templateUrl: './search-image-form.component.html',
  styleUrls: ['./search-image-form.component.scss']
})
export class SearchImageFormComponent implements OnInit {


  searchForm = this.fb.group({
    query: ['', Validators.required]
  });
  customSelected: string;
  tagsAc: any[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getTags().subscribe(
      data => {
        this.tagsAc = data;
      }
    );
  }

  onSubmit() {
    this.router.navigate(['results'], { queryParams: { query: this.searchForm.value['query'] } });
  }
}
