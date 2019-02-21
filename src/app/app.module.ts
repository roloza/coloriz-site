import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ThousandSuffixesPipe } from './pipes/thousand-suffixes-pipe';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ImagesResultsComponent } from './components/images-results/images-results.component';
import { SearchImageFormComponent } from './components/search-image-form/search-image-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './pages/results/results.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { AnalyseImageComponent } from './pages/analyse-image/analyse-image.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThousandSuffixesPipe,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ImagesResultsComponent,
    SearchImageFormComponent,
    ResultsComponent,
    UploadFormComponent,
    AnalyseImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUploaderModule,
    DropzoneModule,
    AppRoutingModule
  ],
  exports: [
    ThousandSuffixesPipe
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
