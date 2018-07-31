import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddinfoComponent } from './components/addinfo/addinfo.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: AddinfoComponent },
  { path: 'visualize', component: VisualizationComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
