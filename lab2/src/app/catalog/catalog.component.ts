import { Component, OnInit } from '@angular/core';
import {Item} from "../shared/item";
import {ITEMS} from "../shared/items";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {


  items = ITEMS;
  selectedItem: Item = null as any;
//  selectedItem: Item = this.items[0];

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: Item) {
    this.selectedItem = item;
  }
}
