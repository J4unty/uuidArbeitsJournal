import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-learn-report-card-component',
  templateUrl: './learn-report-card-component.component.html',
  styleUrls: ['./learn-report-card-component.component.css']
})
export class LearnReportCardComponentComponent implements OnInit {
  @Input()
  public data: Object;
  constructor() { }

  ngOnInit() {
  }

}
