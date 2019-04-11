import { Component, ViewChild, OnInit } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImagePalette } from '../../../../models/ImagePalette';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ApiService } from '../../../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-analyse-image-upload-form',
  templateUrl: './analyse-image-upload-form.component.html',
  styleUrls: ['./analyse-image-upload-form.component.scss']
})
export class AnalyseImageUploadFormComponent implements OnInit {
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
  public imageHistorique: Array<ImagePalette> = [];

  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;

  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    const imageIds = this.localStorageService.getItems('upload-image');
    imageIds.forEach(imageId => {
      this.apiService.getImage(imageId).subscribe(
        data => {
          this.imageHistorique.push({
            url: data.results.url,
            palette: JSON.parse(data.results.palette),
            color: data.results.color,
            id: data.results.id
          })
        }
      )
    });
  }

  public resetDropzoneUploads(): void {
    this.componentRef.directiveRef.reset();
    this.images = [];
  }

  public onUploadError(args: any): void {
    console.error('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    this.localStorageService.storeItem(args[1].image_id, 'upload-image', 12);

    this.images.unshift({
      url:   args[1].filepath,
      color: args[1].color,
      palette: args[1].palette,
      id: args[1].image_id,
    });
  }

  delete(id: string) {
    const imageIds = this.localStorageService.deleteItem(id, 'upload-image');
    this.imageHistorique = [];
    imageIds.forEach(imageId => {
      this.apiService.getImage(imageId).subscribe(
        data => {
          this.imageHistorique.push({
            url: data.results.url,
            palette: JSON.parse(data.results.palette),
            color: data.results.color,
            id: data.results.id
          })
        }
      )
    });
    this.toastr.success('Image supprimée de votre historique', 'Success!');
  }

}
