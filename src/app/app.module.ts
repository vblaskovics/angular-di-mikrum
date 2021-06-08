import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsImplementation, Metric } from './analytics-demo/analytics-demo.interface';

import { AppComponent } from './app.component';
import { AnalyticsService } from './services/analytics.service';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    {provide: 'API_URL', useValue: 'http://test.api.com/v1'},
    {provide: AnalyticsService, useFactory() {
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: Metric):void => {
          console.log('The metric is:', metric)
        }
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
