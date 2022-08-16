import { Component, OnInit } from '@angular/core';
import { FakerProvider } from 'src/app/faker.provider';

@Component({
  selector: 'app-test-3',
  templateUrl: './test-3.component.html',
  styleUrls: ['./test-3.component.scss'],
})
export class Test3Component implements OnInit {
  matches: any[] = [];
  constructor(private fakerProvider: FakerProvider) {}

  ngOnInit(): void {
    this.fakerProvider.getBooks().subscribe((books) => {
      this.fakerProvider.getPeople('').subscribe((people) => {
        for (let book in books) {
          people.every((person: any) => {
            if (
              (book as any).author === `${person.firstname} ${person.lastname}`
            ) {
              this.matches = [...this.matches, [book, person]];
            }
          });
        }
      });
    });
  }
}
