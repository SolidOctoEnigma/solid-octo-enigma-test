import { Component, OnInit } from '@angular/core';
import { FakerProvider } from 'src/app/faker.provider';
import * as test from './test-script.js';
@Component({
  selector: 'app-test-4',
  templateUrl: './test-4.component.html',
  styleUrls: ['./test-4.component.scss'],
})
export class Test4Component implements OnInit {
  // We get a list of books and a list of people and we want to find if an author is in the list of the people and output it
  //  Find an author.
  //  Fix the code.
  //  ** Try and use https://rxjs.dev/api/index/function/forkJoin

  matches: any[] = [];
  constructor(private fakerProvider: FakerProvider) {}

  ngOnInit(): void {
    this.fakerProvider.getBooks().subscribe((books) => {
      this.fakerProvider.getPeople('').subscribe((people) => {
        this.matches = test.testFunction(books, people);
      });
    });
  }
}
