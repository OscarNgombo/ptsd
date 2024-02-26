import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clickable-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clickable-list.component.html',
  styleUrl: './clickable-list.component.css'
})
export class ClickableListComponent {
  @Input()
  items!: string[];

  @Output() itemClick: EventEmitter<number> = new EventEmitter();


  onItemClick(index: number) {
    this.itemClick.emit(index);
  }
}
