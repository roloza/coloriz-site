import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-browsershot-form',
  templateUrl: './browsershot-form.component.html',
  styleUrls: ['./browsershot-form.component.scss']
})
export class BrowsershotFormComponent implements OnInit {

  browsershotForm = this.fb.group({
    url: ['', Validators.required]
  });
  showLoader: boolean = false;
  img: string;
  errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.showLoader = true;
    this.apiService.postBrowsershot(this.browsershotForm.value['url']).subscribe(
      data => {
        this.img = data.img;
        this.showLoader = false;
        if (data.state == "error") {
          this.errorMessage = data.message;
        } else{
          this.router.navigate(['browsershot/screenshot'], { queryParams: { img: data.img } });
        }
      }
    )
  }

}
