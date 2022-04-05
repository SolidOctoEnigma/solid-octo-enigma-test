import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test0Component } from './test-0.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Test0Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [Test0Component],
  providers: [],
})
export class Test0Module {}
