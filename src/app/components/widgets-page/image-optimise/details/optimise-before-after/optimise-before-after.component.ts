import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ImageCompress } from '../../../../../models/imageCompress';
import { ImageSlider } from '../../../../../customLib/image-slider';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';
import { LocalStorageService } from '../../../../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-optimise-before-after',
  templateUrl: './optimise-before-after.component.html',
  styleUrls: ['./optimise-before-after.component.scss']
})
export class OptimiseBeforeAfterComponent implements OnInit, AfterViewChecked {

  showLoader = false;
  id: string;
  result: ImageCompress;
  private sub;
  color: string;
  palette: any[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.showLoader = true;
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'] || '';
        if (this.id === '') {
            this.router.navigate(['image-compression']);
        }
        this.apiService.showCompressor(this.id).subscribe(
          data => {
            this.showLoader = false;
            if (data.state === 'error') {
              this.router.navigate(['image-compression']);
            } else {
              this.localStorageService.storeItem(this.id, 'compressor', 12);

              this.result = data.results;
              this.color = this.result.fileCompress.color;
              this.palette = JSON.parse(this.result.fileCompress.palette);

            }
          }
        )
      });
  }

  ngAfterViewChecked() {
    const slider = new ImageSlider('slider', 50);
  }

  submitExtractColors() {
    this.showLoader = true;
    if (this.result.fileCompress.color === null) {
      this.apiService.postColor(this.result.fileCompress.name).subscribe(
        data => {
          this.showLoader = false;
          if (data.state === 'error') {
            this.toastr.error(data.message, 'Oops!');
          }
          this.color = data.color;
          this.palette = data.palette;
        }
      );
    } else {
      this.showLoader = false;
      this.color = this.result.fileCompress.color;
      this.palette = JSON.parse(this.result.fileCompress.palette);
    }
  }

  download() {
    console.log('coucou');
  }

}
