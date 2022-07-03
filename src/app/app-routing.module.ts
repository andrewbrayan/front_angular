import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('@modules/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@modules/components/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
