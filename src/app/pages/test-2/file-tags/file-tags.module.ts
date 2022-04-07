import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FileTagsComponent } from './file-tags.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FileTagsComponent],
  imports: [CommonModule, MatIconModule, MatChipsModule, MatFormFieldModule],
  exports: [FileTagsComponent],
})
export class FileTagsModule {}
