import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDayComponentComponent } from './show-day-component/show-day-component.component';
import { LearnReportCardComponentComponent } from './learn-report-card-component/learn-report-card-component.component';
import { IncludeMaterialsModule } from '../include-materials/include-materials.module';
// tslint:disable-next-line:max-line-length
import { LearnReportCardContentRowComponentComponent } from './learn-report-card-content-row-component/learn-report-card-content-row-component.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import 'swiper';
import { JournalComponentComponent } from './journal-component/journal-component.component';

// TODO: remove or keep this config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    IncludeMaterialsModule,
    SwiperModule
  ],
  declarations: [
    ShowDayComponentComponent,
    LearnReportCardComponentComponent,
    LearnReportCardContentRowComponentComponent,
    JournalComponentComponent
  ],
  exports: [
    ShowDayComponentComponent,
    LearnReportCardComponentComponent,
    LearnReportCardContentRowComponentComponent,
    JournalComponentComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class JournalModuleModule { }
