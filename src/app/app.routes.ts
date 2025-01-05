import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
];

// @NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
// export class AppRoutingModule { }