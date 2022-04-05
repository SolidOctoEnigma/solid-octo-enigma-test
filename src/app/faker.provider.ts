import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FakerProvider {
  constructor(public http: HttpClient) {}
  getPeople(gender: string): Observable<any> {
    return this.http
      .get(`https://fakerapi.it/api/v1/persons?_quantity=50&_gender=${gender}`)
      .pipe(pluck('data'));
  }
  getItems(): Promise<any> {
    return lastValueFrom(
      this.http
        .get(
          `https://fakerapi.it/api/v1/products?_quantity=50&_taxes=28&_categories_type=string`
        )
        .pipe(pluck('data'))
    );
  }
}
