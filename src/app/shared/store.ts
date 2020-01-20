import { BehaviorSubject, Observable, throwError } from 'rxjs';

export class Store<T> {
  private state: BehaviorSubject<T>;

  constructor(initialState?: T) {
    this.state = new BehaviorSubject(initialState);
  }

  get state$(): Observable<T> {
    return this.state.asObservable();
  }

  setState(nextState: T): void {
    this.state.next(nextState);
  }
}
