import { LoggerServiceService } from './service/logger-service.service';
import { LoggerProps, defaultLoggerProps } from './models/logger-props';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: defaultLoggerProps,
      useValue: {
        logLevel: 'DEBUG',
        serverLogLevel: 'DEBUG',
        serverLogURI: 'http://localhost:8080/ui-logger-end-point'
      }
    },
    LoggerServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
