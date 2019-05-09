import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Brand } from '../../../../models/brand';
import { ModalDirective } from "ngx-bootstrap/modal";
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-multinationales',
  templateUrl: './multinationales.component.html',
  styleUrls: ['./multinationales.component.scss']
})
export class MultinationalesComponent implements OnInit {

  public brands: Array<Brand> = [];
  public allBrands: Array<Brand> = [];
  public searchString = '';
  max: number;
  pageMax = 12;
  colors = ['rouge', 'jaune', 'bleu', 'vert', 'rose', 'orange', 'violet', 'marron', 'gris', 'noir', 'blanc'];
  @ViewChild('addBrandModal') addBrandModal: ModalDirective;

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,

  ) { }

  ngOnInit() {

    this.apiService.getBrands().subscribe(
      data => {
        data.forEach(element => {
          this.brands.push({
            id: element.id,
            id_image: element.id_image,
            name: element.name,
            url: element.url,
            slug: element.slug,
            color: element.images.color,
            palette: JSON.parse(element.images.palette),
            colorName: element.images.color_name.toLowerCase()
          });
        });
        this.max = data.length;
        this.allBrands = this.brands;
      }
    );

    const elements = this.localStorageService.getItems('brands');
    elements.forEach(element => {
      this.apiService.showBrand(element).subscribe(
        data => {
          this.brands.push({
            id: data.id,
            id_image: data.id_image,
            name: data.name,
            url: data.url,
            slug: data.slug,
            color: data.images.color,
            palette: JSON.parse(data.images.palette),
            colorName: data.images.color_name.toLowerCase()
          });
        }
      );
    });
  }

  showMore() {
    this.pageMax += 12;
  }

  filterColor(color: string) {
    this.brands = [];
    if (color === '') {
      this.brands = this.allBrands;
    } else {
      this.allBrands.forEach(element => {
        if (element.colorName === color) {
          this.brands.push({
            id: element.id,
            id_image: element.id_image,
            name: element.name,
            url: element.url,
            slug: element.slug,
            color: element.color,
            palette: element.palette,
            colorName: element.colorName
          });
        }
      });
    }

  }

  addBrand() {
    this.addBrandModal.show();
}

}
