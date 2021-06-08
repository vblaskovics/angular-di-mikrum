import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';

import { AppComponent } from './app.component';
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
    {provide: 'API_URL', useValue: 'http://test.api.com/v1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
