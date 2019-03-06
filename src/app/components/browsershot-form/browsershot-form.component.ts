import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browsershot-form',
  templateUrl: './browsershot-form.component.html',
  styleUrls: ['./browsershot-form.component.scss']
})
export class BrowsershotFormComponent implements OnInit {

  browsershotForm = this.fb.group({
    url: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['browsershot/screenshot'], { queryParams: { url: this.browsershotForm.value['url'] } });

  }

}
