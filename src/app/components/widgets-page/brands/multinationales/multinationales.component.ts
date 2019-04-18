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
  public searchString = '';
  max: number;
  pageMax = 12;

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
            palette: JSON.parse(element.images.palette)
          });
        });
        this.max = data.length;
      }
    )

  }

  showMore() {
    this.pageMax += 12;
  }

}
