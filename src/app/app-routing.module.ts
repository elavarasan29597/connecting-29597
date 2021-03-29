import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';
import { OuterContentComponent } from './components/main-content/outer-content/outer-content.component';

const routes: Routes = [
  { path: '', component: OuterContentComponent },
  { path: 'dashboard', component: DashboardContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


