import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  showLoader = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private vcRef:ViewContainerRef,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.showLoader = true;
    this.apiService.postBrowsershot(this.browsershotForm.value['url']).subscribe(
      data => {
        this.showLoader = false;
        if (data.state === 'error') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.router.navigate(['browsershot/screenshot'], { queryParams: { img: data.img } });
        }
      }
    )
  }

  showError() {
  }

}
