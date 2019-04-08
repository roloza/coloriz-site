import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from './services/api.service';

import { ThousandSuffixesPipe } from './pipes/thousand-suffixes-pipe';
import { FileSizePipe } from './pipes/filesize-pipe';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ImagesResultsComponent } from './components/images-results/images-results.component';
import { SearchImageFormComponent } from './components/search-image-form/search-image-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './pages/results/results.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { AnalyseImageComponent } from './pages/analyse-image/analyse-image.component';
import { WidgetBestColorsComponent } from './components/widgets/widget-best-colors/widget-best-colors.component';
import { ColorizComponent } from './pages/coloriz/coloriz.component';
import { BrowsershotComponent } from './pages/browsershot/browsershot.component';
import { ImageOptimiseComponent } from './pages/image-optimise/image-optimise.component';
import { HomeListPagesComponent } from './components/widgets-page/home/home-list-pages/home-list-pages.component';
import { BrowsershotFormComponent } from './components/widgets-page/browsershot/browsershot-form/browsershot-form.component';
import { ScreenshotComponent } from './pages/browsershot/screenshot/screenshot.component';
import { ImageOptimiseUploadFormComponent } from './components/image-optimise/image-optimise-upload-form/image-optimise-upload-form.component';
import { DetailsComponent } from './pages/image-optimise/details/details.component';
import { ColorizQueryFormComponent } from './components/widgets-page/coloriz/coloriz-query-form/coloriz-query-form.component';
import { ColorizLastQueriesComponent } from './components/widgets-page/coloriz/coloriz-last-queries/coloriz-last-queries.component';
import { ColorizBestQueriesComponent } from './components/widgets-page/coloriz/coloriz-best-queries/coloriz-best-queries.component';
import { ColorizKeywordsCategoriesComponent } from './components/widgets-page/coloriz/coloriz-keywords-categories/coloriz-keywords-categories.component';
import { AnalyseImageUploadFormComponent } from './components/widgets-page/analyse-image/analyse-image-upload-form/analyse-image-upload-form.component';

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
    AnalyseImageComponent,
    WidgetBestColorsComponent,
    ColorizComponent,
    BrowsershotComponent,
    ImageOptimiseComponent,
    HomeListPagesComponent,
    BrowsershotFormComponent,
    ScreenshotComponent,
    ImageOptimiseUploadFormComponent,
    DetailsComponent,
    FileSizePipe,
    ColorizQueryFormComponent,
    ColorizLastQueriesComponent,
    ColorizBestQueriesComponent,
    ColorizKeywordsCategoriesComponent,
    AnalyseImageUploadFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUploaderModule,
    DropzoneModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot()
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
