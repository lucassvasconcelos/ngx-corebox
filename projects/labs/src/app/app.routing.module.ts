import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { Example2Component } from './components/example2/example2.component';

const routes: Routes = [
	{ path: '', redirectTo: 'example', pathMatch: 'full' },
	{ path: 'example', component: ExampleComponent },
	{ path: 'example2', component: Example2Component },
	{ path: 'example2/test', component: Example2Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
