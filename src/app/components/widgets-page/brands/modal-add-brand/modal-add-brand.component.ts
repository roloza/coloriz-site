import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Brand } from '../../../../models/brand';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-modal-add-brand',
  templateUrl: './modal-add-brand.component.html',
  styleUrls: ['./modal-add-brand.component.scss']
})
export class ModalAddBrandComponent implements OnInit {

  @Input() modalRef: BsModalRef;
  addBrandForm = this.fb.group({
    name: ['', Validators.required]
  });
  showLoader = false;
  showLoader2 = false;
  brand: Brand;
  brandImagesLinks: string[];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.brandImagesLinks = null;
    this.showLoader = true;
    const name = this.addBrandForm.value['name'];
    this.apiService.postBrand(name).subscribe(
      data => {
        if (data.state !== 'success') {
          this.showLoader = false;
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.apiService.showBrand(data.results.id).subscribe(
            data2 => {
              this.brand = {
                id: data2.id,
                id_image: data2.id_image,
                name: data2.name,
                url: data2.url,
                slug: data2.slug,
                color: data2.images.color,
                palette: JSON.parse(data2.images.palette),
                colorName: data2.images.color_name.toLowerCase()
              };
              this.showLoader = false;
            }
          );
        }
      }
    );
  }

  close() {
    this.modalRef.hide();
  }

  refreshLogos(query: string) {
    this.showLoader2 = true;
    this.apiService.getBrandImagesLinks(query).subscribe(
      data => {
        if (data.state !== 'success') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.brandImagesLinks = data.results.images;
        }
        this.showLoader2 = false;
      }
    );
  }

  updateBrandImage(link: string) {
    this.apiService.updateBrandImagesLinks(this.brand.id, encodeURIComponent(link)).subscribe(
      data => {
        if (data.state !== 'success') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.brand.url = data.results.url;
          this.brand.color = data.results.color;
          this.brand.palette = JSON.parse(data.results.palette);
          this.brand.id_image = data.results.id;
        }
      }
    );
  }

  saveBrandImage() {
    this.apiService.saveBrandImagesLinks(this.brand.id, this.brand.id_image).subscribe(
      data => {
        if (data.state !== 'success') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.localStorageService.storeItem(this.brand.id.toString(), 'brands', 50);
          this.toastr.success('Enregistrement effectué avec succès', 'Yeah!');
        }
      }
    );
    this.modalRef.hide();
  }

}
