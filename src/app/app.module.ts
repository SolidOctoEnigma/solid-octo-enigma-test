import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test0Module } from './pages/test-0/test-0.module';
import { Test1Module } from './pages/test-1/test-1.module';
import { Test2Module } from './pages/test-2/test-2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Test0Module, Test1Module, Test2Module, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
