import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddinfoComponent } from './components/addinfo/addinfo.component';
import { VisualizationComponent } from './components/visualization/visualization.component';

const routes: Routes = [
  { path: '', component: AddinfoComponent },
  { path: 'visualize', component: VisualizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
