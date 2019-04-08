import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coloriz-query-form',
  templateUrl: './coloriz-query-form.component.html',
  styleUrls: ['./coloriz-query-form.component.scss']
})
export class ColorizQueryFormComponent implements OnInit {

  searchForm = this.fb.group({
    query: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['results'], { queryParams: { query: this.searchForm.value['query'] } });
  }

}
