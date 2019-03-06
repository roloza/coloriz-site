import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-browsershot-form',
  templateUrl: './browsershot-form.component.html',
  styleUrls: ['./browsershot-form.component.scss']
})
export class BrowsershotFormComponent implements OnInit {

  url: string = "https://www.recette-pateacrepe.fr";
  img: string;
  errorMessage: string = "";

  browsershotForm = this.fb.group({
    url: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log();
    this.apiService.postBrowsershot(this.browsershotForm.value['url']).subscribe(
      data => {
        this.img = data.img;
        if (data.state == "error") {
          this.errorMessage = data.message;
        }
      }
    )

  }

}
