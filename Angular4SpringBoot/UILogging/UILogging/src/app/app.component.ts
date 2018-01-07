import { LoggerServiceService } from './service/logger-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app  works";
  constructor(private loggerServiceService: LoggerServiceService) {
    this.testLog()
  }
  testLog() {
    this.loggerServiceService.trace("i am Trace");
    this.loggerServiceService.error("i am error");
    this.loggerServiceService.info("i am info");
    this.loggerServiceService.debug("i am debug");
    this.loggerServiceService.warn("i am warning");
  }

}
