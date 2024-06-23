import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'chart', component: ChartComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
