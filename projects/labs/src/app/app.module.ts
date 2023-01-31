import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCoreboxModule } from 'ngx-corebox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
	declarations: [AppComponent, ExampleComponent],
	imports: [AppRoutingModule, BrowserModule, NgxCoreboxModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
