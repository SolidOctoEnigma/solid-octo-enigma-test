import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test-1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Test1Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [Test1Component],
  providers: [],
})
export class Test1Module {}
