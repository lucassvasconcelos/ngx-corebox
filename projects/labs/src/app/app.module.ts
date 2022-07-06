import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCoreboxModule } from 'ngx-corebox';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCoreboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
