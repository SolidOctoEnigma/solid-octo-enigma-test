import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test3Module } from './pages/test-3/test-3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Test3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
