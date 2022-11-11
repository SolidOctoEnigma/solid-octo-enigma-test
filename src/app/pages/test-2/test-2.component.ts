import { Component, OnInit } from '@angular/core';
import { Attachment } from './file-tags/file-tags.component';

@Component({
  selector: 'app-test-2',
  templateUrl: './test-2.component.html',
  styleUrls: ['./test-2.component.scss'],
})
export class Test2Component implements OnInit {
  // We created a file tag list where we can download items, we need a way to delete these items as well.
  //  Implement delete function
  files = [
    {
      file_name: 'secret_documents_about_stargate_program.pdf',
      data: '',
      mime_type: 'application/pdf',
    },
    {
      file_name: 'whale_syphony.wav',
      data: '',
      mime_type: 'audio/wav',
    },
    {
      file_name: 'worhole_doodle.png',
      data: '',
      mime_type: 'image/png',
    },
  ];
  async ngOnInit() {}
  download(file: Attachment) {
    console.log(`Downloading ${file.file_name}!`);
  }
  delete() {}
}
