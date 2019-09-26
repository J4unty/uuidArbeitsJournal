import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-day-component',
  templateUrl: './show-day-component.component.html',
  styleUrls: ['./show-day-component.component.css']
})
export class ShowDayComponentComponent implements OnInit {
  @Input()
  public data: Object;

  constructor() { }

  ngOnInit() {
  }

}
