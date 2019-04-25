import { Component, OnInit, ViewContainerRef, TemplateRef  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-browsershot-form',
  templateUrl: './browsershot-form.component.html',
  styleUrls: ['./browsershot-form.component.scss']
})
export class BrowsershotFormComponent implements OnInit {

  type = 'desktop';
  device = 'desktop';
  width = '1920';
  height = '1080';
  fullpage = 'Ligne de flottaison';
  fullpageBool = 0;

  browsershotForm = this.fb.group({
    url: ['', Validators.required]
  });
  paramsForm = this.fb.group({
    type: [this.type, Validators.required],
    device: ['Iphone X', Validators.required],
    width: [this.width, Validators.required],
    height: [this.height, Validators.required],
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
      this.fullpageBool
    ]).subscribe(
      data => {
        this.showLoader = false;
        if (data.state === 'error') {
          this.toastr.error(data.message, 'Oops!');
        } else {
          this.router.navigate(['browsershot/screenshot'], { queryParams: { id: data.results.id } });
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
    this.fullpageBool = this.paramsForm.value['fullpage']
    this.fullpage = this.paramsForm.value['fullpage'] === '1' ? 'Toute la page web' : 'Ligne de flottaison' ;
    this.closeModal();
  }

  handleChange(event) {
    this.type = event.target.value ;
  }

}
