import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test0Module } from './pages/test-0/test-0.module';
import { Test1Module } from './pages/test-1/test-1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Test0Module, Test1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
