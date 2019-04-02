import { Component, Input } from '@angular/core';
import { map, merge, combineLatest } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

export interface ColType {
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cardData = new BehaviorSubject<ColType[]>([
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 },
  ]);

  @Input()
  set addCard(cards: ColType) {
    this.cardData.next([cards, ...this.cardData.value.slice()]);
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    combineLatest(this.cardData),
    map(([bp, cards]) => {
      if (bp.matches) {
        // shrink for mobile
        return cards.map(c => {
          return {
            ...c,
            cols: 1,
            rows: 1,
          };
        });
      }

      return cards;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
