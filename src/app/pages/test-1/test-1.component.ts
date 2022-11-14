import { Component, OnInit } from '@angular/core';
import { FakerProvider } from '../../faker.provider';

@Component({
  selector: 'app-test-1',
  templateUrl: './test-1.component.html',
  styleUrls: ['./test-1.component.scss'],
})
export class Test1Component implements OnInit {
  // We are getting a list of items that contain categories and we want to create a unique list of categories that we can use to sort items by categories and display the json on the page
  //  Sort items by category
  //  Fix the code

  total_items: any = {};
  total_item_categories: any = {};
  constructor(public fakerProvider: FakerProvider) {}
  async ngOnInit() {
    const items = await this.fakerProvider.getItems();
  }
}
