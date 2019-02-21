import { Component, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImagePalette } from '../../models/ImagePalette';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 50,
    maxFilesize: 2,
    acceptedFiles: 'image/*',
    method: 'POST',
    headers: {
      'Cache-Control': null,
      'X-Requested-With': null
    },
    url: 'http://51.15.132.218/api/upload',
  };
  public images: Array<ImagePalette> = [];

  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;

  constructor() {
  }

  public resetDropzoneUploads(): void {
    this.componentRef.directiveRef.reset();
    this.images = [];
  }

  public onUploadError(args: any): void {
    console.error('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    this.images.push({
      url:  "http://51.15.132.218" + args[1].filepath,
      color: args[1].color,
      palette: args[1].palette
    });
    console.log(this.images);
  }

}
