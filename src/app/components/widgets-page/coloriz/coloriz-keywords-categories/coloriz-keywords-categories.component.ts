import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../../../services/api.service';
import { Category } from '../../../../models/category';

@Component({
  selector: 'app-coloriz-keywords-categories',
  templateUrl: './coloriz-keywords-categories.component.html',
  styleUrls: ['./coloriz-keywords-categories.component.scss']
})
export class ColorizKeywordsCategoriesComponent implements OnInit {

  public categories: Array<Category> = [];
  public all = false;

  modalRef: BsModalRef;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }

}
