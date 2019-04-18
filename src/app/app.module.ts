import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HighchartsChartModule } from 'highcharts-angular';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from './services/api.service';
import { LocalStorageService } from './services/local-storage.service';

import { ThousandSuffixesPipe } from './pipes/thousand-suffixes-pipe';
import { FileSizePipe } from './pipes/filesize-pipe';
import { FilterPipe } from './pipes/filter-pipe';

import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ImagesResultsComponent } from './components/widgets-page/results/images-results/images-results.component';
import { SearchImageFormComponent } from './components/widgets-common/search-image-form/search-image-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './pages/results/results.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AnalyseImageComponent } from './pages/analyse-image/analyse-image.component';
import { ColorizComponent } from './pages/coloriz/coloriz.component';
import { BrowsershotComponent } from './pages/browsershot/browsershot.component';
import { ImageOptimiseComponent } from './pages/image-optimise/image-optimise.component';
import { HomeListPagesComponent } from './components/widgets-page/home/home-list-pages/home-list-pages.component';
import { BrowsershotFormComponent } from './components/widgets-page/browsershot/browsershot-form/browsershot-form.component';
import { ScreenshotComponent } from './pages/browsershot/screenshot/screenshot.component';
import { DetailsComponent } from './pages/image-optimise/details/details.component';
import { ColorizQueryFormComponent } from './components/widgets-page/coloriz/coloriz-query-form/coloriz-query-form.component';
import { ColorizLastQueriesComponent } from './components/widgets-page/coloriz/coloriz-last-queries/coloriz-last-queries.component';
import { ColorizBestQueriesComponent } from './components/widgets-page/coloriz/coloriz-best-queries/coloriz-best-queries.component';
import { ColorizKeywordsCategoriesComponent } from './components/widgets-page/coloriz/coloriz-keywords-categories/coloriz-keywords-categories.component';
import { AnalyseImageUploadFormComponent } from './components/widgets-page/analyse-image/analyse-image-upload-form/analyse-image-upload-form.component';
import { OptimiseUploadFormComponent } from './components/widgets-page/image-optimise/optimise-upload-form/optimise-upload-form.component';
import { BrowsershotUserScreenshotsComponent } from './components/widgets-page/browsershot/browsershot-user-screenshots/browsershot-user-screenshots.component';
import { ScreenshotShowComponent } from './components/widgets-page/browsershot/screenshot/screenshot-show/screenshot-show.component';
import { OptimiseUserHitoryComponent } from './components/widgets-page/image-optimise/optimise-user-hitory/optimise-user-hitory.component';
import { OptimiseBeforeAfterComponent } from './components/widgets-page/image-optimise/details/optimise-before-after/optimise-before-after.component';
import { ColorDetailsComponent } from './pages/color-details/color-details.component';
import { KeywordsCategoryComponent } from './pages/coloriz/keywords-category/keywords-category.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { PageNotFoundComponent } from './components/template/others/page-not-found/page-not-found.component';
import { MultinationalesComponent } from './components/widgets-page/brands/multinationales/multinationales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThousandSuffixesPipe,
    FilterPipe,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ImagesResultsComponent,
    SearchImageFormComponent,
    ResultsComponent,
    AnalyseImageComponent,
    ColorizComponent,
    BrowsershotComponent,
    ImageOptimiseComponent,
    HomeListPagesComponent,
    BrowsershotFormComponent,
    ScreenshotComponent,
    DetailsComponent,
    FileSizePipe,
    ColorizQueryFormComponent,
    ColorizLastQueriesComponent,
    ColorizBestQueriesComponent,
    ColorizKeywordsCategoriesComponent,
    AnalyseImageUploadFormComponent,
    OptimiseUploadFormComponent,
    BrowsershotUserScreenshotsComponent,
    ScreenshotShowComponent,
    OptimiseUserHitoryComponent,
    OptimiseBeforeAfterComponent,
    ColorDetailsComponent,
    KeywordsCategoryComponent,
    BrandsComponent,
    PageNotFoundComponent,
    MultinationalesComponent,
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
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    HighchartsChartModule,
  ],
  exports: [
    ThousandSuffixesPipe,
    FilterPipe,
  ],
  providers: [
    ApiService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
