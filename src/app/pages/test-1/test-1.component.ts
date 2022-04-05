import { Component, OnInit } from '@angular/core';
import { FakerProvider } from '../../faker.provider';

@Component({
  selector: 'app-test-1',
  templateUrl: './test-1.component.html',
  styleUrls: ['./test-1.component.scss'],
})
export class Test1Component implements OnInit {
  total_items: any = {};
  total_item_categories: any = {};
  constructor(public fakerProvider: FakerProvider) {}
  async ngOnInit() {
    const items = await this.fakerProvider.getItems();
    let categories = [];
    for (const item in items) {
      categories.push(...items[item].categories);
    }
    categories = [...new Set(categories)];

    for (const item1 in categories) {
      this.total_item_categories[categories[item1]] = items.filter(
        (item: any) => {
          item.categories.filter((category: any) => item === category);
        }
      );
    }
  }
}
