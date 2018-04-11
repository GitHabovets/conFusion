import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
          MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
          MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
          MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
