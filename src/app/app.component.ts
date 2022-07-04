import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// * Import custom modules
// PrimeNG
import { PrimeNGConfig } from 'primeng/api';
// NGRX
import { Store } from '@ngrx/store';
import { loadUser } from '@modules/ngrx/actions/user.actions';
import { selectLoading } from '@modules/ngrx/selectors/user.selectors';
import { AppState } from '@modules/ngrx/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BAM_Chat';
  loadingUser$: Observable<boolean> = new Observable();

  constructor(private primengConfig: PrimeNGConfig, private store: Store<AppState>) {}

  ngOnInit() {
    this.loadingUser$ = this.store.select(selectLoading);
    this.store.dispatch(loadUser());
    this.primengConfig.ripple = true;
  }
}
