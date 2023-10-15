import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

import * as fromStudent from './store/index'
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromStudent.featureKey, fromStudent.reducer),
    EffectsModule.forFeature([fromStudent.StudentEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Students App'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
