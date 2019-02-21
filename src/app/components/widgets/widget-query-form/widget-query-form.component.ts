import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-query-form',
  templateUrl: './widget-query-form.component.html',
  styleUrls: ['./widget-query-form.component.scss']
})
export class WidgetQueryFormComponent implements OnInit {

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
