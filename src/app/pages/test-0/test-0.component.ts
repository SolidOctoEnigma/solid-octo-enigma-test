import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakerProvider } from '../../faker.provider';

@Component({
  selector: 'app-test-0',
  templateUrl: './test-0.component.html',
  styleUrls: ['./test-0.component.scss'],
})
export class Test0Component implements OnInit {
  control = new FormControl();
  countries: any = [];
  total_countries: any = {};
  constructor(public fakerProvider: FakerProvider) {}
  ngOnInit(): void {
    this.control.valueChanges.subscribe((gender) => {
      this.fakerProvider.getPeople(gender).subscribe((resp) => {
        const countries = [];
        for (const person in resp) {
          countries.push((person as any).address.country);
        }
        this.countries = [...new Set(countries)];

        this.countries.map((country: any) => {
          this.total_countries[country] = resp.filter(
            (person: any) => person.address.country === country
          );
        });
      });
    });
  }
}
