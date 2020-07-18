import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';

import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {DatabaseComponent} from './database/database.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';


import {CurrencyPipe} from "@angular/common";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
//import { NgxWebstorageModule } from "ngx-webstorage";

//import { AppComponent } from "./app.component";
//import { HelloComponent } from "./hello.component";
//import { ErrorIntercept } from "./error.interceptor";

import {A11yModule} from "@angular/cdk/a11y";
import {BidiModule} from "@angular/cdk/bidi";
import {ObserversModule} from "@angular/cdk/observers";
import {OverlayModule} from "@angular/cdk/overlay";
import {PlatformModule} from "@angular/cdk/platform";
import {PortalModule} from "@angular/cdk/portal";

import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTableModule} from "@angular/cdk/table";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSliderModule,

    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
