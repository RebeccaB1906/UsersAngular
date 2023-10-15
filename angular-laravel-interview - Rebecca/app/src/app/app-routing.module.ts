import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StudentsComponent } from "./students/students.component";

const routes: Routes = [
  { path: '', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreModule.forRoot({}),
  EffectsModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
