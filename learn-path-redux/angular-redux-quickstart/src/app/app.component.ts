import { AppState } from './app-state';
import { CounterActionsService } from './counter-actions.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select() readonly count$: Observable < number > ;

  constructor(private actions: CounterActionsService, private ngRedux: NgRedux < AppState > ) {

  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}

