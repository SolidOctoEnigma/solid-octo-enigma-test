import { Component, OnInit } from '@angular/core';
import { FakerProvider } from 'src/app/faker.provider';

@Component({
  selector: 'app-test-3',
  templateUrl: './test-3.component.html',
  styleUrls: ['./test-3.component.scss'],
})
export class Test3Component implements OnInit {
  // We get a list of books and a list of people and we want to find if an author is in the list of the people and output it
  //  Find an author.
  //  Fix the code.
  //  ** Try and use https://rxjs.dev/api/index/function/forkJoin

  matches: any[] = [];
  newMatches$: any;
  constructor(private fakerProvider: FakerProvider) {}

  ngOnInit(): void {
    this.fakerProvider.getBooks().subscribe((books) => {
      this.fakerProvider.getPeople('').subscribe((people) => {
        for (let book of books) {
          people.every((person: any) => {
            if (book.author === `${person.firstname} ${person.lastname}`) {
              this.matches = [
                ...this.matches,
                [book.author, `${person.firstname} ${person.lastname}`],
              ];
            }
          });
        }
      });
    });
  }
}
