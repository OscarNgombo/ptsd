import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clickable-list',
  standalone: true,
  imports: [NgFor,RouterLink,RouterOutlet],
  templateUrl: './clickable-list.component.html',
  styleUrl: './clickable-list.component.css'
})
export class ClickableListComponent {


  @Input()
  items!: { url: string; name: string; }[];

  @Output() itemClick: EventEmitter<number> = new EventEmitter();
  router: any;

}
