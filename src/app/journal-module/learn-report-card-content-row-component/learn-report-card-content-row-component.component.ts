import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import 'ngx-swiper-wrapper';


@Component({
  selector: 'app-learn-report-card-content-row-component',
  templateUrl: './learn-report-card-content-row-component.component.html',
  styleUrls: [
    './learn-report-card-content-row-component.component.scss'
  ]
})
export class LearnReportCardContentRowComponentComponent implements OnInit {
  @Input()
  public data: Object;

  public index: Number;
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: false,
    mousewheel: true,
    navigation: true,
    scrollbar: false,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination:  {
      el: '.swiper-pagination',
      bulletClass: 'swiper-pagination-bullet',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div style="display: inline;" class="' + className + '">' + (index + 1) + '</div>';
      }
    },
    autoplay: false
  };
  constructor() { }

  ngOnInit() {
  }

}
