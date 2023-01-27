import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
