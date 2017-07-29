import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select<number>((state: AppState) => {
      return state.counter;
    });
  }

  increment(value = 1) {
    this.store.dispatch({
      type: INCREMENT,
      payload: {
        value
      }
    });
  }

  decrement(value = 1) {
    this.store.dispatch({
      type: DECREMENT,
      payload: {
        value
      }
    });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
