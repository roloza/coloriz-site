import { Component, OnInit } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-image-optimise-upload-form',
  templateUrl: './image-optimise-upload-form.component.html',
  styleUrls: ['./image-optimise-upload-form.component.scss']
})
export class ImageOptimiseUploadFormComponent implements OnInit {

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 50,
    maxFilesize: 10,
    acceptedFiles: 'image/*',
    method: 'POST',
    headers: {
      'Cache-Control': null,
      'X-Requested-With': null
    },
    url: 'http://51.15.210.203/api/compress',
  };

  storedCompressItems : any[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('compress-image'));
    if (items) {
      items.forEach(element => {
        this.storedCompressItems.push(element);
      });
    }
    if (this.storedCompressItems.length > 12) {
      this.storedCompressItems.pop();
    }
  }

  public onUploadError(args: any): void {
    this.toastr.error(args[1], 'Oops!');
  }

  public onUploadSuccess(args: any): void {
    if (args.length >= 2) {
      if (args[1].state === 'success') {
        this.router.navigate(['image-compression/details'], { queryParams: { id: args[1].results.id } });
      }
    }
  }

}
