import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoisComponent } from './dois/dois.component';
import { UmComponent } from './um/um.component';

const routes: Routes = [
  { path: '', redirectTo: 'um', pathMatch: 'full' },
  { path: 'um', component: UmComponent },
  { path: 'dois', component: DoisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
