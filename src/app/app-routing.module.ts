import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { AnalyseImageComponent } from './pages/analyse-image/analyse-image.component';
import { ColorizComponent } from './pages/coloriz/coloriz.component';
import { BrowsershotComponent } from './pages/browsershot/browsershot.component';
import { ImageOptimiseComponent } from './pages/image-optimise/image-optimise.component';
import { ScreenshotComponent } from './pages/browsershot/screenshot/screenshot.component';
import { DetailsComponent } from './pages/image-optimise/details/details.component';
import { ColorDetailsComponent } from './pages/color-details/color-details.component';
import { KeywordsCategoryComponent } from './pages/coloriz/keywords-category/keywords-category.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { PageNotFoundComponent } from './components/template/others/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'analyser-image', component: AnalyseImageComponent },
  { path: 'coloriz',
    children: [
      {
        path: '',
        component: ColorizComponent,
       }, {
        path: 'expressions/:id',
        component: KeywordsCategoryComponent
      }
    ]
  },
  { path: 'browsershot', component: BrowsershotComponent },
  { path: 'browsershot/screenshot', component: ScreenshotComponent },
  { path: 'image-compression', component: ImageOptimiseComponent },
  { path: 'image-compression/details', component: DetailsComponent },
  { path: 'image-colors-details', component: ColorDetailsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
