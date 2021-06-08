import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsImplementation, Metric } from './analytics-demo/analytics-demo.interface';

import { AppComponent } from './app.component';
import { AnalyticsService } from './services/analytics.service';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AnalyticsDemoComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    {provide: 'API_URL', useValue: 'http://test.api.com/v1'},
    {provide: 'PRODUCT_API_URL', useValue: 'http://test2.api.com/v1'},
    {provide: 'PRODUCT_ROUTE', useValue: 'products'},

    // Feladat:
    // Product url:   http://test2.api.com/v1
    // Product route: /products
    // ProductService will use: pathUrl: http://test2.api.com/v1/products
    // ProductService(pathUrl)
    // ProductComponent: ProductService URL-t megjeleníti
    {
      provide: ProductService,
      deps: ['PRODUCT_API_URL', 'PRODUCT_ROUTE'],
      useFactory(apiUrl: string, route: string) {
        const path = `${apiUrl}/${route}`;
        return new ProductService(path);
      }
    },

    {provide: AnalyticsService,
      deps: [HttpClient, 'API_URL'],
      useFactory(httpClient: HttpClient, apiUrl: string) {
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: Metric):void => {
          console.log('The metric is:', metric);
          console.log('Sending metric to:', apiUrl);
          // ... send metric to the given API
          // httpClient.post ...
        }
      }

      return new AnalyticsService(loggingImplementation);
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
