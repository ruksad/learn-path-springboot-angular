import { INITIAL_STATE, rootReducer } from './store';
import {NgRedux} from '@angular-redux/store';
import { AppState } from './app-state';
import { CounterActionsService } from './counter-actions.service';
import { NgReduxModule } from '@angular-redux/store';
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
    HttpModule,
    NgReduxModule
  ],
  providers: [CounterActionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux < AppState > ) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

