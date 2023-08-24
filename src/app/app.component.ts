import { Component } from '@angular/core';

import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'drag-drop';

  movies = [
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
    '28b9166b6e0e1694',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
