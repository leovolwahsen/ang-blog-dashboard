import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatgoriesComponent } from './catgories/catgories.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "categories", component: CatgoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
