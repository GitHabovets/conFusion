import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {  MatButtonModule, 
          MatCheckboxModule, 
          MatDatepickerModule, 
          MatFormFieldModule,
          MatInputModule, 
          MatRadioModule, 
          MatSelectModule,
          MatToolbarModule, 
          MatListModule, 
          MatGridListModule,
          MatCardModule, 
          MatIconModule, 
          MatProgressSpinnerModule, 
          MatDialogModule,
          MatSliderModule
        } from '@angular/material';

import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from '../app/services/dish.service';
import { PromotionService } from '../app/services/promotion.service';
import { LeaderService } from '../app/services/leader.service';
import { ProcessHttpMsgService } from '../app/services/process-httpmsg.service';
import { FeedbackService } from '../app/services/feedback.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

/*
As per https://github.com/angular/material2/blob/master/guides/getting-started.md,
Step 5: Gesture Support
Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures. In order to get the full feature-set of these components, HammerJS must be loaded into the application.

You can add HammerJS to your application via npm, a CDN (such as the Google CDN), or served directly from your app.

To install via npm, use the following command:

NPM
npm install --save hammerjs
Yarn
yarn add hammerjs
After installing, import it on your app's entry point (e.g. src/main.ts).

import 'hammerjs';
*/
import 'hammerjs';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule, 
    MatSelectModule, 
    //MatSliderModule,
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule,
    MatCardModule, 
    MatIconModule, 
    MatProgressSpinnerModule, 
    MatDialogModule,
    MatSliderModule,
    //FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  entryComponents: [LoginComponent],
  providers: [DishService, 
              PromotionService, 
              LeaderService,
              {provide: 'BaseURL', useValue: baseURL},
              ProcessHttpMsgService,
              FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
