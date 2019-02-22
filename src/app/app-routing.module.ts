import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { AnalyseImageComponent } from './pages/analyse-image/analyse-image.component';
import { ColorizComponent } from './pages/coloriz/coloriz.component';
import { BrowsershotComponent } from './pages/browsershot/browsershot.component';
import { ImageOptimiseComponent } from './pages/image-optimise/image-optimise.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'analyser-image', component: AnalyseImageComponent },
  { path: 'coloriz', component: ColorizComponent },
  { path: 'browsershot', component: BrowsershotComponent },
  { path: 'image-compression', component: ImageOptimiseComponent },
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
