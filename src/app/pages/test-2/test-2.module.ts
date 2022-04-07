import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test-2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileTagsModule } from './file-tags/file-tags.module';

@NgModule({
  declarations: [Test2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileTagsModule,
  ],
  exports: [Test2Component],
  providers: [],
})
export class Test2Module {}
