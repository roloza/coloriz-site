import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Brand } from '../../../../models/brand';

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

  constructor(
    private apiService: ApiService
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
    )

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

}
