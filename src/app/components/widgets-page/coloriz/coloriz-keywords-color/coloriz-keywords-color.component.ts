import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-coloriz-keywords-color',
  templateUrl: './coloriz-keywords-color.component.html',
  styleUrls: ['./coloriz-keywords-color.component.scss']
})
export class ColorizKeywordsColorComponent implements OnInit {

  keywordsByColors: any[];
  selectedColor = 'Bleu';
  colors: string[];

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getcolorKeywords().subscribe(
      data => {
        this.keywordsByColors = data.results.keywords;
        this.colors = data.results.colors;
      }
    )
   }

  ngOnInit() {
  }

  colorChange(color: string) {
    this.selectedColor = color;
  }

}
