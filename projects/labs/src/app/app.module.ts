import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgxCoreboxModule, NgxMaskDirective, NgxMaskPipe, NgxSpinnerModule, provideEnvironmentNgxMask, ToastrModule } from 'ngx-corebox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
	declarations: [AppComponent, ExampleComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		NgbModule,
		NgxCoreboxModule,
		NgxMaskDirective,
		NgxMaskPipe,
		NgxSpinnerModule,
		ToastrModule.forRoot()
	],
	providers: [provideEnvironmentNgxMask()],
	bootstrap: [AppComponent]
})
export class AppModule {}
