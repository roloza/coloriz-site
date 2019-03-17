import { Component, OnInit, ViewContainerRef, TemplateRef  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-browsershot-form',
  templateUrl: './browsershot-form.component.html',
  styleUrls: ['./browsershot-form.component.scss']
})
export class BrowsershotFormComponent implements OnInit {

  type: String = 'desktop';
  device: String = 'desktop';
  width: String = '1366';
  height: String = '768';
  fullpage: String = 'Ligne de flottaison';

  browsershotForm = this.fb.group({
    url: ['', Validators.required]
  });
  paramsForm = this.fb.group({
    type: ['desktop', Validators.required],
    device: ['Iphone X', Validators.required],
    width: ['1366', Validators.required],
    height: ['768', Validators.required],
    fullpage: ['0', Validators.required]
  });
  showLoader = false;
  modalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private vcRef:ViewContainerRef,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.showLoader = true;
    this.apiService.postBrowsershot([
      this.browsershotForm.value['url'],
      this.type,
      this.device,
      this.width,
      this.height,
      this.fullpage
    ]).subscribe(
      data => {
        this.showLoader = false;
        if (data.state === 'error') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.router.navigate(['browsershot/screenshot'], { queryParams: { img: data.img } });
        }
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
  submitModal() {
    this.type = this.paramsForm.value['type'] ;
    this.device = this.paramsForm.value['device'] ;
    this.width = this.paramsForm.value['width'] ;
    this.height = this.paramsForm.value['height'] ;
    this.fullpage = this.paramsForm.value['fullpage'] === '1' ? 'Toute la page web' : 'Ligne de flottaison' ;
    this.closeModal();
  }

  handleChange(event) {
    this.type = event.target.value ;
  }
}
