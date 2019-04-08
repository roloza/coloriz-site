import { Component, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImagePalette } from '../../../../models/ImagePalette';

@Component({
  selector: 'app-analyse-image-upload-form',
  templateUrl: './analyse-image-upload-form.component.html',
  styleUrls: ['./analyse-image-upload-form.component.scss']
})
export class AnalyseImageUploadFormComponent {
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
    url: 'http://51.15.210.203/api/upload',
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
      url:   args[1].filepath,
      color: args[1].color,
      palette: args[1].palette
    });
  }

}
