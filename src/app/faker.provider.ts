import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FakerProvider {
  constructor(public http: HttpClient) {}
  getPeople(gender: string): Observable<any> {
    return this.http
      .get(`https://fakerapi.it/api/v1/persons?_quantity=10&_gender=${gender}`)
      .pipe(
        pluck('data'),
        map((people) => [
          ...(people as any),
          {
            id: 1,
            firstname: 'Reinhold',
            lastname: 'Predovic',
            email: 'gibson.ryan@hotmail.com',
            phone: '+3398877776461',
            birthday: '2017-04-11',
            gender: 'male',
            address: {
              id: 0,
              street: '6417 Hackett Trail',
              streetName: 'Huel Lake',
              buildingNumber: '17720',
              city: 'New Eleanora',
              zipcode: '75779',
              country: 'Djibouti',
              county_code: 'SL',
              latitude: -86.42777,
              longitude: 92.688805,
            },
            website: 'http://carter.com',
            image: 'http://placeimg.com/640/480/people',
          },
        ])
      );
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
  getBooks(): Observable<any> {
    return this.http.get('https://fakerapi.it/api/v1/books?_quantity=50').pipe(
      pluck('data'),
      map((books) => [
        ...(books as any),
        {
          id: 1,
          title: 'Duck and a Canary.',
          author: 'Reinhold Predovic',
          genre: 'Quaerat',
          description:
            "Mock Turtle in the window, and some of them even when they liked, so that her neck from being run over; and the White Rabbit, who said in a day or two: wouldn't it be murder to leave the room, when.",
          isbn: '9791752362904',
          image: 'http://placeimg.com/480/640/any',
          published: '1999-01-17',
          publisher: 'Tempora Corrupti',
        },
      ])
    );
  }
}
