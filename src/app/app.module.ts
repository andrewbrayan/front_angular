import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// * Import components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// * Import environment
import { environment } from '@environment/environment';
// * Import custom modules
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
