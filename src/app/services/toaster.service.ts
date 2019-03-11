import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToasterService {

  constructor(
    private toastr: ToastsManager, 
    private vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Yeah!');
  }

  showError(message: string) {
    this.toastr.error(message, 'Oops!');
  }

  showWarning(message: string) {
    this.toastr.warning(message, 'Alerte!');
  }

  showInfo(message: string) {
    this.toastr.info(message);
  }
  
  showCustom(message: string) {
    this.toastr.custom('<span style="color: red">' + message + '</span>', null, {enableHTML: true});
  }
  
}
