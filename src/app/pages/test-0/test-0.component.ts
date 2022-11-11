import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakerProvider } from '../../faker.provider';

@Component({
  selector: 'app-test-0',
  templateUrl: './test-0.component.html',
  styleUrls: ['./test-0.component.scss'],
})
export class Test0Component implements OnInit {
  // Get people based on gender and create a list of unique countries from the people array and sort people by country
  // The code works, but is this the best way to write it?

  control = new FormControl();
  countries: any = [];
  total_countries: any = {};
  constructor(public fakerProvider: FakerProvider) {}
  ngOnInit(): void {
    this.control.valueChanges.subscribe((gender) => {
      this.fakerProvider.getPeople(gender).subscribe((resp) => {
        const countries = [];
        for (const person of resp) {
          countries.push((person as any).address.country);
        }
        this.countries = countries.filter(
          (v, i, a) => a.findIndex((b) => b == v) == i
        );

        this.countries.some((country: any) => {
          this.total_countries[country] = resp.filter((person: any) => {
            person.address.country === country;
          });
        });
      });
    });
  }
}
