import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportToFileService {
  saveFileAs(data: string, name: string, mime_type: string | undefined) {}
}
