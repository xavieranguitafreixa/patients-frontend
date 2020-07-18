import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DatabaseComponent} from "./database/database.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'database', component: DatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
