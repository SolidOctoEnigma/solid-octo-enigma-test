import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExportToFileService } from './export-to-file';

export interface Attachment {
  data: string;
  file_name: string;
  mime_type?: string;
}

@Component({
  selector: 'app-file-tags',
  templateUrl: './file-tags.component.html',
  styleUrls: ['./file-tags.component.scss'],
})
export class FileTagsComponent implements OnInit {
  @Input() canUpload: boolean = false;
  @Input() files: any[] = [];
  @Input() hint = '';
  @Output() fileDownload = new EventEmitter();
  fileTypes = [
    '.txt',
    '.pdf',
    '.jpg',
    '.png',
    '.gif',
    '.svg',
    '.xls',
    '.xlsx',
    '.doc',
    '.docx',
    '.ppt',
    '.pptx',
    '.csv',
    '.mp3',
    '.wav',
    '.mov',
    '.mp4',
  ];
  accepted = this.fileTypes.join(',');
  constructor(private readonly exportToFile: ExportToFileService) {}
  ngOnInit(): void {}
  downloadFile(file: Attachment) {
    if (file.data) {
      this.exportToFile.saveFileAs(file.data, file.file_name, file.mime_type);
    } else {
      this.fileDownload.emit(file);
    }
  }
}
