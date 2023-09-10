import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
	NgbModule,
	NgbTypeaheadModule,
	NgxCoreboxModule,
	NgxMaskDirective,
	NgxMaskPipe,
	NgxSpinnerModule,
	provideEnvironmentNgxMask,
	ToastrModule
} from 'ngx-corebox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ExampleComponent } from './components/example/example.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, ExampleComponent, Example2Component, Example3Component],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		NgbModule,
		NgxCoreboxModule,
		NgxMaskDirective,
		NgxMaskPipe,
		NgxSpinnerModule,
		ToastrModule.forRoot(),
		NgbTypeaheadModule
	],
	providers: [provideEnvironmentNgxMask()],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
