import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbProgressBarModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';
import { DashComponent } from './dash.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ECommerceComponent } from '../ze-commerce/e-commerce.component';
import { StatsCardFrontComponent } from '../ze-commerce/profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from '../ze-commerce/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from '../ze-commerce/profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitCardComponent } from '../ze-commerce/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from '../ze-commerce/charts-panel/charts-panel.component';
import { ChartPanelHeaderComponent } from '../ze-commerce/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../ze-commerce/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { OrdersChartComponent } from '../ze-commerce/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../ze-commerce/charts-panel/charts/profit-chart.component';
import { StatsCardBackComponent } from '../ze-commerce/profit-card/back-side/stats-card-back.component';
import { TrafficRevealCardComponent } from '../ze-commerce/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarChartComponent } from '../ze-commerce/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficFrontCardComponent } from '../ze-commerce/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from '../ze-commerce/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from '../ze-commerce/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficCardsHeaderComponent } from '../ze-commerce/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { CountryOrdersComponent } from '../ze-commerce/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../ze-commerce/country-orders/map/country-orders-map.component';
import { CountryOrdersChartComponent } from '../ze-commerce/country-orders/chart/country-orders-chart.component';
import { ECommerceVisitorsAnalyticsComponent } from '../ze-commerce/visitors-analytics/visitors-analytics.component';
import { ECommerceVisitorsAnalyticsChartComponent } from '../ze-commerce/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceVisitorsStatisticsComponent } from '../ze-commerce/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from '../ze-commerce/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from '../ze-commerce/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from '../ze-commerce/progress-section/progress-section.component';
import { SlideOutComponent } from '../ze-commerce/slide-out/slide-out.component';
import { EarningCardComponent } from '../ze-commerce/earning-card/earning-card.component';
import { EarningCardFrontComponent } from '../ze-commerce/earning-card/front-side/earning-card-front.component';
import { EarningCardBackComponent } from '../ze-commerce/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from '../ze-commerce/earning-card/back-side/earning-pie-chart.component';
import { EarningLiveUpdateChartComponent } from '../ze-commerce/earning-card/front-side/earning-live-update-chart.component';
import { CountryOrdersMapService } from '../ze-commerce/country-orders/map/country-orders-map.service';

const routes: Routes = [{
  path: '',
  component: DashComponent,
  // children: [{
  //   path: 'tinymce',
  //   component: TinyMCEComponent,
  // }, {
  //   path: 'ckeditor',
  //   component: CKEditorComponent,
  // }],
}];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    DashComponent,
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class DashModule { }


// @NgModule({
//   imports: [
//     ThemeModule,
//     NbCardModule,
//     NbUserModule,
//     NbButtonModule,
//     NbIconModule,
//     NbTabsetModule,
//     NbSelectModule,
//     NbListModule,
//     ChartModule,
//     NbProgressBarModule,
//     NgxEchartsModule,
//     NgxChartsModule,
//     LeafletModule,
//   ],
//   declarations: [
//     ECommerceComponent,
//     StatsCardFrontComponent,
//     StatsAreaChartComponent,
//     StatsBarAnimationChartComponent,
//     ProfitCardComponent,
//     ECommerceChartsPanelComponent,
//     ChartPanelHeaderComponent,
//     ChartPanelSummaryComponent,
//     OrdersChartComponent,
//     ProfitChartComponent,
//     StatsCardBackComponent,
//     TrafficRevealCardComponent,
//     TrafficBarChartComponent,
//     TrafficFrontCardComponent,
//     TrafficBackCardComponent,
//     TrafficBarComponent,
//     TrafficCardsHeaderComponent,
//     CountryOrdersComponent,
//     CountryOrdersMapComponent,
//     CountryOrdersChartComponent,
//     ECommerceVisitorsAnalyticsComponent,
//     ECommerceVisitorsAnalyticsChartComponent,
//     ECommerceVisitorsStatisticsComponent,
//     ECommerceLegendChartComponent,
//     ECommerceUserActivityComponent,
//     ECommerceProgressSectionComponent,
//     SlideOutComponent,
//     EarningCardComponent,
//     EarningCardFrontComponent,
//     EarningCardBackComponent,
//     EarningPieChartComponent,
//     EarningLiveUpdateChartComponent,
//   ],
//   providers: [
//     CountryOrdersMapService,
//   ],
// })
