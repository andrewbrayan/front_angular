import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// * Import custom modules
// PrimeNG
import { PrimeNGConfig } from 'primeng/api';
// NGRX
import { Store } from '@ngrx/store';
import { loadUser } from '@modules/ngrx/actions/user.actions';
import {
  selectError,
  selectLoading,
} from '@modules/ngrx/selectors/user.selectors';
import { AppState } from '@modules/ngrx/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BAM_Chat';
  loadingUser$: Observable<boolean> = new Observable();

  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUser({ userToken: '' }));
    this.loadingUser$ = this.store.select(selectLoading);
    this.store.select(selectError).subscribe((error) => {
      if (error) {
        this.router.navigate(['/login']);
      }
    });
    this.primengConfig.ripple = true;
  }
}
