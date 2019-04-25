import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public brands: Array<Brand> = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

    /*this.apiService.getBrands().subscribe(
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
            colorName: element.images.color_name

          });
        });
      }
    )*/

  }

}
