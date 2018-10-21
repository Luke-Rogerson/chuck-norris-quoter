import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowAllQuotesComponent } from './show-all-quotes/show-all-quotes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'all', component: ShowAllQuotesComponent}
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
